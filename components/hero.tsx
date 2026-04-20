import { CYCLE } from "@/app/data/portfolio";
import { useEffect, useRef, useState } from "react";

function HeroCycle() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [mode, setMode]   = useState<"typing"|"pausing"|"erasing">("typing");
  const charRef = useRef(0);

  useEffect(() => {
    const target = CYCLE[phaseIdx].text;

    if (mode === "typing") {
      if (charRef.current < target.length) {
        const t = setTimeout(() => {
          charRef.current += 1;
          setDisplayed(target.slice(0, charRef.current));
        }, 72);
        return () => clearTimeout(t);
      } else {
        // fully typed → pause
        const t = setTimeout(() => setMode("erasing"), 2200);
        return () => clearTimeout(t);
      }
    }

    if (mode === "erasing") {
      if (charRef.current > 0) {
        const t = setTimeout(() => {
          charRef.current -= 1;
          setDisplayed(target.slice(0, charRef.current));
        }, 38);
        return () => clearTimeout(t);
      } else {
        // fully erased → switch phase
        setPhaseIdx(i => (i + 1) % CYCLE.length);
        setMode("typing");
      }
    }
  }, [displayed, mode, phaseIdx]);

  const current = CYCLE[phaseIdx];

  return (
    <span
      style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: "clamp(20px, 2vw, 28px)",
        color: current.color,
        lineHeight: 1.7,
        letterSpacing: "0.01em",
        display: "inline-block",
        minHeight: "2.4em",
      }}
      aria-label="Muhammed Fayiz CH — Full-Stack Developer"
    >
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "0.8em",
          background: current.color,
          marginLeft: "3px",
          verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}


export default HeroCycle