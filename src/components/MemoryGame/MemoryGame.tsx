import { useEffect, useMemo, useState } from "react";
import "./MemoryGame.modules.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

type Card = {
  id: string;
  label: string;
  emoji: string;
  pairKey: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const PAIRS = [
  { label: "TypeScript", emoji: "🔷", pairKey: "ts" },
  { label: "React", emoji: "⚛️", pairKey: "react" },
  { label: "CSS", emoji: "🎨", pairKey: "css" },
  { label: "HTML", emoji: "🧱", pairKey: "html" },
  { label: "Next.js", emoji: "➡️", pairKey: "next" },
  { label: "JavaScript", emoji: "🟨", pairKey: "js" },
];

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(): Card[] {
  const doubled = PAIRS.flatMap((p) => [
    { ...p, id: `${p.pairKey}-a` },
    { ...p, id: `${p.pairKey}-b` },
  ]);

  return shuffle(doubled).map((c) => ({
    id: c.id,
    label: c.label,
    emoji: c.emoji,
    pairKey: c.pairKey,
    isFlipped: false,
    isMatched: false,
  }));
}

export default function MemoryGame() {
  const { t, i18n } = useTranslation("common");
  const [cards, setCards] = useState<Card[]>(() => buildDeck());
  const [firstId, setFirstId] = useState<string | null>(null);
  const [secondId, setSecondId] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [moves, setMoves] = useState(0);

  const matchedCount = useMemo(
    () => cards.filter((c) => c.isMatched).length,
    [cards]
  );
  const hasWon = matchedCount === cards.length;

  function resetGame() {
    setCards(buildDeck());
    setFirstId(null);
    setSecondId(null);
    setLocked(false);
    setMoves(0);
  }

  function flipCard(id: string) {
    if (locked) return;

    const clicked = cards.find((c) => c.id === id);
    if (!clicked || clicked.isMatched || clicked.isFlipped) return;

    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c))
    );

    if (!firstId) {
      setFirstId(id);
      return;
    }

    setSecondId(id);
    setMoves((m) => m + 1);
    setLocked(true);
  }

  useEffect(() => {
    if (!firstId || !secondId) return;

    const first = cards.find((c) => c.id === firstId);
    const second = cards.find((c) => c.id === secondId);
    if (!first || !second) return;

    const isMatch = first.pairKey === second.pairKey;

    const timer = window.setTimeout(
      () => {
        setCards((prev) =>
          prev.map((c) => {
            if (c.id === firstId || c.id === secondId) {
              return isMatch
                ? { ...c, isMatched: true, isFlipped: true }
                : { ...c, isFlipped: false };
            }
            return c;
          })
        );

        setFirstId(null);
        setSecondId(null);
        setLocked(false);
      },
      isMatch ? 350 : 900
    );

    return () => window.clearTimeout(timer);
  }, [firstId, secondId, cards]);

  return (
    <div className="memory">
      <header>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row>
                <Col>
                  <div>
                    <h2>{t("projects.memoryGame.title")}</h2>
                    <p>{t("projects.memoryGame.findAll")}</p>
                  </div>
                </Col>
                <Col>
                  <div>
                    <span>
                      {t("projects.memoryGame.moves")}: <strong>{moves}</strong>
                    </span>
                  </div>
                  <span>
                    {t("projects.memoryGame.matched")}:{" "}
                    <strong>{matchedCount}/12</strong>
                  </span>
                  <button className="btn" onClick={resetGame}>
                    {t("projects.memoryGame.restart")}
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="grid" role="grid" aria-label="Memory game grid">
              {cards.map((c) => (
                <button
                  key={c.id}
                  className={[
                    "card",
                    c.isFlipped ? "is-flipped" : "",
                    c.isMatched ? "is-matched" : "",
                  ].join(" ")}
                  onClick={() => flipCard(c.id)}
                  aria-label={c.isFlipped ? c.label : "Hidden card"}
                  disabled={locked || c.isMatched}
                >
                  <div className="card__inner">
                    <div className="card__face card__back">
                      <span className="q">?</span>
                    </div>
                    <div className="card__face card__front">
                      <span className="emoji">{c.emoji}</span>
                      <span className="label">{c.label}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {hasWon && (
        <div className="win">
          <div className="win__box">
            <h3>You won! 🎉</h3>
            <p>
              You finished in <strong>{moves}</strong> moves.
            </p>
            <button className="btn" onClick={resetGame}>
              Play again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
