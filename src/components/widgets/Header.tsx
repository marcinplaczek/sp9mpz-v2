import { component$, useStore } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

import Logo from "~/components/common/Logo";
import ToggleTheme from "~/components/common/ToggleTheme";
import ToggleMenu from "~/components/common/ToggleMenu";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const { menu } = useContent();

  return (
    <header
      class={`sticky top-0 z-40 flex-none mx-auto w-full transition-all md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white dark:bg-slate-900`}
      id="header"
    >
      <div class="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-7xl md:px-4">
        <div class="flex justify-between">
          <a class="flex items-center py-2.5" href={"/"}>
            <Logo />
          </a>
          <div class="flex items-center md:hidden">
            <ToggleTheme iconClass="w-6 h-6" />
            <ToggleMenu iconClass="w-6 h-6" />
          </div>
        </div>
        <div class="md:self-center flex items-center md:mb-0 ml-4">
          <ToggleTheme iconClass="w-6 h-6" />
        </div>
      </div>
    </header>
  );
});
