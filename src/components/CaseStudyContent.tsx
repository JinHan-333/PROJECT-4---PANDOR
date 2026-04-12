"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScanLineText from "./ScanLineText";
import MediaPlaceholder from "./MediaPlaceholder";
import TeamPlaceholder from "./TeamPlaceholder";

interface Props {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

/* ─── scroll-linked fade-up ─── */
function Reveal({
  children,
  container,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  container: React.RefObject<HTMLDivElement | null>;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container,
    offset: ["start 0.95", "start 0.65"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, transitionDelay: `${delay}s` }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Consistent section wrapper ─── */
function Section({
  children,
  dark = false,
  id,
}: {
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="px-[5%] sm:px-[8%] py-16 sm:py-28"
      style={dark ? { background: "#111111" } : undefined}
    >
      <div className="max-w-[920px] mx-auto">{children}</div>
    </section>
  );
}

/* ─── Section label ─── */
function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[10px] font-mono tracking-[0.3em] uppercase mb-6 ${dark ? "text-white/30" : "text-foreground/30"}`}>
      {children}
    </p>
  );
}

/* ─── Section heading ─── */
function Heading({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2 className={`text-[clamp(22px,3vw,36px)] font-semibold tracking-tight leading-tight mb-4 ${dark ? "text-white/90" : "text-foreground/90"}`}>
      {children}
    </h2>
  );
}

/* ─── Lead paragraph ─── */
function Lead({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[clamp(15px,1.5vw,18px)] leading-[1.7] mb-10 ${dark ? "text-white/60" : "text-foreground/60"}`}>
      {children}
    </p>
  );
}

