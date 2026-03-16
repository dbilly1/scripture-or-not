"use client";

import { useState, useCallback } from "react";
import { ALL_STATEMENTS, type Statement } from "@/lib/statements";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// function generateRound(): Statement[] {
//   const selected = new Set<number>();
//   while (selected.size < 10) {
//     selected.add(Math.floor(Math.random() * ALL_STATEMENTS.length));
//   }
//   return [...selected].map((i) => ALL_STATEMENTS[i]);
// }

function generateRound(): Statement[] {
  const shuffled = [...ALL_STATEMENTS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
}

const MESSAGES = [
  { min: 9, text: "Outstanding! You truly know your Scripture! 🏆" },
  { min: 7, text: "Great knowledge of Scripture! Well done. ✨" },
  { min: 5, text: "Not bad — keep reading and you'll do even better! 📖" },
  { min: 0, text: "Keep studying — the Word is worth knowing! 🙏" },
];

type Phase = "idle" | "loading" | "playing" | "result";
type Flash = "correct" | "wrong" | null;

/* Reusable primary button */
function PrimaryButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="
        px-10 py-4 rounded-[14px] border-none cursor-pointer
        bg-[linear-gradient(135deg,#b07d50,#d4a574)] text-white
        text-lg font-bold font-serif tracking-[0.3px]
        shadow-[0_4px_16px_rgba(176,125,80,0.35)]
        transition-all duration-150
        hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(176,125,80,0.45)]
      "
    >
      {children}
    </button>
  );
}

