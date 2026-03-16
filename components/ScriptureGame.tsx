"use client";

import { useState, useCallback } from "react";

interface Statement {
  text: string;
  isScripture: boolean;
  ref: string | null;
}

const ALL_STATEMENTS: Statement[] = [
  // Real Scripture
  { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", isScripture: true, ref: "John 3:16" },
  { text: "The Lord is my shepherd; I shall not want.", isScripture: true, ref: "Psalm 23:1" },
  { text: "I can do all things through Christ who strengthens me.", isScripture: true, ref: "Philippians 4:13" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding.", isScripture: true, ref: "Proverbs 3:5" },
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", isScripture: true, ref: "Joshua 1:9" },
  { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", isScripture: true, ref: "1 Corinthians 13:4" },
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.", isScripture: true, ref: "Jeremiah 29:11" },
  { text: "The heart of man plans his way, but the Lord establishes his steps.", isScripture: true, ref: "Proverbs 16:9" },
  { text: "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God.", isScripture: true, ref: "Philippians 4:6" },
  { text: "Even youths grow tired and weary, but those who hope in the Lord will renew their strength.", isScripture: true, ref: "Isaiah 40:30-31" },
  { text: "Blessed are the pure in heart, for they will see God.", isScripture: true, ref: "Matthew 5:8" },
  { text: "Cast all your anxiety on him because he cares for you.", isScripture: true, ref: "1 Peter 5:7" },
  { text: "A gentle answer turns away wrath, but a harsh word stirs up anger.", isScripture: true, ref: "Proverbs 15:1" },
  { text: "In the beginning God created the heavens and the earth.", isScripture: true, ref: "Genesis 1:1" },
  { text: "This is the day the Lord has made; let us rejoice and be glad in it.", isScripture: true, ref: "Psalm 118:24" },

  // Not Scripture
  { text: "God helps those who help themselves.", isScripture: false, ref: null },
  { text: "Cleanliness is next to godliness.", isScripture: false, ref: null },
  { text: "To thine own self be true, and thou canst not be false to any man.", isScripture: false, ref: null },
  { text: "The Lord works in mysterious ways his wonders to perform.", isScripture: false, ref: null },
  { text: "Faith can move mountains, and patience can calm the storms within.", isScripture: false, ref: null },
  { text: "When one door closes, God opens a window.", isScripture: false, ref: null },
  { text: "A righteous man speaks truth in love and walks humbly before his maker.", isScripture: false, ref: null },
  { text: "Seek peace in all your ways, and wisdom shall follow close behind.", isScripture: false, ref: null },
  { text: "Do unto others as you would have them do unto you, and your days shall be long.", isScripture: false, ref: null },
  { text: "The eyes are the window to the soul, and the soul reflects the heart.", isScripture: false, ref: null },
  { text: "Money is the root of all evil.", isScripture: false, ref: null },
  { text: "This too shall pass, for all seasons are appointed by the hand of God.", isScripture: false, ref: null },
  { text: "Spare the rod and spoil the child, for discipline is the path to wisdom.", isScripture: false, ref: null },
  { text: "Pride goes before a fall, and humility lifts the lowly soul.", isScripture: false, ref: null },
  { text: "Let your light so shine before others, and goodness shall return to you tenfold.", isScripture: false, ref: null },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateRound(): Statement[] {
  const scripture = shuffle(ALL_STATEMENTS.filter(s => s.isScripture)).slice(0, 5);
  const notScripture = shuffle(ALL_STATEMENTS.filter(s => !s.isScripture)).slice(0, 5);
  return shuffle([...scripture, ...notScripture]);
}

const MESSAGES = [
  { min: 9, text: "Outstanding! You truly know your Scripture! 🏆" },
  { min: 7, text: "Great knowledge of Scripture! Well done. ✨" },
  { min: 5, text: "Not bad — keep reading and you'll do even better! 📖" },
  { min: 0, text: "Keep studying — the Word is worth knowing! 🙏" },
];

type Phase = "idle" | "loading" | "playing" | "result";
type Flash = "correct" | "wrong" | null;

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
      setCardKey(k => k + 1);
      setPhase("playing");
    }, 900);
  }, []);

  const handleAnswer = (isScriptureGuess: boolean) => {
    if (flash) return;
    const correct = isScriptureGuess === statements[current].isScripture;
    setFlash(correct ? "correct" : "wrong");
    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      setFlash(null);
      if (current + 1 >= 10) {
        setPhase("result");
      } else {
        setCurrent(c => c + 1);
        setCardKey(k => k + 1);
      }
    }, 600);
  };

  const finalScore = phase === "result" ? score : 0;
  const resultMsg = MESSAGES.find(m => finalScore >= m.min)?.text ?? "";
  const stmt = statements[current];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #fdf8f0 0%, #f5ede0 50%, #ede4d8 100%)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 16px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative background dot pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "radial-gradient(circle, #4a3728 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "36px", position: "relative" }}>
        <div style={{ fontSize: "13px", letterSpacing: "4px", color: "#9c7c5c", textTransform: "uppercase", marginBottom: "8px", fontFamily: "sans-serif" }}>
          ✦ A Word Game ✦
        </div>
        <h1 style={{
          fontSize: "clamp(26px, 5vw, 40px)",
          color: "#2c1a0e",
          margin: 0,
          fontWeight: "bold",
          letterSpacing: "-0.5px",
          lineHeight: 1.1,
        }}>
          Scripture or Not?
        </h1>
      </div>

      {/* IDLE */}
      {phase === "idle" && (
        <div style={{
          width: "100%", maxWidth: "480px", textAlign: "center",
          background: "#fffdf9", border: "2px solid #e0d0be",
          borderRadius: "24px", padding: "48px 36px",
          boxShadow: "0 12px 48px rgba(80,50,20,0.14)",
          animation: "slideUp 0.4s ease",
        }}>
          <div style={{ fontSize: "56px", marginBottom: "16px" }}>📖</div>
          <p style={{ fontSize: "17px", color: "#4a3020", lineHeight: 1.7, fontStyle: "italic", marginBottom: "28px" }}>
            Can you tell a real Bible verse from a convincing fake?
          </p>
          <button
            onClick={startGame}
            style={{
              padding: "16px 40px",
              background: "linear-gradient(135deg, #b07d50, #d4a574)",
              color: "#fff", border: "none", borderRadius: "14px",
              fontSize: "18px", fontFamily: "Georgia, serif",
              fontWeight: "bold", cursor: "pointer",
              boxShadow: "0 4px 16px rgba(176,125,80,0.35)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(176,125,80,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(176,125,80,0.35)"; }}
          >
            Start Game ✦
          </button>
        </div>
      )}

      {/* LOADING */}
      {phase === "loading" && (
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", animation: "spin 1s linear infinite", display: "inline-block", color: "#b07d50" }}>✦</div>
          <p style={{ color: "#9c7c5c", fontFamily: "sans-serif", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", marginTop: "16px" }}>
            Preparing your round…
          </p>
        </div>
      )}

      {/* PLAYING */}
      {phase === "playing" && stmt && (
        <>
          <div style={{
            display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "560px",
            marginBottom: "16px", fontFamily: "sans-serif", fontSize: "13px", color: "#8a6848",
          }}>
            <span>Statement {current + 1} of 10</span>
            <span>Score: {score}</span>
          </div>

          <div style={{
            width: "100%", maxWidth: "560px", height: "4px",
            background: "#e8d9c8", borderRadius: "99px", marginBottom: "28px",
          }}>
            <div style={{
              height: "100%", borderRadius: "99px",
              background: "linear-gradient(90deg, #b07d50, #d4a574)",
              width: `${(current / 10) * 100}%`,
              transition: "width 0.4s ease",
            }} />
          </div>

          <div
            key={cardKey}
            style={{
              width: "100%", maxWidth: "560px",
              background: flash === "correct" ? "#e8f5e9" : flash === "wrong" ? "#fce8e8" : "#fffdf9",
              border: flash === "correct" ? "2px solid #81c784" : flash === "wrong" ? "2px solid #e57373" : "2px solid #e0d0be",
              borderRadius: "20px",
              padding: "40px 36px",
              boxShadow: "0 8px 40px rgba(80,50,20,0.12), 0 2px 8px rgba(80,50,20,0.06)",
              transition: "background 0.3s, border-color 0.3s",
              position: "relative",
              textAlign: "center",
              animation: "slideUp 0.35s ease",
            }}
          >
            <div style={{
              position: "absolute", top: "16px", left: "22px",
              fontSize: "72px", color: "#e0cfbe", lineHeight: 1,
              fontFamily: "Georgia, serif", userSelect: "none",
            }}>&ldquo;</div>

            <p style={{
              fontSize: "clamp(17px, 2.5vw, 22px)",
              lineHeight: 1.65,
              color: "#2c1a0e",
              margin: 0,
              position: "relative",
              zIndex: 1,
              fontStyle: "italic",
            }}>
              {stmt.text}
            </p>

            {flash && (
              <div style={{
                marginTop: "20px",
                fontSize: "15px",
                fontFamily: "sans-serif",
                fontStyle: "normal",
                color: flash === "correct" ? "#2e7d32" : "#c62828",
                fontWeight: "600",
                animation: "fadeIn 0.2s ease",
              }}>
                {flash === "correct"
                  ? stmt.isScripture ? `✓ Correct! (${stmt.ref})` : "✓ Correct! Not from the Bible."
                  : stmt.isScripture ? `✗ That was Scripture — ${stmt.ref}` : "✗ That's not actually in the Bible."}
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: "16px", marginTop: "28px", width: "100%", maxWidth: "560px" }}>
            {[
              { label: "📖 Scripture", value: true, color: "#4a7c59", bg: "#f0f7f2", border: "#b8d9c4" },
              { label: "✗ Not Scripture", value: false, color: "#7c4a4a", bg: "#f7f0f0", border: "#d9b8b8" },
            ].map(({ label, value, color, bg, border }) => (
              <button
                key={label}
                onClick={() => handleAnswer(value)}
                disabled={!!flash}
                style={{
                  flex: 1, padding: "18px 12px",
                  background: bg, color: color,
                  border: `2px solid ${border}`,
                  borderRadius: "14px",
                  fontSize: "clamp(15px, 2vw, 18px)",
                  fontFamily: "Georgia, serif",
                  fontWeight: "bold",
                  cursor: flash ? "not-allowed" : "pointer",
                  opacity: flash ? 0.6 : 1,
                  transition: "transform 0.15s, box-shadow 0.15s, opacity 0.2s",
                  boxShadow: "0 3px 12px rgba(80,50,20,0.08)",
                }}
                onMouseEnter={e => { if (!flash) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(80,50,20,0.15)"; } }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 3px 12px rgba(80,50,20,0.08)"; }}
              >
                {label}
              </button>
            ))}
          </div>
        </>
      )}

      {/* RESULT */}
      {phase === "result" && (
        <div style={{
          width: "100%", maxWidth: "480px", textAlign: "center",
          background: "#fffdf9", border: "2px solid #e0d0be",
          borderRadius: "24px", padding: "48px 36px",
          boxShadow: "0 12px 48px rgba(80,50,20,0.14)",
          animation: "slideUp 0.4s ease",
        }}>
          <div style={{ fontSize: "64px", marginBottom: "8px" }}>
            {finalScore >= 8 ? "🏆" : finalScore >= 5 ? "📖" : "🙏"}
          </div>
          <div style={{ fontSize: "13px", letterSpacing: "3px", color: "#9c7c5c", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>
            Final Score
          </div>
          <div style={{ fontSize: "72px", fontWeight: "bold", color: "#2c1a0e", lineHeight: 1, marginBottom: "8px" }}>
            {finalScore}<span style={{ fontSize: "36px", color: "#9c7c5c" }}>/10</span>
          </div>
          <p style={{ fontSize: "18px", color: "#4a3020", margin: "20px 0 32px", lineHeight: 1.5, fontStyle: "italic" }}>
            {resultMsg}
          </p>
          <button
            onClick={startGame}
            style={{
              padding: "16px 40px",
              background: "linear-gradient(135deg, #b07d50, #d4a574)",
              color: "#fff", border: "none", borderRadius: "14px",
              fontSize: "18px", fontFamily: "Georgia, serif",
              fontWeight: "bold", cursor: "pointer",
              boxShadow: "0 4px 16px rgba(176,125,80,0.35)",
              transition: "transform 0.15s, box-shadow 0.15s",
              letterSpacing: "0.3px",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(176,125,80,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(176,125,80,0.35)"; }}
          >
            Play Again ↩
          </button>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
