import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  return (
    <div class="fixed  top-0 z-10 flex w-full justify-between bg-black px-4 py-6">
      <p class="text-lg font-bold text-white">Navigation</p>
      <nav>
        <Link href="/" class="mx-2 text-white">
          Home
        </Link>
        <Link href="/about" class="mx-2 text-white">
          About
        </Link>
        <Link href="/contact" class="mx-2 text-white">
          Contact
        </Link>
      </nav>
    </div>
  );
});
