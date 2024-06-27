import { A } from "../A";

function AddAHackPage() {
  return (
    <div className="mt-8 mb-16">
      <h1 className="font-bold text-2xl mb-4 text-center">Add a hack</h1>
      <div className="flex flex-col gap-y-2 px-0 sm:px-16">
        <p>
          You want to add a hack? Awesome! Make sure you meet these requirements
          first:
        </p>
        <ul className="list-disc ml-4 my-4">
          <li>It is a hack for a Neo Geo game.</li>
          <li>The hack is stable and has none or few bugs.</li>
          <li>The hack is an interesting hack the community would enjoy.</li>
          <li>
            You are the creator of the hack, or can show you have permission to
            add it, or you can show the creator is long gone and the hack is
            abandoned.
          </li>
          <li>You have at least the hacked rom in MAME zip format.</li>
        </ul>
        <p>
          If that all sounds good, reach out to me on{" "}
          <A href="https://discord.gg/tvm4fpkUNq">Discord</A> (my handle is
          city41) or start a discussion on{" "}
          <A href="https://github.com/city41/neorh/discussions">GitHub</A>.
        </p>
      </div>
    </div>
  );
}

export { AddAHackPage };
