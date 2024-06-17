import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex h-full items-center justify-center text-center">
      <div class="prose lg:prose-xl">
        <h1>About Us</h1>
        <p>
          We are a team of dedicated professionals committed to providing
          excellent service. Our goal is to exceed your expectations in every
          way.
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About Us",
  meta: [
    {
      name: "description",
      content: "Learn more about our team and mission.",
    },
  ],
};
