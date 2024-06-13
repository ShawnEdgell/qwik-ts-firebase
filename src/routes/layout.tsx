import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Navbar } from "~/components/ui/navbar/navbar";
import { Footer } from "~/components/ui/footer/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <div class="flex min-h-screen flex-col items-center">
        <Navbar />
        <main class="mt-[4.5rem] flex w-full flex-1 flex-col items-center justify-center px-4 py-16">
          <Slot />
        </main>
      </div>
      <Footer />
    </>
  );
});
