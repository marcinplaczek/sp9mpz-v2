import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/logo.svg?width=96&height=96&svg";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-1"
      width={48}
      height={48}
      alt="SP9MPZ logo"
      loading="lazy"
    />
    SP9MPZ
  </span>
));
