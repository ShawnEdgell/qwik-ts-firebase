import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex h-full items-center justify-center text-center">
      <div class="prose lg:prose-xl">
        <h1>Contact Us</h1>
        <p>
          Have questions? We'd love to hear from you! Please reach out to us at
          contact@ourcompany.com or call us at (123) 456-7890.
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content: "Get in touch with us for any inquiries or support.",
    },
  ],
};