export default function ScriptureGame() {
  const [statements, setStatements] = useState<Statement[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [flash, setFlash] = useState<Flash>(null);
  const [cardKey, setCardKey] = useState(0);

  const startGame = useCallback(() => {
    setPhase("loading");
    setFlash(null);
    setTimeout(() => {
      setStatements(generateRound());
      setCurrent(0);
      setScore(0);
      setCardKey((k) => k + 1);
      setPhase("playing");
    }, 900);
  }, []);

  const handleAnswer = (isScriptureGuess: boolean) => {
    if (flash) return;
    const correct = isScriptureGuess === statements[current].isScripture;
    setFlash(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      setFlash(null);
      if (current + 1 >= 10) {
        setPhase("result");
      } else {
        setCurrent((c) => c + 1);
        setCardKey((k) => k + 1);
      }
    }, 1000);
  };

  const finalScore = phase === "result" ? score : 0;
  const resultMsg = MESSAGES.find((m) => finalScore >= m.min)?.text ?? "";
  const stmt = statements[current];

  /* Card colour variants based on flash state */
  const cardBg =
    flash === "correct"
      ? "bg-[#e8f5e9]"
      : flash === "wrong"
        ? "bg-[#fce8e8]"
        : "bg-[#fffdf9]";
  const cardBorder =
    flash === "correct"
      ? "border-[#81c784]"
      : flash === "wrong"
        ? "border-[#e57373]"
        : "border-[#e0d0be]";

  return (
    <div
      className="
        min-h-screen font-serif flex flex-col items-center justify-center
        px-4 py-6 relative overflow-hidden
        bg-[linear-gradient(160deg,#fdf8f0_0%,#f5ede0_50%,#ede4d8_100%)]
      "
    >
      {/* Decorative dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,#4a3728_1px,transparent_1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Header */}
      <div className="text-center mb-9 relative">
        <div className="text-[13px] tracking-[4px] text-[#9c7c5c] uppercase mb-2 font-sans">
          ✦ A Word Game ✦
        </div>
        <h1
          className="m-0 font-bold text-[#2c1a0e] leading-[1.1] tracking-tight"
          style={{ fontSize: "clamp(26px,5vw,40px)" }}
        >
          Scripture or Not?
        </h1>
      </div>

      {/* ── IDLE ── */}
      {phase === "idle" && (
        <div
          className="
            w-full max-w-[480px] text-center bg-[#fffdf9]
            border-2 border-[#e0d0be] rounded-3xl px-9 py-12
            shadow-[0_12px_48px_rgba(80,50,20,0.14)] animate-slide-up
          "
        >
          <div className="text-[56px] mb-4">📖</div>
          <p className="text-[17px] text-[#4a3020] leading-[1.7] italic mb-7">
            Can you tell a real Bible verse from a convincing fake?
          </p>
          <PrimaryButton onClick={startGame}>Start Game ✦</PrimaryButton>
        </div>
      )}

      {/* ── LOADING ── */}
      {phase === "loading" && (
        <div className="text-center">
          <div className="text-[48px] inline-block text-[#b07d50] animate-spin">
            ✦
          </div>
          <p className="text-[#9c7c5c] font-sans text-sm tracking-[2px] uppercase mt-4">
            Are you ready?
          </p>
        </div>
      )}

      {/* ── PLAYING ── */}
      {phase === "playing" && stmt && (
        <>
          {/* Progress & score row */}
          <div className="flex justify-between w-full max-w-[560px] mb-4 font-sans text-[13px] text-[#8a6848]">
            <span>Statement {current + 1} of 10</span>
            <span>Score: {score}</span>
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-[560px] h-1 bg-[#e8d9c8] rounded-full mb-7">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#b07d50,#d4a574)] transition-[width] duration-500"
              style={{ width: `${(current / 10) * 100}%` }}
            />
          </div>

          {/* Card */}
          <div
            key={cardKey}
            className={`
              w-full max-w-[560px] border-2 rounded-[20px] px-9 py-10 relative text-center
              shadow-[0_8px_40px_rgba(80,50,20,0.12),0_2px_8px_rgba(80,50,20,0.06)]
              transition-[background-color,border-color] duration-300 animate-slide-up
              ${cardBg} ${cardBorder}
            `}
          >
            {/* Decorative quote mark */}
            <div className="absolute top-4 left-[22px] text-[72px] text-[#e0cfbe] leading-none font-serif select-none">
              &ldquo;
            </div>

            <p
              className="m-0 relative z-10 italic text-[#2c1a0e] leading-[1.65]"
              style={{ fontSize: "clamp(17px,2.5vw,22px)" }}
            >
              {stmt.text}
            </p>

            {flash && (
              <div
                className={`
                  mt-5 text-[15px] font-sans not-italic font-semibold animate-fade-in
                  ${flash === "correct" ? "text-[#2e7d32]" : "text-[#c62828]"}
                `}
              >
                {flash === "correct"
                  ? stmt.isScripture
                    ? `✓ Correct! (${stmt.ref})`
                    : `✓ Correct! (${stmt.ref})`
                  : stmt.isScripture
                    ? `✗ That was Scripture — ${stmt.ref}`
                    : `✗ That's not actually in the Bible - ${stmt.ref}`}
              </div>
            )}
          </div>

          {/* Answer buttons */}
          <div className="flex gap-4 mt-7 w-full max-w-[560px]">
            <button
              onClick={() => handleAnswer(true)}
              disabled={!!flash}
              className="
                flex-1 py-[18px] px-3 font-serif font-bold rounded-[14px] border-2
                bg-[#f0f7f2] text-[#4a7c59] border-[#b8d9c4]
                shadow-[0_3px_12px_rgba(80,50,20,0.08)]
                transition-all duration-150
                hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(80,50,20,0.15)]
                disabled:cursor-not-allowed disabled:opacity-60
              "
              style={{ fontSize: "clamp(15px,2vw,18px)" }}
            >
              📖 Scripture
            </button>
            <button
              onClick={() => handleAnswer(false)}
              disabled={!!flash}
              className="
                flex-1 py-[18px] px-3 font-serif font-bold rounded-[14px] border-2
                bg-[#f7f0f0] text-[#7c4a4a] border-[#d9b8b8]
                shadow-[0_3px_12px_rgba(80,50,20,0.08)]
                transition-all duration-150
                hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(80,50,20,0.15)]
                disabled:cursor-not-allowed disabled:opacity-60
              "
              style={{ fontSize: "clamp(15px,2vw,18px)" }}
            >
              ✗ Not Scripture
            </button>
          </div>
        </>
      )}

      {/* ── RESULT ── */}
      {phase === "result" && (
        <div
          className="
            w-full max-w-[480px] text-center bg-[#fffdf9]
            border-2 border-[#e0d0be] rounded-3xl px-9 py-12
            shadow-[0_12px_48px_rgba(80,50,20,0.14)] animate-slide-up
          "
        >
          <div className="text-[64px] mb-2">
            {finalScore >= 8 ? "🏆" : finalScore >= 5 ? "📖" : "🙏"}
          </div>
          <div className="text-[13px] tracking-[3px] text-[#9c7c5c] uppercase font-sans mb-3">
            Final Score
          </div>
          <div className="text-[72px] font-bold text-[#2c1a0e] leading-none mb-2">
            {finalScore}
            <span className="text-[36px] text-[#9c7c5c]">/10</span>
          </div>
          <p className="text-[18px] text-[#4a3020] my-5 mb-8 leading-[1.5] italic">
            {resultMsg}
          </p>
          <PrimaryButton onClick={startGame}>Play Again ↩</PrimaryButton>
        </div>
      )}
    </div>
  );
}
