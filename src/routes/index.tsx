import { component$, useSignal, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";
import { Modal } from "~/components/ui/modal/modal";
import { signInWithGoogle, signOutUser, checkAuthState } from "~/firebase";

export default component$(() => {
  const show = useSignal(false);
  const state = useStore({ user: null as any });

  const handleAuthAction = $(async (action: "login" | "logout") => {
    try {
      if (action === "login") {
        const user = await signInWithGoogle();
        state.user = JSON.stringify(user);
      } else {
        await signOutUser();
        state.user = null;
      }
    } catch (error) {
      console.error(
        `${action === "login" ? "Login" : "Logout"} failed:`,
        error,
      );
    }
  });

  // Check authentication state on component mount
  checkAuthState((user) => {
    state.user = user ? JSON.stringify(user) : null;
  });

  return (
    <>
      <div class="flex h-full items-center justify-center text-center">
        <div class="max-w-md space-x-2">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button look="primary" onClick$={() => (show.value = true)}>
            Open Modal
          </Button>
          {state.user ? (
            <Button
              look="secondary"
              onClick$={() => handleAuthAction("logout")}
              class="mt-4"
            >
              Logout
            </Button>
          ) : (
            <Button
              look="secondary"
              onClick$={() => handleAuthAction("login")}
              class="mt-4"
            >
              Sign in with Google
            </Button>
          )}
        </div>
      </div>

      <Modal.Root bind:show={show}>
        <Modal.Panel>
          <div class="relative space-y-6 p-6">
            <div class="absolute right-4 top-4">
              <div
                class="modal-close cursor-pointer"
                onClick$={() => (show.value = false)}
              >
                <span class="h-5 w-5">&times;</span>
              </div>
            </div>
            <Modal.Title class="text-2xl font-bold">Title</Modal.Title>
            <Modal.Description class="text-lg text-gray-500">
              Description
            </Modal.Description>
            <div>Modal content goes here...</div>
            <footer class="flex justify-end space-x-4">
              <Button look="primary" onClick$={() => (show.value = false)}>
                Save
              </Button>
            </footer>
          </div>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
