import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Section } from "@/components/landing/redesign/shared";
import { Reveal } from "@/components/landing/fx/reveal";
import { ThesisDiagram } from "./thesis-diagram";
import { Toc } from "./toc";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://telegraphprotocol.com";

const TITLE = "When Intelligence Becomes Abundant, Quality Becomes Scarce";
const AUTHOR = "Ahmed Ali";
const AUTHOR_ROLE = "CTO & Co-Founder, Telegraph";
const PUBLISHED = "2026-10-07";
const PUBLISHED_LABEL = "October 7, 2026";
const AUTHOR_URL = "https://x.com/1xahmedali";
const URL = `${baseUrl}/why`;

const description =
  "There will soon be billions of AI models, tools and services. The hard part will not be accessing them. It will be knowing which one is actually best for what you need.";

export const metadata: Metadata = {
  title: TITLE,
  description,
  authors: [{ name: AUTHOR, url: AUTHOR_URL }],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description,
    url: URL,
    siteName: "Telegraph Protocol",
    type: "article",
    publishedTime: PUBLISHED,
    authors: [AUTHOR],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description,
  },
};

// h2/h3 = headings, p = paragraph, q = emphasised line, flow = chain of ideas, diagram = the visual.
type Block =
  | { t: "h2" | "h3" | "p" | "q" | "flow"; text: string }
  | { t: "diagram" };

