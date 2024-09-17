// app/error.tsx
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>¡Ups! Algo salió mal</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Intentar de nuevo</button>
    </div>
  );
}
