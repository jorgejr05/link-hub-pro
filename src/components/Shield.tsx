"use client";

import { useEffect } from "react";

export function Shield() {
  useEffect(() => {
    // Evita clique direito (menu de contexto)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Evita arrastar elementos (como imagens)
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}
