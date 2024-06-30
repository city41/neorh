import clsx from "clsx";
import { ReactNode } from "react";
import { A } from "../A";

function dateToHumanString(input: string): string {
  const date = new Date(input);

  const month = date.toLocaleDateString("en-us", {
    month: "short",
  });

  const day = date.toLocaleDateString("en-us", {
    day: "numeric",
  });

  const year = date.toLocaleDateString("en-us", {
    year: "numeric",
  });

  return `${day} ${month} ${year}`;
}

function toId(s: string): string {
  return s
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "");
}

function NewEntry({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: ReactNode;
}) {
  const id = toId(`${title} ${date}`);

  return (
    <div className="mt-16 pb-16 px-4 sm:px-16 border-b border-dotted border-gray-500 last:border-0">
      <a href={`#${id}`}>
        <h3
          id={id}
          className="group relative font-bold mb-4 text-xl flex flex-row justify-between items-baseline"
        >
          <div className="flex-1">
            <div className="text-black flex flex-row gap-x-2 items-center">
              {title}
            </div>
          </div>
          <time className="text-sm text-gray-500" dateTime={date}>
            {dateToHumanString(date)}
          </time>
        </h3>
      </a>
      <div className={clsx("space-y-4 text-black")}>{children}</div>
    </div>
  );
}

function WhatsNewPage() {
  return (
    <div className="mt-8 mb-16 flex flex-col gap-y-2">
      <h1 className="font-bold text-2xl mb-4 text-center">What&apos;s New</h1>
      <NewEntry
        title="KOF94 slowdown and NeoSD/Darksoft patch released"
        date="2024-06-29"
      >
        <p>
          paulb-nl of the MiSTer team has contributed a great patch for KOF94.
          With it, most slowdown in the game is gone when playing on a MiSTer or
          truly real hardware*.
        </p>
        <p>
          This patch also fixes the graphical glitches that could occur on the
          NeoSD or the Darksoft Multi.
        </p>
        <p>
          If you play on any of these platforms, the patch is highly
          recommended. It improves the game nicely. If you play on an emulator,
          you will see no difference. The patch is on the{" "}
          <A href="/kof94">King of Fighters 94</A> page.
        </p>
        <p className="text-gray-600 text-xs">
          * "truly real hardware" means playing on a Neo Geo with the hack
          burned onto eproms on a real Neo Geo cart, not a multi cart like the
          NeoSD/Darksoft. They are similar, but don&apos;t quite simulate what
          an actual cart does.
        </p>
      </NewEntry>
      <NewEntry title="Samurai Shodown 4 Cheat Sheet fix" date="2024-06-28">
        <p>
          One of the combos listed on the common page was bogus. So it was
          removed.
        </p>
      </NewEntry>
      <NewEntry
        title="New hack: Samurai Shodown 4 cheat sheet"
        date="2024-06-27"
      >
        <p>Pause the game to see your character&apos;s moves.</p>
      </NewEntry>
      <NewEntry
        title="KOF94 Cheat Sheet: now works in versus mode"
        date="2024-06-27"
      >
        <p>
          Now when playing in versus mode, whoever paused the game will see
          their movelist.
        </p>
        <p>The hack still only works in AES/home mode.</p>
      </NewEntry>
    </div>
  );
}

export { WhatsNewPage };
