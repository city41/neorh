import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import charSelectPng from "./charSelect.png";
import orderSelectPng from "./orderSelect.png";
import gameplayPng from "./gameplay.png";
import fightAgainstRugalPng from "./fightAgainstRugal.png";
import winScreenPng from "./winScreen.png";
import continueScreenPng from "./continueScreen.png";
import cutscene2Png from "./cutscene2.png";
import usaEndingPng from "./usaEnding.png";

import rugalTurnongOnDebugDipPng from "./rugalTurningOnDebugDip.png";
import rugalFocusedPng from "./rugalFocused.png";
import rugalPickFullFormPng from "./rugalPickFullForm.png";

import altColorsInChosenAvatarsPng from "./altColorsInChosenAvatars.png";

import styles from "./IndexPage.module.css";
import { PatchApplier } from "./PatchApplier";

function Hr() {
  return <div className="border-b-2 border-gray-600 my-8 -mx-8"></div>;
}

function IndexPage() {
  const [showAlphaReleaseNotes, setShowAlphaReleaseNotes] = useState(false);

  return (
    <div className={clsx(styles.root, "w-full sm:py-16")}>
      <div
        className={clsx(
          styles.pageContainer,
          "mx-auto w-full lg:max-w-4xl bg-white px-8 pb-4 lg:shadow-2xl lg:rounded-2xl"
        )}
      >
        <ul
          className={clsx(
            styles.topMenu,
            "-mx-4 sm:pb-2 h-28 sm:h-auto pt-4 flex flex-col flex-wrap sm:flex-row items-start sm:items-center justify-start space-y-2 sm:space-y-0 sm:space-x-5 sm:place-content-between sm:px-16 border-b sticky top-0"
          )}
        >
          <li>
            <a className="menu-item" href="#using-rugal">
              Using Rugal
            </a>
          </li>
          <li>
            <a className="menu-item" href="#japanese">
              Japanese
            </a>
          </li>
          <li>
            <a className="menu-item" href="#release-notes">
              Release Notes
            </a>
          </li>
          <li>
            <a className="menu-item" href="#build-the-rom">
              Build the ROM
            </a>
          </li>
          <li>
            <a className="menu-item" href="https://github.com/city41/kof94te">
              GitHub
            </a>
          </li>
          <li>
            <a className="menu-item" href="https://discord.gg/Uuaka5mq">
              Discord
            </a>
          </li>
        </ul>
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
          <div className="col-start-1 col-end-9 sm:h-auto sm:col-start-5 sm:col-end-9 self-stretch flex flex-col gap-y-4 py-4 items-center">
            <Image
              className="shadow-xl"
              src={charSelectPng.src}
              width={charSelectPng.width}
              height={charSelectPng.height}
              alt="Character select screen"
              priority
            />
            <p>
              A full on character select screen modeled after KOF95, and with
              two types of random select.
            </p>
            <Image
              className="shadow-xl"
              src={orderSelectPng.src}
              width={orderSelectPng.width}
              height={orderSelectPng.height}
              alt="Member order select screen"
            />
            <p>Order select screen same as before</p>
            <Image
              className="shadow-xl"
              src={gameplayPng.src}
              width={gameplayPng.width}
              height={gameplayPng.height}
              alt="Game play"
            />
            <p>Custom teams in gameplay</p>
            <Image
              className="shadow-xl"
              src={cutscene2Png.src}
              width={cutscene2Png.width}
              height={cutscene2Png.height}
              alt="Cutscene"
            />
            <p>Custom teams in cutscenes</p>
            <Image
              className="shadow-xl"
              src={fightAgainstRugalPng.src}
              width={fightAgainstRugalPng.width}
              height={fightAgainstRugalPng.height}
              alt="Fight against Rugal"
            />
            <p>Custom teams fighting Rugal</p>
            <Image
              className="shadow-xl"
              src={winScreenPng.src}
              width={winScreenPng.width}
              height={winScreenPng.height}
              alt="Win screen"
            />
            <p>Win screens show the custom team that won</p>
            <Image
              className="shadow-xl"
              src={continueScreenPng.src}
              width={continueScreenPng.width}
              height={continueScreenPng.height}
              alt="Continue screen"
            />
            <p>Continue screens show the custom team that lost</p>
            <Image
              className="shadow-xl"
              src={usaEndingPng.src}
              width={usaEndingPng.width}
              height={usaEndingPng.height}
              alt="Ending"
            />
            <p>Surprising new endings</p>
          </div>
        </div>
        <div className="heading-container" id="japanese">
          <h2 className={styles.pageHeader}>Japanese</h2>
          <p className="my-4">
            The hack fully works in English, Spanish and Japanese. The hack
            contains new endings, and they are not translated into Japanese. For
            Japanese they will play in English. Can you help translate them?{" "}
            <a href="mailto:matt.e.greer@gmail.com">Let me know</a>.
          </p>
        </div>
        <div className="heading-container" id="using-rugal">
          <h2 className={styles.pageHeader}>Using Rugal</h2>
          <p className="my-4">
            Rugal is accessible via debug dip 1-4. This is almost identical to
            how the original game works.
          </p>
          <Image
            className="shadow-xl"
            src={rugalTurnongOnDebugDipPng.src}
            width={rugalTurnongOnDebugDipPng.width}
            height={rugalTurnongOnDebugDipPng.height}
            alt="Turning on debug dip 1-4"
          />
          <p className="my-4">First, turn on debug dip 1-4.</p>
          <Image
            className="shadow-xl"
            src={rugalFocusedPng.src}
            width={rugalFocusedPng.width}
            height={rugalFocusedPng.height}
            alt="Rugal focused in the character select screen"
          />
          <p className="my-4">
            Then choose him as your character. You can get his alternate palette
            by choosing him with C or D.
          </p>
          <Image
            className="shadow-xl"
            src={rugalPickFullFormPng.src}
            width={rugalPickFullFormPng.width}
            height={rugalPickFullFormPng.height}
            alt="Picking full form Rugal in the order select screen"
          />
          <p className="my-4">
            To get regular Rugal, choose him with A in the order select screen.
            To get second form Rugal, move the arrow so it is above slot 2 or 3
            then press A. They will stay empty, that is expected.
          </p>
          <p className="my-4">
            Once he is chosen, turn off debug dip 1-4, otherwise both characters
            will be invincible in the fight.
          </p>
          <p>
            In a single player game, using Rugal will crash the game if you make
            it to the Rugal fight. This is true in the original game too.
          </p>
          <h3 className="font-bold text-xl my-4">
            Why isn&apos;t Rugal a normal character?
          </h3>
          <p>
            In the original game, Rugal is only accessible via the same debug
            dip. I decided to take that route with the hack as well. It boils
            down to he&apos;s just the boss and missing things needed to be a
            full fledged character:
          </p>
          <ul className="list-disc ml-4 mt-4">
            <li>His normal form has no specials, DMs, or even a throw.</li>
            <li>
              He has no charging animation in his normal form. Pressing ABC just
              makes him disappear.
            </li>
            <li>He can&apos;t be setup on the continue screen.</li>
            <li>He corrupts palettes in his full form.</li>
            <li>
              His transformation cutscene runs after defeating his first form.
            </li>
            <li>
              He does a ton of damage and takes little damage. Using him in
              versus mode matches is pretty lame.
            </li>
          </ul>
        </div>
        <div className="mt-16" id="release-notes">
          <h2 className={styles.pageHeader}>Release Notes</h2>
        </div>
        <Hr />
        <div className="heading-container" id="build-the-rom">
          <h2 className={styles.pageHeader}>Build the ROM</h2>
        </div>
        <p className="text-sm mb-8">
          Prefer to do it yourself? Get the files from{" "}
          <a href="https://github.com/city41/kof94te/releases">
            the GitHub releases page
          </a>
        </p>
        <PatchApplier />
        <Hr />
        <div className="heading-container">
          <h2 className={styles.pageHeader}>Thanks</h2>
        </div>
        <p>
          These people helped make the hack possible: SieKensou, PsychoRFG, Ge
          Os, Jay Bee, leonardofmatheus, Alice
        </p>
        <div className="mt-16 mb-4 flex flex-col items-center text-xs">
          <div>
            Hack created by <a href="https://mattgreer.dev">Matt Greer</a>
          </div>
          <div>Original game by SNK</div>
          <a href="https://github.com/city41/kof94te">GitHub repo</a>
          <a href="https://discord.gg/Uuaka5mq">Discord</a>
        </div>
      </div>
    </div>
  );
}

export { IndexPage };