/* ─── Body paragraph ─── */
function Body({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[clamp(14px,1.2vw,15.5px)] leading-[1.85] mb-5 ${dark ? "text-white/55" : "text-foreground/60"}`}>
      {children}
    </p>
  );
}

/* ─── Subsection label ─── */
function Sub({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h3 className={`text-[11px] font-mono tracking-[0.2em] uppercase mt-12 mb-5 ${dark ? "text-white/35" : "text-foreground/35"}`}>
      {children}
    </h3>
  );
}

/* ─── Divider ─── */
function Divider() {
  return <div className="h-px bg-foreground/6 my-0" />;
}

/* ─── Bullet item ─── */
function Bullet({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-3 mb-2.5">
      <span className={`w-[5px] h-[5px] rounded-full mt-[7px] flex-shrink-0 ${dark ? "bg-white/20" : "bg-foreground/20"}`} />
      <span className={`text-[clamp(13px,1.15vw,15px)] leading-[1.7] ${dark ? "text-white/55" : "text-foreground/60"}`}>
        {children}
      </span>
    </li>
  );
}

/* ─── Pullquote ─── */
function Quote({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <blockquote className={`border-l-[2px] pl-6 sm:pl-8 my-10 ${dark ? "border-white/15" : "border-foreground/12"}`}>
      <p className={`text-[clamp(15px,1.6vw,19px)] leading-[1.6] font-light italic ${dark ? "text-white/70" : "text-foreground/70"}`}>
        {children}
      </p>
    </blockquote>
  );
}

/* ─── Info card (sidebar-style) ─── */
function InfoCard({
  title,
  children,
  dark = false,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`border rounded-md p-5 sm:p-6 ${dark ? "border-white/8 bg-white/[0.03]" : "border-foreground/6 bg-foreground/[0.02]"}`}
    >
      <p className={`text-[10px] font-mono tracking-[0.25em] uppercase mb-4 ${dark ? "text-white/25" : "text-foreground/25"}`}>
        {title}
      </p>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════ */

export default function CaseStudyContent({ scrollContainerRef }: Props) {
  return (
    <div>
      {/* ──────────────────────────────────────
          HERO
      ────────────────────────────────────── */}
      <section className="min-h-[85vh] sm:min-h-screen flex flex-col justify-end px-[5%] sm:px-[8%] pb-12 sm:pb-20 pt-16">
        <Reveal container={scrollContainerRef}>
          <p className="text-[10px] font-mono tracking-[0.3em] text-foreground/30 uppercase mb-6">
            Case Study — Helix Storyworks — 2025
          </p>
        </Reveal>

        <Reveal container={scrollContainerRef} delay={0.05}>
          <div
            className="relative mb-6"
            style={{
              marginLeft: "-5%",
              marginRight: "-5%",
              width: "calc(100% + 10%)",
            }}
          >
            <div
              className="scan-lines-bg"
              style={{ top: "8%", bottom: "8%", opacity: 0.4 }}
            />
            <div className="relative px-[5%]">
              <ScanLineText
                text="PANDORA"
                className="text-[clamp(52px,15vw,220px)] block tracking-[-0.04em]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal container={scrollContainerRef} delay={0.1} className="max-w-[540px]">
          <p className="text-[clamp(14px,1.4vw,17px)] leading-[1.7] text-foreground/55 mb-10">
            A transmedia case study documenting the development of
            Pandora.Protocol across Projects 1–4 — exploring narrative systems,
            interaction design, and collaborative process.
          </p>
        </Reveal>

        <Reveal container={scrollContainerRef} delay={0.15}>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              ["Studio", "Helix Storyworks"],
              ["Course", "Interactive Narrative"],
              ["Scope", "Projects 1–4"],
              ["Institution", "Sheridan College"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5">
                <span className="text-[9px] font-mono tracking-[0.25em] text-foreground/25 uppercase">
                  {k}
                </span>
                <span className="text-[12px] font-mono text-foreground/55">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Divider />

      {/* ──────────────────────────────────────
          01 — PROJECT OVERVIEW
      ────────────────────────────────────── */}
      <Section>
        <Reveal container={scrollContainerRef}>
          <Label>01 — Project Overview</Label>
          <Heading>Building a Transmedia Narrative System</Heading>
          <Lead>
            Pandora.Protocol was developed as part of Sheridan College&apos;s{" "}
            <strong className="text-foreground/85">Interactive Narrative</strong>{" "}
            course, where students were tasked with creating a transmedia
            narrative experience that unfolds across multiple platforms and modes
            of interaction.
          </Lead>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-10 md:gap-14">
            <div>
              <Body>
                As part of the assignment framework, the team formed a pseudo
                production company,{" "}
                <strong className="text-foreground/85">Helix Storyworks</strong>,
                to structure the project as a collaborative studio practice and
                simulate a professional creative workflow.
              </Body>
              <Body>
                The project challenged the team to move beyond a single medium
                and instead design an interconnected system that could operate
                across physical, digital, augmented, and virtual touchpoints.
                Over the course of Projects 1, 2, and 3, the team developed the
                concept, narrative logic, visual language, audience entry points,
                immersive interactions, and presentation strategy for a
                non-linear transmedia experience. This included work across
                poster, sticker, social media, website and chatbot design, AR/VR
                prototyping, user testing, and project management.
              </Body>
              <Body>
                Rather than focusing only on storytelling, the broader goal of
                the project was to explore how narrative, interaction design,
                visual systems, and user experience can work together as a
                cohesive design methodology. The final case study reflects not
                only the outcome of the concept itself, but also the
                collaborative process, design decisions, role distribution,
                testing insights, and evolving use of AI as both a support tool
                and reflective component of the workflow.
              </Body>
              <Body>
                Through this project, Helix Storyworks functioned as a framework
                for experimentation, production, and systems thinking, allowing
                the team to approach the assignment as both a creative narrative
                exercise and a structured design process.
              </Body>
            </div>

            <InfoCard title="Project Scope">
              <div className="flex flex-col gap-2">
                {[
                  "Poster & Sticker",
                  "Social Media",
                  "Website & Chatbot",
                  "AR/VR Prototyping",
                  "User Testing",
                  "Project Management",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-[12px] font-mono text-foreground/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </InfoCard>
          </div>
        </Reveal>
      </Section>

      <Divider />

      {/* ──────────────────────────────────────
          02 — ROLE & CONTRIBUTIONS
      ────────────────────────────────────── */}
      <Section>
        <Reveal container={scrollContainerRef}>
          <Label>02 — Role &amp; Contributions</Label>
          <Heading>Creative Leadership &amp; Project Direction</Heading>
          <Lead>
            Within the course project, Sandra took on the role of{" "}
            <strong className="text-foreground/85">
              team lead and project manager
            </strong>
            , helping shape both the direction of the concept and the structure
            needed to move it forward. Her contribution sat at the intersection
            of{" "}
            <strong className="text-foreground/85">
              creative leadership, narrative development, and systems thinking
            </strong>
            .
          </Lead>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Sub>Course Project Role</Sub>
          <Body>
            As a student on the project, Sandra&apos;s responsibilities
            included:
          </Body>
          <ul className="mb-6 list-none p-0">
            <Bullet>Leading the overall project direction</Bullet>
            <Bullet>Organizing the <strong className="text-foreground/85">Gantt chart</strong> and <strong className="text-foreground/85">RACI framework</strong></Bullet>
            <Bullet>Managing timelines, deliverables, and team coordination</Bullet>
            <Bullet>Developing the core <strong className="text-foreground/85">concept</strong> that the team ultimately selected</Bullet>
            <Bullet>Shaping the <strong className="text-foreground/85">experience design</strong> and <strong className="text-foreground/85">narrative structure</strong></Bullet>
            <Bullet>Ensuring <strong className="text-foreground/85">system integration</strong> across all platforms</Bullet>
            <Bullet>Leading the <strong className="text-foreground/85">Instagram narrative layer</strong> as part of the transmedia experience</Bullet>
          </ul>
          <Body>
            A major part of this role was making sure the project felt cohesive
            across poster, social, website, chatbot, AR, and VR, rather than as
            separate outputs.
          </Body>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Sub>Helix Storyworks Role</Sub>
          <Body>
            Within the pseudo production company, Helix Storyworks, Sandra&apos;s
            role was framed as{" "}
            <strong className="text-foreground/85">
              Creative Director and Executive Producer
            </strong>
            . In that context, she was responsible for:
          </Body>
          <ul className="mb-6 list-none p-0">
            <Bullet>Overseeing the overall <strong className="text-foreground/85">creative vision</strong></Bullet>
            <Bullet>Guiding the <strong className="text-foreground/85">narrative direction</strong> of the project</Bullet>
            <Bullet>Coordinating and following up on team progress</Bullet>
            <Bullet>Managing <strong className="text-foreground/85">scope, production flow, and timelines</strong></Bullet>
            <Bullet>Supporting decision-making across major deliverables</Bullet>
            <Bullet>Ensuring alignment and consistency across the final experience</Bullet>
          </ul>
          <Body>
            This dual role allowed her to contribute both as a student designer
            within the academic project and as the central creative and
            organizational lead within the studio framework built around it.
          </Body>
        </Reveal>

        <Reveal container={scrollContainerRef} className="mt-12">
          <Label>Team Contributions</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <TeamPlaceholder name="Zora" context="Role & Contributions" />
            <TeamPlaceholder name="Jingwen" context="Role & Contributions" />
            <TeamPlaceholder name="Yamin" context="Role & Contributions" />
          </div>
        </Reveal>
      </Section>

      <Divider />

      {/* ──────────────────────────────────────
          03 — CONCEPT DEVELOPMENT
      ────────────────────────────────────── */}
      <Section>
        <Reveal container={scrollContainerRef}>
          <Label>03 — Concept Development</Label>
          <Heading>From Myth to Distributed System</Heading>
          <Lead>
            The concept for Pandora.Protocol emerged through a process of
            research, interpretation, and iterative refinement across Projects 1,
            2, and 3.
          </Lead>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Sub>Project 1 — Research &amp; Foundation</Sub>
          <Body>
            The team began by reviewing and assessing a range of{" "}
            <strong className="text-foreground/85">Ancient Greek myths</strong>{" "}
            as possible narrative foundations for the assignment. This phase
            involved comparing themes, symbolism, and contemporary relevance,
            while also considering what each story could become when translated
            into an interactive, transmedia format.
          </Body>
          <Body>
            From that exploration, they generated several initial directions
            before ultimately selecting{" "}
            <strong className="text-foreground/85">Pandora</strong> as the
            strongest conceptual anchor. What made this myth compelling was its
            relationship to{" "}
            <strong className="text-foreground/85">
              forbidden knowledge, control, curiosity, and consequence
            </strong>{" "}
            — themes that felt highly transferable to contemporary questions
            around intelligent systems and digital environments.
          </Body>
          <Body>
            From there, the team began shaping Pandora.Protocol as a modern
            reinterpretation of the myth, positioning Pandora not as a literal
            character, but as a distributed system experienced across platforms.
          </Body>

          <div className="flex flex-wrap gap-2 mt-6 mb-8">
            {[
              "Concept Overview",
              "Narrative Arc",
              "Character Framework",
              "Core Themes",
              "Audience Entry Points",
              "Platform Roles",
            ].map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-3 py-1.5 border border-foreground/10 text-foreground/45"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Sub>Project 2 — Definition into Application</Sub>
          <Body>
            As the project moved into Project 2, concept development shifted
            from definition into application. The focus became translating the
            original idea into a functioning multi-platform system, ensuring that
            each touchpoint not only carried the project&apos;s themes forward,
            but also contributed to a cohesive audience experience. This meant
            refining how the concept worked not only as a story, but as an
            interconnected design system across multiple forms of interaction.
          </Body>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Sub>Project 3 — Integration &amp; Validation</Sub>
          <Body>
            By Project 3, the concept had evolved into a more complete
            non-linear transmedia structure. At this stage, development centered
            on integration, testing, and validating how users could enter from
            different points while still constructing a coherent understanding
            of the experience. What began as a myth-based idea became a broader
            exploration of how narrative, space, interface, and participation
            can work together as a unified design methodology.
          </Body>
        </Reveal>
      </Section>

      <Divider />

      {/* ──────────────────────────────────────
          04 — DESIGN APPROACH (dark section)
      ────────────────────────────────────── */}
      <Section dark>
        <Reveal container={scrollContainerRef}>
          <Label dark>04 — Design Approach</Label>
          <h2 className="text-[clamp(22px,3vw,36px)] font-semibold tracking-tight leading-tight mb-4 text-white/90">
            Restraint, Ambiguity &amp; Coherence
          </h2>
          <p className="text-[clamp(15px,1.5vw,18px)] leading-[1.7] mb-10 text-white/55">
            The design approach for this project focused on building a{" "}
            <strong className="text-white/85">cohesive transmedia system</strong>{" "}
            where each platform could function independently while still
            reinforcing a larger conceptual and aesthetic framework.
          </p>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Body dark>
            Rather than approaching the work as a set of separate deliverables,
            the team treated the project as an interconnected design process —
            one that required consistency in tone, symbolism, pacing, and user
            perception across physical, digital, and immersive touchpoints.
          </Body>

          <Sub dark>Visual Direction</Sub>
          <Body dark>
            A key part of this direction was shaped through Sandra&apos;s role in
            defining the project&apos;s{" "}
            <strong className="text-white/85">
              experience logic, narrative cohesion, and visual language
            </strong>
            . In the early stages, more literal visual directions were
            considered, including a direct &ldquo;Greek meets cyberpunk&rdquo;
            interpretation. However, that approach was ultimately set aside in
            favor of something more restrained, atmospheric, and
            psychologically charged.
          </Body>
          <Body dark>
            The project moved toward a cinematic visual tone influenced by
            controlled tension, ambiguity, and subtle unease — less about
            obvious world-building and more about how unfamiliar systems feel
            when they are first encountered.
          </Body>

          {/* Instagram Layer — text + placeholder integrated as one block */}
          <Sub dark>The Instagram Layer</Sub>
          <div className="border border-white/8 rounded-md p-6 sm:p-8 mb-6 bg-white/[0.02]">
            <Body dark>
              This approach became especially clear in the development of the
              Instagram{" "}
              <span className="inline-flex items-center gap-1.5 border-b border-dashed border-white/25 pb-0.5 text-white/50 font-mono text-[12px]">[insert link]</span>
              {" "}layer. The feed was not treated as promotional content, but
              as a{" "}
              <strong className="text-white/85">designed narrative surface</strong>
              . Images were selected and sequenced to build metaphorical tension
              around surveillance, identity, control, and instability, using motifs
              such as fingerprint portraits, network diagrams, ocean and ship
              imagery, lightning, and system-related symbols like the escape key.
            </Body>
            <Body dark>
              Captions were intentionally cryptic and philosophical rather than
              descriptive, allowing meaning to emerge through interpretation. In
              some cases, even the first letters of captions were used to form
              coded patterns, including references to Pandora, reinforcing the
              sense that the system was structured and observant beneath the
              surface.
            </Body>
            <div className="mt-4">
              <MediaPlaceholder label="Instagram Video" sublabel="insert Instagram video" dark />
            </div>
          </div>

          <Sub dark>Sonic &amp; Tonal Direction</Sub>
          <Body dark>
            Music also played an important role in shaping the project&apos;s
            overall mood and direction. The tonal references guiding the digital
            layer drew from cinematic and ambient sound worlds associated with
            artists such as Trent Reznor and Atticus Ross, Sigur R&oacute;s, and
            other emotionally textured composers. These references informed the
            pace and emotional quality of the visual work, helping the team frame
            the project less as a straightforward story and more as a carefully
            tuned condition of perception.
          </Body>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Quote dark>
            Across the project, the design approach remained centered on{" "}
            <strong className="text-white/90 not-italic">restraint, ambiguity, and coherence</strong>.
            Every decision — from captions, imagery, and sequencing to
            interaction pacing and platform tone — was made to support the
            project as a unified system, not simply a narrative artifact.
          </Quote>
        </Reveal>

        <Reveal container={scrollContainerRef} className="mt-6">
          <MediaPlaceholder label="Pinterest Video" sublabel="Pandora.Protocol Moodboard" dark />
        </Reveal>

        <Reveal container={scrollContainerRef} className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <TeamPlaceholder name="Zora" context="insert Zora" dark />
            <TeamPlaceholder name="Jingwen" context="insert Jingwen" dark />
            <TeamPlaceholder name="Yamin" context="insert Yamin" dark />
          </div>
        </Reveal>
      </Section>

      <Divider />

      {/* ──────────────────────────────────────
          05 — AUDIENCE & INTEGRATION
      ────────────────────────────────────── */}
      <Section>
        <Reveal container={scrollContainerRef}>
          <Label>05 — Audience &amp; Integration</Label>
          <Heading>Designing for Non-Linear Entry</Heading>
          <Lead>
            A central consideration in this project was designing for an audience
            that is comfortable moving across platforms, interpreting fragmented
            information, and engaging with content in a non-linear way.
          </Lead>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Body>
            Rather than assuming a single entry point or fixed sequence, the team
            approached audience integration as a{" "}
            <strong className="text-foreground/85">systems design problem</strong>
            : how to create multiple touchpoints that could each function
            meaningfully on their own while still contributing to a larger,
            coherent experience.
          </Body>
          <Body>
            This shaped both the structure of the project and the way its
            platforms were developed. The poster, sticker, Instagram, website,
            chatbot, AR, and VR were not treated as separate outputs, but as
            interdependent components within a broader design ecosystem. Each
            platform was designed to support a different mode of engagement —
            visual intrigue, interpretive reading, digital investigation, spatial
            discovery, or immersive reflection — while maintaining consistency in
            tone, symbolism, and thematic direction.
          </Body>
          <Body>
            The team needed to frame how users might encounter and move through
            the system from different starting points. This meant thinking beyond
            traditional linear user journeys and instead considering how a
            participant might enter through one platform, make meaning from
            partial information, and continue deeper into the experience through
            curiosity rather than instruction.
          </Body>
          <Body>
            In this sense, audience integration was not only built into the final
            work itself, but into the team&apos;s design process, testing
            approach, and iterative refinements.
          </Body>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Quote>
            The result was a project that treats the audience not as passive
            recipients of a story, but as active interpreters within a
            distributed system. By rethinking audience entry, progression, and
            participation across multiple formats, the team was able to develop
            a project framework that was both narratively cohesive and
            methodologically strong.
          </Quote>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <InfoCard title="Engagement Modes">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                ["Poster / Sticker", "Visual Intrigue"],
                ["Instagram", "Interpretive Reading"],
                ["Website", "Digital Investigation"],
                ["AR", "Spatial Discovery"],
                ["VR", "Immersive Reflection"],
                ["Chatbot", "Direct Interaction"],
              ].map(([platform, mode]) => (
                <div key={platform} className="flex justify-between gap-3">
                  <span className="text-[11px] font-mono text-foreground/35">
                    {platform}
                  </span>
                  <span className="text-[11px] text-foreground/55">
                    {mode}
                  </span>
                </div>
              ))}
            </div>
          </InfoCard>
        </Reveal>
      </Section>

      <Divider />

      {/* ──────────────────────────────────────
          06 — USABILITY TESTING
      ────────────────────────────────────── */}
      <Section>
        <Reveal container={scrollContainerRef}>
          <Label>06 — Usability Testing &amp; Insights</Label>
          <Heading>Validating a Non-Linear System</Heading>
          <Lead>
            Usability testing for this project was approached as a way to
            validate not just individual components, but the effectiveness of the{" "}
            <strong className="text-foreground/85">
              overall transmedia system
            </strong>
            .
          </Lead>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Body>
            Because the experience was intentionally non-linear, testing could
            not rely on a single prescribed user journey. Instead, the team
            designed a series of{" "}
            <strong className="text-foreground/85">
              scenario-based entry points
            </strong>
            , allowing participants to encounter the project through different
            platforms such as poster, Instagram, website, AR, and VR.
          </Body>
          <Body>
            This approach enabled the team to observe how users naturally orient
            themselves, interpret fragmented information, and make connections
            across touchpoints. Rather than focusing solely on task completion,
            testing explored how users understood the system as a whole, how
            engagement was sustained, and how effectively themes were
            communicated without direct instruction.
          </Body>
          <Body>
            Sandra played a key role in shaping this testing approach by helping
            define the types of questions and observations needed to evaluate a
            non-linear experience. This included assessing narrative
            comprehension, emotional response, perceived connection between
            platforms, and the balance between clarity and ambiguity. The goal
            was to understand not only whether users could navigate the system,
            but whether they felt compelled to continue engaging with it.
          </Body>
        </Reveal>

        <Reveal container={scrollContainerRef} className="mt-10">
          <Label>Key Insights</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {[
              {
                n: "01",
                t: "System Recognition",
                d: "Users consistently recognized that they were interacting with a larger, connected system, even when entering from different starting points.",
              },
              {
                n: "02",
                t: "Curiosity-Driven Engagement",
                d: "Engagement was primarily driven by curiosity and the desire to uncover patterns, while ambiguity was generally perceived as intentional rather than confusing.",
              },
              {
                n: "03",
                t: "Emotional Progression",
                d: "Emotional responses progressed in a way that aligned with the intended experience, moving from initial curiosity into deeper investigation and reflection.",
              },
              {
                n: "04",
                t: "Transition Refinement",
                d: "Testing highlighted opportunities for refinement, particularly around transitions between platforms and interaction cues. While individual touchpoints were effective, moments of movement from one layer to another occasionally introduced friction.",
              },
            ].map((ins) => (
              <div
                key={ins.n}
                className="border border-foreground/6 p-5 rounded-md"
              >
                <p className="text-[10px] font-mono text-foreground/25 mb-2">
                  {ins.n}
                </p>
                <p className="text-[13px] font-medium text-foreground/80 mb-2">
                  {ins.t}
                </p>
                <p className="text-[12px] leading-[1.7] text-foreground/50">
                  {ins.d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Body>
            These insights informed adjustments to improve clarity without
            compromising the project&apos;s core design principle of discovery
            through ambiguity.
          </Body>
          <Body>
            Overall, the testing process confirmed that the project functions as
            a{" "}
            <strong className="text-foreground/85">
              cohesive, non-linear system
            </strong>
            , where users are able to construct meaning through exploration. It
            also reinforced the importance of designing for perception, emotion,
            and interpretation alongside usability, particularly in projects that
            move beyond traditional linear interaction models.
          </Body>
        </Reveal>

      </Section>

      <Divider />

      {/* ──────────────────────────────────────
          07 — AI AS A DESIGN TOOL
      ────────────────────────────────────── */}
      <Section>
        <Reveal container={scrollContainerRef}>
          <Label>07 — AI as a Design Tool</Label>
          <Heading>Augmentation, Not Authorship</Heading>
          <Lead>
            AI was integrated into the project as a{" "}
            <strong className="text-foreground/85">
              supportive design tool within the production process
            </strong>
            , rather than as a primary authoring system. Its role was focused on
            enabling efficiency, exploration, and iteration across different
            stages of development, while maintaining full human control over
            creative direction and decision-making.
          </Lead>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Sub>Workflow Applications</Sub>
          <Body>Within the workflow, AI was used to assist with:</Body>
          <ul className="mb-6 list-none p-0">
            <Bullet>Visual exploration and atmosphere development</Bullet>
            <Bullet>Code refinement, optimization, and debugging</Bullet>
            <Bullet>Rapid iteration of ideas and structural outputs</Bullet>
            <Bullet>Supporting prototyping across digital touchpoints</Bullet>
          </ul>
          <Body>
            All outputs generated through AI were{" "}
            <strong className="text-foreground/85">
              reviewed, curated, and implemented manually
            </strong>{" "}
            by the team. This ensured that the final work remained intentional,
            consistent, and aligned with the project&apos;s design goals.
          </Body>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Sub>Ethical Boundaries</Sub>
          <Body>
            Clear boundaries were established to define the role of AI within the
            project and to ensure that authorship and accountability remained
            human-led.
          </Body>
          <div className="mb-6 space-y-2">
            {[
              "No autonomous narrative generation",
              "No replacement of team decision-making",
              "No use of AI to simulate or replace audience input",
              "No collection or use of participant data through AI systems",
            ].map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span className="text-foreground/30 text-[11px]">&#10005;</span>
                <span className="text-[13px] text-foreground/55">{b}</span>
              </div>
            ))}
          </div>
          <Body>
            AI functioned strictly as a{" "}
            <strong className="text-foreground/85">
              tool for augmentation
            </strong>
            , not as a creative authority.
          </Body>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Sub>Conceptual Alignment</Sub>
          <Body>
            The way AI was used in the project also reflected the broader
            conceptual concerns explored throughout the work. Its controlled and
            intentional use mirrored themes of{" "}
            <strong className="text-foreground/85">
              containment, agency, and responsibility
            </strong>
            , reinforcing the importance of human oversight within systems that
            are capable of generating and influencing outcomes.
          </Body>
          <Body>
            In this way, the production process itself became aligned with the
            project&apos;s underlying inquiry, demonstrating how tools can be
            integrated into a system without relinquishing control or authorship.
          </Body>
        </Reveal>

      </Section>

      <Divider />

      {/* ──────────────────────────────────────
          08 — PROJECT MANAGEMENT
      ────────────────────────────────────── */}
      <Section>
        <Reveal container={scrollContainerRef}>
          <Label>08 — Project Management Process</Label>
          <Heading>Structure, Flexibility &amp; Coordination</Heading>
          <Lead>
            The project was managed as a{" "}
            <strong className="text-foreground/85">
              multi-phase, collaborative design process
            </strong>
            , requiring coordination across concept development, production,
            integration, testing, and final delivery.
          </Lead>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Body>
            Given the number of platforms and moving parts, a structured approach
            was necessary to ensure that individual components could be developed
            in parallel while remaining aligned as a cohesive system.
          </Body>
          <Body>
            Sandra took on the role of{" "}
            <strong className="text-foreground/85">
              project lead and manager
            </strong>
            , establishing the frameworks needed to guide both workflow and
            collaboration. She developed and maintained a{" "}
            <strong className="text-foreground/85">Gantt chart</strong> to map
            project phases, milestones, and dependencies across Projects 1, 2,
            3, and 4 — ensuring that the team had visibility into timelines and
            deliverables at each stage. In parallel, she created a{" "}
            <strong className="text-foreground/85">RACI model</strong> to
            clearly define roles and responsibilities, allowing each team member
            to take ownership of specific components while reducing overlap and
            ambiguity.
          </Body>
          <Body>
            Her approach to project management balanced{" "}
            <strong className="text-foreground/85">
              structure with flexibility
            </strong>
            . While timelines and deliverables were clearly defined, the process
            allowed for iteration and refinement as the concept evolved. This was
            particularly important given the non-linear nature of the project,
            where design decisions in one area often impacted others. Sandra
            regularly coordinated check-ins, followed up on progress, and
            ensured that all outputs aligned with the broader project direction.
          </Body>
          <Body>
            In addition to managing workflow, she also oversaw{" "}
            <strong className="text-foreground/85">
              production scope and decision-making
            </strong>
            , acting as a central point of alignment across the team. This
            included integrating feedback from usability testing, ensuring
            consistency across platforms, and guiding final refinements leading
            into presentation and submission.
          </Body>
          <Body>
            Overall, the project management process enabled the team to navigate
            a complex, multi-platform project with clarity and cohesion. By
            combining structured planning with ongoing coordination, Sandra
            ensured that the project progressed efficiently while maintaining
            alignment across all deliverables.
          </Body>
        </Reveal>

      </Section>

      <Divider />

      {/* ──────────────────────────────────────
          09 — FINAL OUTCOME
      ────────────────────────────────────── */}
      <Section>
        <Reveal container={scrollContainerRef}>
          <Label>09 — Final Outcome</Label>
          <Heading>A Complete Design Process</Heading>
          <Lead>
            The final outcome of this project reflects the successful
            development of a{" "}
            <strong className="text-foreground/85">
              multi-platform, transmedia system
            </strong>{" "}
            supported by a structured and iterative design process.
          </Lead>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Body>
            Across Projects 1, 2, and 3, the team moved from initial research
            and concept exploration into production, integration, testing, and
            refinement, demonstrating the ability to translate an abstract idea
            into a cohesive, fully realized experience.
          </Body>
          <Body>
            Beyond the final deliverables, the project highlights a strong
            application of{" "}
            <strong className="text-foreground/85">
              experience design, systems thinking, and collaborative workflow
            </strong>
            . The integration of multiple platforms required careful
            consideration of how design decisions carry across different media,
            while maintaining consistency in tone, visual language, and user
            engagement. The team&apos;s ability to develop, test, and refine
            these connections reflects a mature approach to designing beyond
            single interfaces.
          </Body>
          <Body>
            Sandra&apos;s leadership played a key role in ensuring that the
            project remained aligned both creatively and structurally. Through
            project management frameworks, narrative and experience design
            direction, and ongoing coordination, she helped guide the project
            from early ideation through to completion.
          </Body>
          <Body>
            The project also demonstrates the team&apos;s ability to
            thoughtfully integrate{" "}
            <strong className="text-foreground/85">
              AI as part of the design process
            </strong>
            , using it to support production and iteration while maintaining
            human authorship and accountability. This reflects an understanding
            of how emerging tools can be incorporated into design workflows
            without compromising creative intent.
          </Body>
        </Reveal>

        <Reveal container={scrollContainerRef}>
          <Quote>
            Ultimately, this case study represents more than a final artifact. It
            reflects a complete design process — one that brings together concept
            development, collaboration, testing, and refinement into a cohesive
            body of work. It also establishes a strong foundation for future
            projects, particularly in applying transmedia thinking, non-linear
            design, and systems-based approaches within both academic and
            professional contexts.
          </Quote>
        </Reveal>
      </Section>

      {/* ──────────────────────────────────────
          FOOTER
      ────────────────────────────────────── */}
      <footer className="px-[5%] sm:px-[8%] py-10 border-t border-foreground/5">
        <div className="max-w-[920px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[13px] font-medium text-foreground/65">
              Pandora.Protocol
            </span>
            <span className="text-[11px] text-foreground/25 ml-3 font-mono">
              Helix Storyworks
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-foreground/25">
            <span>Sheridan College</span>
            <span>&middot;</span>
            <span>Interactive Narrative</span>
            <span>&middot;</span>
            <span>2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
