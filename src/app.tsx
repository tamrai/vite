import { useState } from "preact/hooks";
import "./app.css";

// import * as R from "https://cdn.skypack.dev/ramda@0.27.1"; // works
// import * as R from "ramda"; // TODO: Error Failed to resolve import -> import_map.json
// import * as R from "npm:ramda@0.28.0"; // TODO: Error Failed to resolve import

// import * as Capi from 'capi'
// import * as Capi from "http://localhost:4646/mod.ts"
// import * as Capi from "https://deno.land/x/capi@v0.1.0-beta.23/mod.ts";

// TODO: Error render by importing headlessui
// import { Menu } from "npm:@headlessui/react@1.7.11";
// import { Menu } from "https://esm.sh/@headlessui/react@1.7.3";
// import { Menu } from "https://esm.sh/@headlessui/react@1.7.3?external=react,react-dom,@types/react,@types/react-dom";
// import { Menu } from "https://esm.sh/@headlessui/react@1.7.3?alias=react:preact/compat,react-dom:preact/compat&deps=preact@10.7.2";

import { Menu } from "@headlessui/react"; // works take from npm in vite.config.mts

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Menu>
        <Menu.Button>Menu button</Menu.Button>
        <Menu.Items>
          <Menu.Item>
            <span className="opacity-75">Menu Item</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="bg-white py-24 sm:py-32 rounded-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Support center
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
