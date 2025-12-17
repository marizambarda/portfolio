import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/codeExemple/img1.png";
import img2 from "../../images/codeExemple/img2.png";

import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const ARTICLE = "flex flex-col gap-4 text-[#e9d5ff] leading-7";
const TITLE = "!text-2xl font-semibold text-[#f5edff]";
const LIST = "space-y-2 pl-5 marker:text-[#c4b5fd]";

export default function BlogPostsPage() {
  return (
    <Container className="mb-40">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Accordion
            defaultActiveKey="0"
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Card
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "none",
              }}
            >
              <Card.Header
                style={{
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <CustomToggle eventKey="0">
                  <h2 className={TITLE}>
                    Why you should never use setTimeout directly inside a React
                    component
                  </h2>
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Post />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-sm">
      {children}
    </code>
  );
}

function CodeImage({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure className="flex justify-center">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img src={src} alt={caption ?? "code example"} className="w-full" />
        {caption ? (
          <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-white/70">
            {caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}

function CustomToggle({
  children,
  eventKey,
}: {
  children: React.ReactNode;
  eventKey: string;
}) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "transparent" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Post() {
  return (
    <article className={ARTICLE}>
      <header className="space-y-3">
        <p className="text-white/80">
          React re-renders often. If you create timers in the component body,
          they’ll be recreated on every render — which can cause overlapping
          timers and weird behavior.
        </p>
      </header>
      <section>
        <p>Consider this example:</p>

        <div className="flex gap-3">
          <CodeImage
            src={img1}
            caption="❌ Timer created in the component body (runs again on re-render)"
          />
          <div>
            <p className="text-lg font-semibold">
              Every time you click “Increment”
            </p>
            <ul className={LIST}>
              <li>
                <strong>setCount</strong> updates state in{" "}
                <InlineCode>Parent</InlineCode>
              </li>
              <li>
                <InlineCode>Parent</InlineCode> re-renders
              </li>
              <li>
                <InlineCode>Child</InlineCode> re-renders
              </li>
              <li>
                A new <InlineCode>setTimeout</InlineCode> is created
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2 className={TITLE}>The correct approach</h2>
          <p className="text-white/80">
            Timers are side effects — tie them to the component lifecycle using{" "}
            <InlineCode>useEffect</InlineCode>, and always clean them up.
          </p>{" "}
        </div>
        <p>Consider this example:</p>
        <div className="flex gap-4">
          <CodeImage
            src={img2}
            caption="✅ Timer runs once on mount and is cleaned up on unmount"
          />

          <div>
            <ul className={LIST}>
              <li>Timeout runs once on mount</li>
              <li>It doesn’t re-run on re-renders</li>
              <li>It’s cleaned up on unmount</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-[#f5edff] pt-8">TL;DR</h3>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/85">
          If it causes a side effect, it doesn’t belong in the component body.
          Use <InlineCode>useEffect</InlineCode> to keep timers predictable and
          safe.
        </div>
      </section>
    </article>
  );
}
