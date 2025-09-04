import { useCallback, useEffect, useRef } from "react";

const SLIDE_INTERVAL = 5000;
const GAP = 2;

export const useSlider = (dataLength: number) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const slide = useCallback(
    (dir: "next" | "prev" = "next", loop = true) => {
      const rows = document.querySelectorAll<HTMLElement>(".row-s");
      const firstSlide = document.querySelector<HTMLElement>(".slide");

      if (!firstSlide) return;

      const slideWidth = firstSlide.offsetWidth;

      rows.forEach((row) => {
        const l = row.scrollLeft;
        const scrollEnd = row.scrollWidth - row.offsetWidth;
        const isReverse = row.classList.contains("reverse");

        if (dir === "next") {
          row.scrollLeft = isReverse
            ? l - GAP > 0
              ? l - slideWidth
              : row.scrollWidth
            : l + GAP < scrollEnd
            ? l + slideWidth
            : 0;
        } else {
          row.scrollLeft = isReverse
            ? l + GAP < scrollEnd
              ? l + slideWidth
              : 0
            : l - GAP > 0
            ? l - slideWidth
            : row.scrollWidth;
        }
      });

      clearTimer();
      if (loop) {
        timerRef.current = setTimeout(() => slide("next"), SLIDE_INTERVAL);
      }
    },
    [clearTimer]
  );

  const startSlider = useCallback(() => {
    clearTimer();
    if (window.screen.availWidth > 1200) {
      timerRef.current = setTimeout(() => slide("next"), SLIDE_INTERVAL);
    }
  }, [slide, clearTimer]);

  useEffect(() => {
    const container = containerRef.current;
    const reverseRow = document.querySelector(".row-s.reverse") as HTMLElement | null;

    if (reverseRow) {
      reverseRow.scrollLeft = reverseRow.scrollWidth;
      reverseRow.classList.add("slide-smooth");
    }

    window.addEventListener("resize", startSlider);
    window.addEventListener("blur", clearTimer);
    window.addEventListener("focus", startSlider);

    container?.addEventListener("mouseenter", clearTimer);
    container?.addEventListener("mouseleave", startSlider);

    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");

    prevBtn?.addEventListener("click", () => slide("prev", false));
    nextBtn?.addEventListener("click", () => slide("next", false));

    if (dataLength > 0) {
      startSlider();
    }

    return () => {
      clearTimer();
      window.removeEventListener("resize", startSlider);
      window.removeEventListener("blur", clearTimer);
      window.removeEventListener("focus", startSlider);

      container?.removeEventListener("mouseenter", clearTimer);
      container?.removeEventListener("mouseleave", startSlider);

      prevBtn?.removeEventListener("click", () => slide("prev", false));
      nextBtn?.removeEventListener("click", () => slide("next", false));
    };
  }, [dataLength, slide, startSlider, clearTimer]);

  return { containerRef };
};
