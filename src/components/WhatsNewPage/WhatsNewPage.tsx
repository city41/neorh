import clsx from "clsx";
import { ReactNode } from "react";

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
