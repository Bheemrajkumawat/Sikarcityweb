import { useState, useEffect } from "react";

const Loader = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let v = 0;
    const iv = setInterval(() => {
      v = Math.min(72, v + Math.random() * 3.5);
      setPct(Math.round(v));
      if (v >= 72) clearInterval(iv);
    }, 90);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-surface-container-low">
      <div
        style={{
          width: 240,
          background: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid #e2e2e2",
          animation: "scRise .6s cubic-bezier(.22,1,.36,1) both",
        }}
      >
        {/* shimmer top bar */}
        <div style={{ height: 3, background: "#00113a", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg,#00113a 0%,#fd8b00 45%,#ffb77d 55%,#fd8b00 70%,#00113a 100%)",
            backgroundSize: "200% 100%",
            animation: "scSweep 1.8s linear infinite",
          }} />
        </div>

        {/* dark header */}
        <div style={{ background: "#00113a", padding: "20px 16px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, position: "relative", overflow: "hidden" }}>
          {/* grid overlay */}
          <div style={{
            position: "absolute", inset: 0, opacity: .07, pointerEvents: "none",
            backgroundImage: "repeating-linear-gradient(0deg,#fd8b00 0,#fd8b00 1px,transparent 0,transparent 12px),repeating-linear-gradient(90deg,#fd8b00 0,#fd8b00 1px,transparent 0,transparent 12px)",
          }} />

          {/* spinner */}
          <div style={{ position: "relative", width: 52, height: 52, animation: "scGlow 2s ease-in-out infinite" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px solid rgba(253,139,0,.15)" }} />
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid transparent", borderTopColor: "#fd8b00", borderRightColor: "#ffb77d", animation: "scSpin1 1s linear infinite" }} />
            <div style={{ position: "absolute", inset: 6, borderRadius: "50%", border: "1.5px solid transparent", borderBottomColor: "rgba(253,139,0,.4)", animation: "scSpin2 1.6s linear infinite" }} />
            <div style={{ position: "absolute", inset: 13, borderRadius: "50%", background: "rgba(0,17,58,.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14, color: "#fd8b00" }}>castle</span>
            </div>
          </div>

          {/* brand */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "2.5px", color: "#fff", lineHeight: 1 }}>
              SIKAR<span style={{ color: "#fd8b00" }}>CITY</span>
            </div>
            <div style={{ fontSize: 9, letterSpacing: "2.5px", color: "rgba(255,255,255,.35)", marginTop: 4, fontWeight: 500 }}>SHEKHAWATI</div>
          </div>
        </div>

        {/* diamond divider */}
        <div style={{ display: "flex", alignItems: "center", padding: "0 16px", margin: "14px 0 0" }}>
          <div style={{ flex: 1, height: .5, background: "linear-gradient(90deg,transparent,#e2e2e2)" }} />
          <div style={{ width: 5, height: 5, background: "#fd8b00", transform: "rotate(45deg)", margin: "0 8px", flexShrink: 0 }} />
          <div style={{ flex: 1, height: .5, background: "linear-gradient(90deg,#e2e2e2,transparent)" }} />
        </div>

        {/* body */}
        <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 12 }}>

          {/* skeleton bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "1.5px", color: "#9b8e76", textTransform: "uppercase" }}>Loading places</div>
            {[{ w: "100%" }, { w: "68%" }].map((s, i) => (
              <div key={i} style={{ height: 7, borderRadius: 99, background: "#eeeeee", width: s.w, overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent)", animation: `scSweep 1.4s ease-in-out ${i * .2}s infinite` }} />
              </div>
            ))}
          </div>

          {/* progress */}
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "1px", color: "#444650", textTransform: "uppercase" }}>Directory</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#fd8b00", fontVariantNumeric: "tabular-nums" }}>{pct}%</div>
            </div>
            <div style={{ height: 4, borderRadius: 99, background: "#eeeeee", overflow: "hidden" }}>
              <div style={{ height: "100%", borderRadius: 99, background: "#00113a", width: `${pct}%`, transition: "width .1s linear" }} />
            </div>
          </div>
        </div>

        {/* footer */}
        <div style={{ borderTop: "1px solid #f3f3f4", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 4 }}>
            {[0, .2, .4].map((d, i) => (
              <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "#e2e2e2", animation: `scDot 1.2s ease-in-out ${d}s infinite` }} />
            ))}
          </div>
          <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "1.5px", color: "#c5c6d2", textTransform: "uppercase" }}>Please wait</div>
        </div>
      </div>

      <style>{`
        @keyframes scRise  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scSweep { from{transform:translateX(-100%)} to{transform:translateX(100%)} }
        @keyframes scSpin1 { to{transform:rotate(360deg)} }
        @keyframes scSpin2 { to{transform:rotate(-360deg)} }
        @keyframes scGlow  { 0%,100%{box-shadow:0 0 0 0 rgba(253,139,0,0)} 50%{box-shadow:0 0 0 6px rgba(253,139,0,.12)} }
        @keyframes scDot   { 0%,100%{background:#e2e2e2;transform:scale(1)} 50%{background:#fd8b00;transform:scale(1.5)} }
      `}</style>
    </div>
  );
};

export default Loader;