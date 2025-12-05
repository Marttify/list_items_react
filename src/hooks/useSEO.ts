// Actualiza automáticamente <title> y <meta name="description"> cuando cambia la cantidad de items en la lista.

import { useEffect } from "react";

export function useSEO (
  { title, description }: 
  { title: string, description: string }
) {

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description])

}