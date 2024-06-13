import { component$, useSignal, useOnWindow, $ } from "@builder.io/qwik";

export const Navbar = component$(() => {
  const showNav = useSignal(true);
  const lastScrollY = useSignal(0);

  useOnWindow(
    "scroll",
    $(() => {
      if (window.scrollY > lastScrollY.value) {
        showNav.value = false;
      } else {
        showNav.value = true;
      }
      lastScrollY.value = window.scrollY;
    }),
  );

  return (
    <div
      class={`fixed top-0 z-10 w-full bg-red-500 px-4 py-6 transition-transform duration-300 ${showNav.value ? "translate-y-0" : "-translate-y-full"}`}
    >
      Navigation
    </div>
  );
});
