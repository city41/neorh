import { A } from "../A";

function AddAHackPage() {
  return (
    <div className="mt-8 mb-16">
      <h1 className="font-bold text-2xl">Add a hack</h1>
      <div className="flex flex-col gap-y-2">
        <p>You want to add a hack? Awesome!</p>
        <p>It has to be for the original Neo Geo, any game is welcome.</p>
        <p>
          Reach out to me on <A href="https://discord.gg/tvm4fpkUNq">Discord</A>{" "}
          (my handle is city41) or start a discussion on{" "}
          <A href="https://github.com/city41/neorh/discussions">GitHub</A>.
        </p>
      </div>
    </div>
  );
}

export { AddAHackPage };
