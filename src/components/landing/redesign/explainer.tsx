import { Tweet, TweetSkeleton } from "react-tweet";
import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";
import { TweetFrame } from "./tweet-frame";

const POST_ID = "2120073144904081553";
const POST_URL = `https://x.com/Telegraphprotoc/status/${POST_ID}`;
const PROFILE_URL = "https://x.com/Telegraphprotoc";

const linkClass =
  "text-[14px] text-[var(--tg-fg-dim)] underline underline-offset-4 hover:text-[var(--tg-fg)]";

export function Explainer() {
  return (
    <Section>
      <div className="grid items-center gap-12 md:grid-cols-[1fr_minmax(0,550px)] md:gap-16">
        <div>
          <SectionHeading
            eyebrow="Watch"
            lede="A short walkthrough of how Telegraph routes demand, grades competing intelligence and prices it."
          >
            How Telegraph works in 3 minutes
          </SectionHeading>
          <Reveal delay={250} className="mt-8">
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Follow @Telegraphprotoc on X
            </a>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <TweetFrame>
            <Tweet
              id={POST_ID}
              fallback={<TweetSkeleton />}
              components={{
                TweetNotFound: () => (
                  <a
                    href={POST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Watch on X
                  </a>
                ),
              }}
            />
          </TweetFrame>
        </Reveal>
      </div>
    </Section>
  );
}
