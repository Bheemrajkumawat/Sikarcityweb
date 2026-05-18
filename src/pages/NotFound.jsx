import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const starsRef = useRef(null);
  const shapesRef = useRef(null);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Generate stars
    const starsEl = starsRef.current;

    if (starsEl) {
      for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");

        star.className =
          "absolute rounded-full bg-white animate-pulse";

        const size = Math.random() * 2 + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.opacity = Math.random();

        starsEl.appendChild(star);
      }
    }

    // Floating Shapes
    const shapesEl = shapesRef.current;

    const shapes = [
      { size: 40, top: "10%", left: "5%" },
      { size: 60, top: "15%", right: "8%", rounded: true },
      { size: 30, bottom: "20%", left: "10%" },
      { size: 50, bottom: "15%", right: "5%", rounded: true },
    ];

    if (shapesEl) {
      shapes.forEach((shape) => {
        const div = document.createElement("div");

        div.className =
          "absolute border border-white/10 animate-bounce";

        div.style.width = `${shape.size}px`;
        div.style.height = `${shape.size}px`;

        if (shape.rounded) {
          div.style.borderRadius = "999px";
        }

        Object.assign(div.style, shape);

        shapesEl.appendChild(div);
      });
    }

    // Counter
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-9999 overflow-hidden bg-[#0a0a0f] flex items-center justify-center px-6">

      {/* Stars */}
      <div
        ref={starsRef}
        className="absolute inset-0 overflow-hidden"
      />

      {/* Gradient Orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-violet-600/30 blur-[100px] rounded-full animate-pulse" />

      <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] bg-pink-500/20 blur-[100px] rounded-full animate-pulse" />

      <div className="absolute w-[250px] h-[250px] bg-emerald-500/20 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Shapes */}
      <div
        ref={shapesRef}
        className="absolute inset-0 overflow-hidden"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl text-center flex flex-col items-center gap-4">

        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-[10px] md:text-xs uppercase tracking-[0.2em]">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
          Error 404 — Page Not Found
        </div>

        {/* Astronaut */}
        <div className="animate-bounce">
          <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45"
              cy="45"
              r="44"
              fill="rgba(83,74,183,0.12)"
              stroke="rgba(83,74,183,0.3)"
              strokeWidth="1"
            />

            <ellipse
              cx="45"
              cy="52"
              rx="18"
              ry="22"
              fill="rgba(255,255,255,0.12)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.5"
            />

            <circle
              cx="45"
              cy="34"
              r="14"
              fill="rgba(255,255,255,0.1)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* 404 */}
        <h1 className="text-[100px] sm:text-[140px] leading-none font-black text-white drop-shadow-[0_0_40px_rgba(139,92,246,0.6)] animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed px-4">
          The page you're looking for has drifted into deep
          space. It might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        {/* Counter */}
        <div className="flex items-center gap-4 md:gap-8 text-center flex-wrap justify-center mt-2">
          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold text-violet-300">
              {String(seconds).padStart(2, "0")}
            </h3>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
              Seconds Lost
            </p>
          </div>

          <div className="hidden sm:block text-gray-600 text-2xl">•</div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold text-violet-300">
              404
            </h3>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
              Pages Missing
            </p>
          </div>

          <div className="hidden sm:block text-gray-600 text-2xl">•</div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold text-violet-300">
              ∞
            </h3>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
              Possibilities
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-6 sm:px-0">
          <Link
            to="/"
            className="px-8 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition text-white font-medium text-sm md:text-base text-center"
          >
            Return to Homepage
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-white text-sm md:text-base"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;