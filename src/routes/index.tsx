import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";
import { Modal } from "~/components/ui/modal/modal";

export default component$(() => {
  const show = useSignal(false);

  return (
    <>
      <div class="flex h-full items-center justify-center text-center">
        <div class="prose lg:prose-xl">
          <h1>Hello there</h1>
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button
            look="secondary"
            class=" mb-12 mt-6"
            onClick$={() => (show.value = true)}
          >
            Open Modal
          </Button>
        </div>
      </div>

      <Modal.Root bind:show={show}>
        <Modal.Panel>
          <div class="prose lg:prose-xl space-y-6 p-6">
            <h2>Title</h2>
            <p>Description</p>
            <footer class="flex justify-end space-x-4">
              <Button look="secondary" onClick$={() => (show.value = false)}>
                Close
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
