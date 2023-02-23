import { defineConfig } from "npm:vite@^4.0.4";
import preact from "npm:@preact/preset-vite@^2.5.0";
import WindiCSS from "npm:vite-plugin-windicss";

import denoResolve from "vite_plugin_deno_resolve";

import "npm:preact@^10.11.3";
import "npm:preact@^10.11.3/hooks";
import "npm:@headlessui/react@1.7.11"; // works

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [denoResolve(), preact(), WindiCSS()],
});