const BODY: Block[] = [
  { t: "p", text: "I believe one of the most important things is to have an answer to why. Why does something need to exist? Why does the architecture have to work this way? Why can't we solve the same problem with something simpler?" },
  { t: "p", text: "That question is what led me to Telegraph." },
  { t: "p", text: "The problem looks simple on the surface. We are moving toward a world with more and more AI models, software services, datasets, search systems, agents and tools. In this essay, I use the word \"intelligence\" as shorthand for all of them: anything an app or agent can call to get useful information, reasoning or work done." },
  { t: "p", text: "At first, this looks like an access problem. How do we connect all of it? How do we give an app or agent one place to use it?" },
  { t: "p", text: "But access is only the beginning. Once there are millions, then billions, of possible sources of intelligence, the harder question becomes:" },
  { t: "q", text: "How do you know which one is actually best for the job?" },
  { t: "p", text: "When intelligence is scarce, getting access to it is the bottleneck. When intelligence becomes abundant, finding the right intelligence becomes the bottleneck. \"Quality becomes scarce\" does not mean good intelligence disappears. It means reliably finding the best available option becomes harder as the number of choices explodes." },
  { t: "p", text: "Now imagine billions of apps and AI agents making huge numbers of these choices every day. No person can manually compare every model, API, dataset or tool before every request. At that scale, the choice has to become automatic." },
  { t: "diagram" },
  { t: "p", text: "And \"best\" is not universal. It depends on the task. A model that is best for code review may be poor at weather forecasting. What is best today may not be best tomorrow. A model improves. An API slows down. A dataset becomes stale. A price changes. A completely new Provider appears." },
  { t: "p", text: "So ranking intelligence once does not solve the problem. If the intelligence keeps changing, the ranking has to keep changing too." },
  { t: "p", text: "That is where the real problem begins." },

  { t: "h2", text: "You cannot scale if you have to integrate the whole world yourself" },
  { t: "p", text: "One way to build this market is for a single company to do everything itself: find the Providers, integrate them, understand what each one does, test them, compare them, keep retesting them and decide where requests should go." },
  { t: "p", text: "That can work while the market is small. It becomes much harder when there are thousands of models and tens of thousands of APIs, tools, datasets and specialized services across thousands of different jobs." },
  { t: "p", text: "Someone still has to understand every category. Someone has to build the tests. Someone has to rerun them when a Provider changes. Someone has to notice when yesterday's best option gets worse or a better one appears." },
  { t: "p", text: "The more intelligence the system supports, the more manual work the central company has to do. Eventually the company itself becomes the limit." },
  { t: "p", text: "So if the goal is truly massive scale, the supply side has to become open: anyone with a useful model, API, dataset or tool should be able to connect it and compete." },
  { t: "p", text: "That solves one problem. It immediately creates another." },

  { t: "h2", text: "If anyone can join, you cannot simply trust everyone" },
  { t: "p", text: "Assume there is real demand and real money. Anyone can connect a service and compete for that demand." },
  { t: "p", text: "What happens next is predictable. Some people will build genuinely better intelligence. Some will make it cheaper or faster. Some will optimize specifically for whatever test decides the ranking. And some will eventually try to game the system." },
  { t: "p", text: "That is what economic incentives do: once winning has value, people work very hard to win." },
  { t: "p", text: "So an open market cannot simply accept every Provider and hope for the best. It needs a way to identify stronger services before a real request gets sent to them." },
  { t: "p", text: "That means the Providers have to be ranked. And the ranking has to happen automatically; otherwise we remove the manual integration bottleneck only to replace it with a manual ranking bottleneck." },

  { t: "h2", text: "Ratings only tell you after you have already taken the risk" },
  { t: "p", text: "The obvious answer is reputation. Build something like Upwork: let people use a Provider, then rate it." },
  { t: "p", text: "But there is a structural problem. The rating arrives after the work. Someone has to hire the Provider, pay for the result, inspect it and only then tell the rest of the market whether it was good." },
  { t: "p", text: "For a human marketplace, that may be acceptable. For software making large numbers of automatic intelligence requests, it does not scale well. The information about quality arrives after the risk has already been taken." },
  { t: "p", text: "Another obvious answer is to make the user verify every result. But think about what that means. The user asked for intelligence because they wanted to offload some work. They paid for an answer. Then we tell them they must deeply verify the answer themselves." },
  { t: "p", text: "We have recreated the bottleneck at the end." },
  { t: "p", text: "If automatic systems are going to use open intelligence at scale, the market has to do as much of the quality work as possible before the request is routed." },

  { t: "h2", text: "Fine. Rank the Providers. Now define \"best.\"" },
  { t: "p", text: "This is where the problem gets deeper." },
  { t: "p", text: "What should the ranking measure? Accuracy? Speed? Price? Freshness? Reliability? Some combination of them?" },
  { t: "p", text: "The answer depends on the job. Weather forecasting needs one kind of test. Code review needs another. Fraud detection needs another. Scientific reasoning needs another. Robotics needs another." },
  { t: "p", text: "There is no Provider that is simply \"the best.\" There is only the best available intelligence for a particular task, judged in a particular way, at a particular point in time." },
  { t: "p", text: "And even if you design a very good test today, why should that same test remain the best forever?" },
  { t: "p", text: "This was one of the biggest realizations for me. The problem is not only:" },
  { t: "q", text: "Which Provider is best?" },
  { t: "p", text: "There is another question underneath it:" },
  { t: "q", text: "What is the best way to decide which Provider is best?" },
  { t: "p", text: "A benchmark is just a test or yardstick. If anyone can compete as a Provider, but one company permanently controls the yardstick, the market is still centralized at the point that matters most. We moved the bottleneck. We did not remove it." },
  { t: "q", text: "So the intelligence has to compete. But the way intelligence is measured has to compete too." },
  { t: "p", text: "That loop is at the heart of Telegraph. If the intelligence can keep improving but the test that judges it cannot, eventually the test becomes the bottleneck. The Providers must be able to improve, and the way we judge them must be able to improve as well." },
  { t: "p", text: "That became one of the core ideas behind Telegraph." },

  { t: "h2", text: "Separate the jobs" },
  { t: "p", text: "Once you reach that point, the architecture becomes easier to understand. Different participants should do different jobs." },
  { t: "h3", text: "Providers" },
  { t: "p", text: "Providers supply the intelligence. A Provider might be an AI model, an API (a service other software can call), a dataset, a search system, an algorithm or another useful tool. Telegraph does not need to decide what form the intelligence must take." },
  { t: "p", text: "Providers compete inside a market for one specific job. Telegraph calls that job an Intent. Think of an Intent simply as a task: weather forecasting, fraud detection, code review, search, image verification and so on." },
  { t: "h3", text: "Evaluators" },
  { t: "p", text: "Evaluators decide how performance should be measured for that Intent. In plain English, they build the test. But an Evaluator does not own that position forever. If someone creates a better way to judge the same task, that better evaluation should be able to replace the weaker one." },
  { t: "h3", text: "Validators" },
  { t: "p", text: "Validators check that the required evaluation and ranking work was performed correctly and finalize the resulting ranking. They do not need to become experts in weather, medicine, coding, finance and every other category. Their job is to verify the process that produced the ranking." },
  { t: "h3", text: "Consumers" },
  { t: "p", text: "Consumers are the apps, agents, machines or people using the intelligence. They should not have to understand everything happening underneath. They ask for a job to be done; the market has already done the work of comparing the available supply." },
  { t: "p", text: "That separation is important. Telegraph does not have to become the world expert in every possible category. Providers specialize in supplying intelligence. Evaluators specialize in measuring it. Validators verify the process. Consumers create the demand. Telegraph coordinates the market between them." },
  { t: "p", text: "The important thing is not any single Provider or any single test. It is the mechanism that keeps adapting when either of them changes. Better intelligence can replace weaker intelligence. Better ways of measuring it can replace weaker ways. Demand then follows the latest ranking." },

  { t: "h2", text: "Every Intent becomes its own market" },
  { t: "p", text: "This is the bigger picture. Each task can become its own continuously changing intelligence market." },
  { t: "p", text: "A weather Provider competes with other intelligence that can perform the weather task. Code-review intelligence competes inside code review. Fraud-detection intelligence competes inside fraud detection. The same Provider might be excellent in one market and weak in another." },
  { t: "p", text: "Providers enter and compete. Evaluators compete over how those Providers should be measured. Validators verify and finalize the result. Consumers create demand. Nothing is permanently number one just because it won yesterday." },
  { t: "p", text: "Performance changes. Rankings change. A stronger Provider can rise. A weaker one can fall. A better evaluation method can replace a weaker one. The market keeps moving." },
  { t: "p", text: "This is where the idea of intelligence as a graded commodity came from." },
  { t: "p", text: "The phrase sounds more complicated than the idea. Telegraph does not need every model, API, dataset and tool to work the same way. It only needs a common way to compare different options that are competing to do the same job." },
  { t: "p", text: "Think about diamonds. Different stones are not identical, but a grading system makes them easier to compare and value. Intelligence is more difficult because its performance keeps changing, so the grading cannot happen once and stop. It has to keep running." },
  { t: "p", text: "In that sense, Telegraph turns different forms of intelligence into something a market can continuously compare. The intelligence stays different underneath; what becomes common is the process around it: measurement, ranking and demand." },

  { t: "h2", text: "A ranking only matters if demand follows it" },
  { t: "p", text: "A ranking by itself is just a leaderboard. It becomes economically meaningful when real paid requests follow it." },
  { t: "p", text: "If better-performing Providers receive more opportunity to serve real demand, being better has a consequence. Stronger Providers have a reason to join. Existing Providers have a reason to improve. And because the ranking controls economic opportunity, people also have a reason to build better ways of evaluating the market." },
  { t: "p", text: "Better evaluation improves the ranking. A better ranking sends requests toward better intelligence. Better intelligence makes the network more useful. More usefulness can create more demand. Then the cycle begins again from a stronger position." },
  { t: "p", text: "That is the intelligence flywheel:" },
  { t: "flow", text: "Demand → stronger supply → competition → better evaluation → better rankings → better intelligence → more demand." },
  { t: "p", text: "The goal is not for Telegraph to manually recruit and manage every useful Provider forever. Real demand should create an opportunity worth competing for. That opportunity attracts better supply. Better supply improves the market. Better results attract more usage. Over time, the market can begin pulling stronger participants in by itself." },

  { t: "h2", text: "The hackathon was designed to test the market, not the transaction counter" },
  { t: "p", text: "I did not want us to run a test network, create a huge number of meaningless transactions and point at the number as proof that Telegraph worked. I wanted to see whether the roles in the market could actually interact the way the architecture expected." },
  { t: "p", text: "So we structured the hackathon around the same basic loop: Providers supplied intelligence, Evaluators measured it, and applications and agents consumed it. More than 120,000 intelligence requests flowed through that experiment." },
  { t: "p", text: "The hackathon used temporary prize incentives, so I do not treat that number as proof of organic demand. The point was to test whether the roles and the feedback loop could actually work together." },
  { t: "p", text: "The number itself was not the important part. The important part was seeing the loop operate:" },
  { t: "flow", text: "demand → Provider competition → evaluation → ranking → more demand" },
  { t: "p", text: "That did not prove every long-term economic assumption. It did show that the different participants could interact through the market structure we had designed." },

  { t: "h2", text: "Demand has to come first" },
  { t: "p", text: "There is another trap I wanted Telegraph to avoid." },
  { t: "p", text: "A network can issue tokens, reward people for doing activity inside the network and then point to that activity as evidence of an economy. But that can become circular: the network creates the reward, the reward creates the activity, and the activity is then used to justify the reward." },
  { t: "p", text: "That does not necessarily mean anyone outside the incentive loop actually wants what is being produced." },
  { t: "p", text: "I wanted the signal to come from somewhere much simpler: someone wants the intelligence enough to pay for it." },
  { t: "p", text: "Real demand should create the reason for the economic system to exist. Consumers pay because they want useful intelligence. Providers earn because they serve that paid demand. Validators and qualifying Evaluators can earn MACHINA rewards from the network because they operate the ranking and verification infrastructure. Those are different jobs and therefore different economic flows." },
  { t: "p", text: "Providers should not need artificial token rewards simply for existing." },
  { t: "p", text: "If nobody wants the intelligence, why should the protocol pretend that someone does?" },

  { t: "h2", text: "Why MACHINA exists" },
  { t: "p", text: "This is the easiest way to understand MACHINA: it connects real intelligence usage to the economic system underneath Telegraph." },
  { t: "p", text: "Consumers continue paying for intelligence in USDC, a digital currency designed to stay worth one U.S. dollar. When a paid request is fulfilled, the share of the payment owed to the Provider is used to buy MACHINA on the open market. The Provider is entitled to the MACHINA that was actually bought for the value it earned." },
  { t: "p", text: "So real usage creates a simple economic chain:" },
  { t: "flow", text: "intelligence is used → USDC is paid → the Provider's share buys MACHINA → the Provider receives the acquired MACHINA" },
  { t: "p", text: "That distinction matters. Telegraph is not asking Consumers to buy a token before they can use intelligence. They can keep paying in a familiar unit. The token sits underneath the experience and connects fulfilled intelligence to the network economy." },
  { t: "q", text: "MACHINA is the economic unit of intelligence." },
  { t: "p", text: "That does not mean one MACHINA equals one request, one model call or one fixed amount of computation. It does not. The intelligence itself is what the market is buying and comparing. MACHINA gives that market a common economic layer." },
  { t: "p", text: "The first flywheel improves the intelligence market: better demand can attract better supply and better evaluation. The second connects that activity to the network economy: more real intelligence usage means more Provider payments are used to buy MACHINA on the open market." },
  { t: "p", text: "The intelligence flywheel improves what the market can provide. The economic flywheel gives participants a reason to keep improving it. MACHINA connects the two." },

  { t: "h2", text: "The ranking is the market" },
  { t: "p", text: "It is easy to look at Telegraph and describe it as another router - a system that sends a request from one place to another. I think that misses the important part. Routing is only what happens after the market has decided where the request should go." },
  { t: "p", text: "The deeper logic is a chain of problems and consequences:" },
  { t: "flow", text: "More intelligence → too many choices → open supply → a trust problem → ranking → different tasks need different ways to measure \"best\" → those measurements can be gamed → the measurement itself must compete → the result must be verified → real demand gives the ranking economic meaning → better supply and better evaluation are attracted → better intelligence → more demand." },
  { t: "p", text: "Each solution exposes the next problem. That is how the architecture emerged." },
  { t: "p", text: "I did not start with \"let's build a blockchain.\" I did not start with \"let's launch a token.\" I did not even start with \"let's build an AI marketplace.\"" },
  { t: "p", text: "The question I was trying to answer was:" },
  { t: "q", text: "If the amount of available intelligence becomes enormous, how can an app or AI agent continuously find the best available intelligence without requiring one central company - or the user - to understand and verify every Provider in existence?" },
  { t: "p", text: "Telegraph is my answer." },
  { t: "p", text: "If this works at very large scale, an app or agent does not need to know every model, API, dataset or tool in the world. It asks for a job to be done, and an open market continuously works out which available intelligence is best suited to serve it. That is the scale of the idea: not simply a directory of AI services, but a live market that keeps deciding where demand should go as the supply changes." },
  { t: "p", text: "That is also why ranking cannot be a side feature. If the market is open, dynamic and enormous, the ranking is what turns a pile of disconnected intelligence into something machines can actually use at scale." },
  { t: "q", text: "The ranking is the market." },
  { t: "p", text: "That market makes otherwise different intelligence continuously measurable and comparable for the task where it competes. Real demand gives the comparison economic meaning. And if the market itself is supposed to keep improving, the way intelligence is measured has to keep improving too." },
  { t: "p", text: "MACHINA provides the common economic unit underneath that market, linking the value of fulfilled intelligence back into the system." },
  { t: "p", text: "That is the thesis behind Telegraph." },
];

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const HEADINGS = BODY.flatMap((b) =>
  b.t === "h2" ? [{ id: slug(b.text), label: b.text }] : [],
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description,
  datePublished: PUBLISHED,
  mainEntityOfPage: URL,
  author: { "@type": "Person", name: AUTHOR, jobTitle: AUTHOR_ROLE, url: AUTHOR_URL },
  publisher: { "@type": "Organization", name: "Telegraph Protocol", url: baseUrl },
};

