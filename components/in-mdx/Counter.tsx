"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="px-3 py-1 border border-black/25 dark:border-white/25 hover:bg-black/5 dark:hover:bg-white/15 blend"
      >
        Increment
      </button>
      <div>
        Clicked {count} {count > 1 ? "times" : "time"}
      </div>
    </div>
  );
}
