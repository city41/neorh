import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import charSelectPng from "./charSelect.png";
import charSelectOldPng from "./charSelectOld.png";
import orderSelectPng from "./orderSelect.png";
import gameplayPng from "./gameplay.png";
import fightAgainstRugalPng from "./fightAgainstRugal.png";
import winScreenPng from "./winScreen.png";
import continueScreenPng from "./continueScreen.png";
import cutscene2Png from "./cutscene2.png";
import usaEndingPng from "./usaEnding.png";
import versionAndQrCodePng from "./versionAndQrCode.png";

import rugalTurnongOnDebugDipPng from "./rugalTurningOnDebugDip.png";
import rugalFocusedPng from "./rugalFocused.png";
import rugalPickFullFormPng from "./rugalPickFullForm.png";

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
            <a className="menu-item" href="#tips">
              Tips
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
        <div className={styles.headerWithPadding} id="japanese">
          <h2 className={styles.pageHeader}>Japanese</h2>
          <p className="my-4">
            The hack fully works in English, Spanish and Japanese. The hack
            contains new endings, and they are not translated into Japanese. For
            Japanese they will play in English. Can you help translate them?{" "}
            <a href="mailto:matt.e.greer@gmail.com">Let me know</a>.
          </p>
        </div>
        <div className={styles.headerWithPadding} id="release-notes">
          <h2 className={styles.pageHeader}>Release Notes</h2>
        </div>
        <div className="mb-16">
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.1.8</h3>
          <p>Three very minor bugs fixed.</p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              Bug fix: Character select screen: Takuma could get his alternate
              colors unexpectedly in certain situations in versus mode.
            </li>
            <li>
              Bug fix: Player cursors start in wrong spot and very quickly jump
            </li>
            <li>
              Bug fix: dont allow players to do anything in character select
              while HERE COMES CHALLENGER is on the screen.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese. Also any of these endings that have a period in them,
              the period shows up with an orange background. That is because the
              period is actually Chin&apos;s wine bottle :) Since periods are
              not used in Japanese, the game does not load the palette that is
              needed. I could fix this, but since the endings need to be
              translated anyway, I&apos;m not going to bother.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.1.5</h3>
          <p>
            A minor versus mode bug was fixed. Thanks to Psycho RFG for finding
            it.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              In versus mode, if one player chooses their whole team, they could
              still cause cursor movement sound effects to happen. That is now
              fixed.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese. Also any of these endings that have a period in them,
              the period shows up with an orange background. That is because the
              period is actually Chin&apos;s wine bottle :) Since periods are
              not used in Japanese, the game does not load the palette that is
              needed. I could fix this, but since the endings need to be
              translated anyway, I&apos;m not going to bother.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.1.4</h3>
          <p>
            A cleaner and better looking character select screen. The globe and
            logo were removed, it now looks more like KOF95.
          </p>
          <div>
            <div className="flex flex-row justify-around my-8">
              <Image
                className="shadow-xl"
                src={charSelectOldPng.src}
                width={charSelectOldPng.width}
                height={charSelectOldPng.height}
                alt="The old character select screen"
              />
              <Image
                className="shadow-xl"
                src={charSelectPng.src}
                width={charSelectPng.width}
                height={charSelectPng.height}
                alt="The new character select screen"
              />
            </div>
          </div>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>Cleaner character select screen.</li>
            <li>
              Bug fix: when continuing, show who the cpu team is in the
              character select screen.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese. Also any of these endings that have a period in them,
              the period shows up with an orange background. That is because the
              period is actually Chin&apos;s wine bottle :) Since periods are
              not used in Japanese, the game does not load the palette that is
              needed. I could fix this, but since the endings need to be
              translated anyway, I&apos;m not going to bother.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.0.0</h3>
          <p>
            The hack is complete. The only exception is the new endings play in
            English when the game is set to Japanese. If anyone can help
            translate them, please let me know.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>Fix issue where Kawaks would have sprite corruption.</li>
            <li>Added a missing period to the USA ending.</li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese. Also any of these endings that have a period in them,
              the period shows up with an orange background. That is because the
              period is actually Chin&apos;s wine bottle :) Since periods are
              not used in Japanese, the game does not load the palette that is
              needed. I could fix this, but since the endings need to be
              translated anyway, I&apos;m not going to bother.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.0.0rc0</h3>
          <p>
            The first <b>release candidate</b> release! The hack is now complete
            for Spanish and English, and all bugs should be fixed now.
            &quot;release candidate&quot; is just one last chance to look for
            bugs before going to the final 1.0 release.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>Spanish endings and text are now complete.</li>
            <li>
              Fixed a bug related to Rugal&apos;s transformation cutscene.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.0.0b5</h3>
          <p>
            Rugal and some other fixes. I think it is getting close to the final
            release. I will keep looking for bugs. But I have a feeling 1.0 is
            not too far off.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              Fixed the bug where using Rugal in single player mode would not
              let you progress.
            </li>
            <li>Fixed bugs related to Rugal&apos;s win screen.</li>
            <li>
              Fixed an issue where the England ending would not quite play
              correctly.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese.
            </li>
            <li>
              The Spanish new endings were created with Google Translate, so
              they likely have problems.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.0.0b4</h3>
          <p>Cutscene and Spanish improvements</p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              If you play through the game using one of the original 8 teams,
              you will get that team&apos;s cutscenes and ending.
            </li>
            <li>
              Spanish had a small improvement made for the cutscene before
              fighting Rugal. Rugal&apos;s line is now grammatically correct
              when he speaks to a female or male character.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              Endings are in English when playing with language set to Japanese.
            </li>
            <li>
              Spanish endings were created with Google Translate, so they likely
              have problems.
            </li>
            <li>
              Playing a single player game with Rugal can sometimes get stuck
              where you fight the same team repeatedly.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.0.0b3</h3>
          <p>Fixed auto animation bug.</p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              Fixed bug where auto animations in the backgrounds were going too
              fast.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              Endings are in English when playing with language set to Japanese.
            </li>
            <li>
              Spanish endings were created with Google Translate, so they likely
              have problems.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.0.0b2</h3>
          <p>
            Fixes bugs around team random select killing the sound effects and
            versus mode.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              Team random select is no longer silent and no longer kills all
              sound effects.
            </li>
            <li>
              Versus mode again properly randomizes the backgrounds. I
              accidentally removed that.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              Endings are in English when playing with language set to Japanese.
            </li>
            <li>
              Spanish endings were created with Google Translate, so they likely
              have problems.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.0.0b0</h3>
          <p>
            <b>The first beta release!</b> For English, the hack is completely
            done. There may still be some bugs, that is why this is beta.
          </p>
          <p>
            There is still more work to do for Spanish and Japanese. But the
            hack is still fully playable in these languages.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              The cutscene after Rugal is defeated is completely finished.
            </li>
            <li>New endings being correctly used.</li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              Endings are in English when playing with language set to Japanese.
            </li>
            <li>
              Spanish endings were created with Google Translate, so they likely
              have problems.
            </li>
          </ul>
          <Hr />
        </div>
        <div className={styles.headerWithPadding} id="build-the-rom">
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
        <div className={styles.headerWithPadding} id="tips">
          <h2 className={styles.pageHeader}>Tips</h2>
          <ul className="list-disc ml-4 mb-8 mt-2">
            <li>
              Hold p1 start while on the character select screen to see the
              version. Please include it when reporting a bug. Bugs can be
              reported at{" "}
              <a href="https://github.com/city41/kof94te/issues">Github</a> or{" "}
              <a href="https://discord.gg/Uuaka5mq">Discord</a>. The QR code
              takes you to this website.
              <Image
                className="shadow-xl my-4"
                src={versionAndQrCodePng.src}
                width={versionAndQrCodePng.width}
                height={versionAndQrCodePng.height}
                alt="Version and QR code when hoding start"
              />
            </li>
            <li>
              The character select screen has no time limit. The order select
              screen has the same time limit as the original game.
            </li>
            <li>
              In versus mode the stage you fight on is always randomly selected.
            </li>
            <li>
              In versus mode both players can choose a new team on the next
              match.
            </li>
            <li>
              Random team select will wipe out any previous characters you have
              chosen.
            </li>
            <li>
              In single player mode, if you choose one of the original 8 teams,
              you will get that team&apos;s cutscenes and ending.
            </li>
          </ul>
          <h3 className="text-lg font-bold">Using Rugal</h3>
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
            To get second form Rugal, push right or left until Rugal stops
            moving.
          </p>
          <p className="my-4">
            Once he is chosen, turn off debug dip 1-4, otherwise both characters
            will be invincible in the fight.
          </p>
          <p>
            In a single player game, using Rugal will crash the game if you make
            it to the Rugal fight. This is true in the original game too.
          </p>
          <h4 className="font-bold my-4">
            Why isn&apos;t Rugal a normal character?
          </h4>
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
        <div>
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