function Byline() {
  return (
    <div className="text-[14px] leading-[1.6] text-[var(--tg-fg-dim)]">
      <span className="font-medium text-[var(--tg-fg)]">{AUTHOR}</span>
      <span className="mx-2 text-[var(--tg-fg-faint)]">·</span>
      {AUTHOR_ROLE}
      <span className="mx-2 text-[var(--tg-fg-faint)]">·</span>
      <time dateTime={PUBLISHED}>{PUBLISHED_LABEL}</time>
    </div>
  );
}

export default function WhyPage() {
  return (
    <Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_260px]">
      <article>
        <header>
          <Reveal className="mb-4">
            <Eyebrow>Why</Eyebrow>
          </Reveal>
          <Reveal>
            <h1 className="m-0 text-balance text-[clamp(30px,4.6vw,52px)] font-normal leading-[1.1] tracking-[0.005em] text-[var(--tg-fg)]">
              {TITLE}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="m-0 mt-6 text-pretty text-[18px] leading-[1.6] text-[var(--tg-fg-dim)]">
              {description}
            </p>
            <div className="mt-6 border-y border-[var(--tg-line)] py-4">
              <Byline />
            </div>
          </Reveal>
        </header>

        <div className="mt-10 flex flex-col gap-5">
          {BODY.map((b, i) => {
            switch (b.t) {
              case "h2":
                return (
                  <h2
                    key={i}
                    id={slug(b.text)}
                    className="m-0 mt-10 scroll-mt-24 text-balance text-[clamp(22px,2.6vw,30px)] font-normal leading-[1.2] text-[var(--tg-fg)]"
                  >
                    {b.text}
                  </h2>
                );
              case "h3":
                return (
                  <h3
                    key={i}
                    className="m-0 mt-2 text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--tg-fg)]"
                  >
                    {b.text}
                  </h3>
                );
              case "q":
                return (
                  <p
                    key={i}
                    className="m-0 border-l-2 border-[var(--tg-line-strong)] pl-5 text-[19px] font-medium leading-[1.5] text-[var(--tg-fg)]"
                  >
                    {b.text}
                  </p>
                );
              case "flow":
                return (
                  <p
                    key={i}
                    className="m-0 rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] p-5 font-mono text-[13px] leading-[1.8] text-[var(--tg-fg)]"
                  >
                    {b.text}
                  </p>
                );
              case "diagram":
                return <ThesisDiagram key={i} />;
              default:
                return (
                  <p
                    key={i}
                    className="m-0 text-pretty text-[17px] leading-[1.85] text-[var(--tg-fg-dim)]"
                  >
                    {b.text}
                  </p>
                );
            }
          })}
        </div>

        <aside className="mt-14 border-t border-[var(--tg-line)] pt-8">
          <h2 className="m-0 text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--tg-fg)]">
            Author&apos;s note
          </h2>
          <p className="m-0 mt-4 text-pretty text-[15px] leading-[1.8] text-[var(--tg-fg-dim)]">
            This essay captures the line of reasoning from which I designed
            Telegraph and later formalized it in the Telegraph Protocol
            Whitepaper &amp; Specification. The same reasoning also shaped the
            hackathon we used to test the market behavior described above.
          </p>
          <div className="mt-5 text-[14px] leading-[1.7] text-[var(--tg-fg-dim)]">
            <div className="font-medium text-[var(--tg-fg)]">{AUTHOR}</div>
            <div>{AUTHOR_ROLE}</div>
            <div>
              Author,{" "}
              <Link
                href="/whitepaper"
                className="text-[var(--tg-fg)] underline underline-offset-4"
              >
                Telegraph Protocol Whitepaper &amp; Specification
              </Link>
            </div>
          </div>
        </aside>
      </article>

      <Toc items={HEADINGS} />
      </div>
    </Section>
  );
}
