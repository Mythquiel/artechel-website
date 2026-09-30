import { useEffect, useRef } from "react";

export default function ReviewWidget({ widgetId }) {
  const ref = useRef(null);

  useEffect(() => {
    const box = ref.current;
    // Skrypt dodajemy tylko raz (tryb deweloperski Reacta uruchamia efekt dwa razy).
    if (!box || box.dataset.loaded) return;
    box.dataset.loaded = "1";
    const script = document.createElement("script");
    script.src = "https://getreviewwidget.com/widget.js";
    script.dataset.widgetId = widgetId;
    script.async = true;
    script.onerror = () => console.warn("Nie udało się załadować widżetu opinii.");
    box.appendChild(script);
  }, [widgetId]);

  return <div ref={ref} className="grw" />;
}
