import clsx from "clsx";
import Image from "next/image";
import charSelectPng from "./charSelect.png";
import orderSelectPng from "./orderSelect.png";
import changsPng from "./changs.png";

import styles from "./IndexPage.module.css";
import { PatchApplier } from "./PatchApplier";

function Hr() {
  return <div className="border-b-2 border-gray-600 my-8 -mx-8"></div>;
}

function IndexPage() {
  return (
    <div className={clsx(styles.root, "w-full sm:py-16")}>
      <div
        className={clsx(
          styles.pageContainer,
          "mx-auto w-full lg:max-w-4xl bg-white px-8 pb-4 pt-8 lg:shadow-2xl lg:rounded-2xl"
        )}
      >
        <div className="grid grid-cols-8 gap-8 auto-rows-min px-8 sm:px-0 mb-8">
          <div className="col-start-1 col-end-9 sm:col-start-1 sm:col-end-5 grid place-items-center">
            <div className="flex flex-col h-full mt-16 gap-y-4">
              <h1 className="font-bold text-3xl sm:text-4xl text-center">
                King of Fighters &apos;94: Team Edit Edition
              </h1>
              <div className="flex flex-col space-y-8 my-8 pt-8">
                <p>
                  KOF94TE is a ROM hack for the Neo Geo game King of Fighters
                  &apos;94
                </p>
                <p>
                  All King of Fighters games allow you to pick a custom team of
                  three characters ... except King of Fighters &apos;94. This
                  hack adds in the team edit feature. Finally Choi, Mai and
                  Heidern can fight together!
                </p>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
          <div className="col-start-1 col-end-9 sm:h-auto sm:col-start-5 sm:col-end-9 self-stretch flex flex-col gap-y-4 py-4">
            <Image
              className="shadow-xl"
              src={charSelectPng.src}
              width={charSelectPng.width}
              height={charSelectPng.height}
              alt="Character select screen"
            />
            <Image
              className="shadow-xl"
              src={orderSelectPng.src}
              width={orderSelectPng.width}
              height={orderSelectPng.height}
              alt="Member order select screen"
            />
          </div>
        </div>
        <div className="heading-container sticky top-0" id="status">
          <h2 className={styles.pageHeader}>Release Notes</h2>
        </div>
        <div className="mb-16">
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 0.2.1</h3>
          <p>
            Other than some minor polish and possibly some bugs I missed, versus
            mode is now fully functional. Single player mode still has several
            issues, see below.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              Alternate colors fully working. In mirror matches proper colors
              will be chosen in all cases. To purposely pick the alternate color
              for a character, press C or D when choosing them.
            </li>
            <li>Win screens fully working.</li>
            <li>Continue screens fully working.</li>
            <li>
              Clones (ie, more than one of the same character on a team) no
              longer allowed. I thought I was going to put this behind a code,
              but now I am pretty sure I won&apos;t. The game engine just
              wasn&apos;t designed to handle this and I think making it happen
              will be a lot of work.
            </li>
            <li>
              Random stages in versus mode, a small touch to make the game a bit
              more modern.
            </li>
            <li>
              Both players can always choose a new team in versus mode. This is
              different from real KOF94, but modern games tend to allow this so
              I added it.
            </li>
            <li>
              Fixed lots of little bugs and added lots of little polish here and
              there.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>Single player mode is still endless.</li>
            <li>In attract mode, the cpu randomization is not shown.</li>
            <li>
              In attract mode, the order select screen shows six Heiderns.
            </li>
            <li>
              When continuing, the character select screen does not show who the
              cpu team is.
            </li>
            <li>
              When continuing, sometimes the cpu team hangs for 5-10 seconds on
              the character select screen. If you wait, it should progress to
              order select.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 0.1.3</h3>
          <p>
            The hack still has a very long way to go. But, in its current state
            you can use custom teams if you don&apos;t mind the (many) issues
            this version has.
          </p>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              In single player mode the game doesn&apos;t keep track of which
              teams you have beat. This means single player mode is endless.
            </li>
            <li>
              Win screens show one of the preformed teams, not the team you
              chose.
            </li>
            <li>
              The continue screen shows one of the preformed teams, not the team
              you chose.
            </li>
            <li>
              The CPU doesn&apos;t always pick alternate colors, so often in
              mirror matches both characters are the same color.
            </li>
            <li>
              Versus mode often uses the same colors for mirror matches too.
            </li>
            <li>
              You can not purposely choose the alternate color for characters.
            </li>
            <li>
              In single player mode, the char select screen does not yet gray
              out teams you have defeated.
            </li>
            <li>
              During the demo, the two CPU players randomly pick a team in
              character select but their randomization is not shown.
            </li>
            <li>
              Minor sprite glitches during order select and gameplay. Very minor
              and often not there at all. Depends on what team you chose.
              Choosing Chang or multiple Changs makes this happen more often.
            </li>
            <li>
              You can choose clones without issue. Ultimately clones will be
              hidden behind a code.
            </li>
          </ul>
          <Hr />
          <p className="mt-8">
            More details at the{" "}
            <a href="https://github.com/city41/kof94te/milestones">
              milestones page
            </a>
            .
          </p>
        </div>
        <div className="heading-container sticky top-0" id="build-the-rom">
          <h2 className={styles.pageHeader}>Build the ROM</h2>
        </div>
        <p className="text-sm mb-8">
          prefer to do it yourself? Get the files from{" "}
          <a href="https://github.com/city41/kof94te/releases">
            the GitHub releases page
          </a>
        </p>
        <PatchApplier />
        <div className="mt-16 mb-4 flex flex-col items-center text-xs">
          <div>
            Hack created by <a href="https://mattgreer.dev">Matt Greer</a>
          </div>
          <div>Original game by SNK</div>
          <a href="https://github.com/city41/kof94te">GitHub repo</a>
        </div>
      </div>
    </div>
  );
}

export { IndexPage };
