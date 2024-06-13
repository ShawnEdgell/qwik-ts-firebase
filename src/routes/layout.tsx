import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Navbar } from "~/components/ui/navbar/navbar";
import { Footer } from "~/components/ui/footer/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
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
