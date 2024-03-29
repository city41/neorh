import charSelectPng from "./charSelect.png";
import orderSelectPng from "./orderSelect.png";

function IndexPage() {
  return (
    <div className="page-container mx-auto w-full lg:max-w-4xl bg-pbblue px-8 pb-4 sm:my-16 lg:shadow-2xl">
      <div className="grid grid-cols-8 gap-8 auto-rows-min px-8 sm:px-0 mb-8">
        <div className="col-start-1 col-end-9 sm:col-start-1 sm:col-end-5 grid place-items-center">
          <div className="flex flex-col h-full mt-16 gap-y-4">
            <h1 className="font-bold text-2xl text-center">
              King of Fighters 94: Team Edit Edition
            </h1>
            <div className="flex flex-col space-y-8 my-8 pt-8">
              <p>
                KOF94TE is a ROM hack for the Neo Geo game King of Fighters '94
              </p>
              <p>
                All King of Fighters games allow you to pick a custom team of
                three characters ... except King of Fighters 94. This hack adds
                in the team edit feature.
              </p>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <div className="col-start-1 col-end-9 sm:h-auto sm:col-start-5 sm:col-end-9 self-stretch flex flex-col gap-y-4 py-4">
          <img
            src={charSelectPng.src}
            width={charSelectPng.width}
            height={charSelectPng.height}
          />
          <img
            src={orderSelectPng.src}
            width={orderSelectPng.width}
            height={orderSelectPng.height}
          />
        </div>
      </div>
      <div className="heading-container sticky top-0" id="status">
        <h2 className="heading text-3xl font-bold py-4">Release Notes</h2>
      </div>
      <div className="mb-16">
        <h3 className="heading text-lg font-bold py-4">Version 0.0.1</h3>
        <p>
          The hack still has a very long way to go. But, in its current state
          you can use custom teams if you don't mind the (many) issues this
          version has.
        </p>
        <h4 className="heading font-bold py-4">Known Issues</h4>
        <ul className="list-disc ml-4">
          <li>
            In single player mode the game doesn't keep track of which teams you
            have beat. This means single player mode is endless.
          </li>
          <li>Win screens show one of the preformed teams</li>
          <li>The continue screen shows one of the preformed teams</li>
          <li>
            The CPU doesn't always pick alternate colors, so often in mirror
            matches both characters are the same color
          </li>
          <li>Versus mode often uses the same colors for mirror matches too</li>
          <li>
            You can not purposely choose the alternate color for characters
          </li>
        </ul>
      </div>
      <div className="heading-container sticky top-0" id="build-the-rom">
        <h2 className="heading text-3xl font-bold py-4">Build the ROM</h2>
      </div>
      <p>rom builder here</p>
      <div className="mt-16 mb-4 flex flex-col items-center text-xs">
        <div>
          Hack created by <a href="https://mattgreer.dev">Matt Greer</a>
        </div>
        <div>Original game by SNK</div>
        <a href="https://github.com/city41/kof94te">GitHub repo</a>
      </div>
    </div>
  );
}

export { IndexPage };
