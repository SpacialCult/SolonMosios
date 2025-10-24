import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1500); // start fade
    const finish = setTimeout(onFinish, 2200); // hide after fade
    return () => {
      clearTimeout(timer);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 text-white text-3xl font-bold transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="animate-pulse">Welcome!</h1>
    </div>
  );
}