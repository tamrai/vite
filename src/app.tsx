import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import "./app.css";

import * as R from "https://cdn.skypack.dev/ramda@0.27.1";

// import * as Capi from 'capi'
// import * as Capi from "http://localhost:4646/mod.ts"
// import * as Capi from "https://deno.land/x/capi@v0.1.0-beta.23/mod.ts";
// import { Application } from "https://deno.land/x/oak/mod.ts";

export function App() {
  const [count, setCount] = useState(0);
  console.log("R", R);
  // console.log("Capi", Capi);

  return (
    <>
      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Hello</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
