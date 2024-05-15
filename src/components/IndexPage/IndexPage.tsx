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
            <a className="menu-item" href="#japanese-spanish">
              Japanese/Spanish
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
        <div className="heading-container" id="japanese-spanish">
          <h2 className={styles.pageHeader}>Japanese and Spanish</h2>
          <p className="my-4">
            The hack fully works in English, Spanish and Japanese. I do not
            understand Japanese or Spanish, so I possibly made mistakes for
            those languages. If you find one, please{" "}
            <a href="mailto:matt.e.greer@gmail.com">let me know</a> and I will
            fix it.
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
        <div className="mb-16">
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
          <h3
            className="text-2xl font-bold cursor-pointer hover:text-blue-900"
            onClick={() => setShowAlphaReleaseNotes((ar) => !ar)}
          >
            Alpha releases (click to {showAlphaReleaseNotes ? "hide" : "show"})
          </h3>
          {showAlphaReleaseNotes && (
            <>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.11.1</h3>
              <p>
                New approach to endings. They still need a lot more work, but I
                think they will be really cool when finished. A little strange,
                but cool. You will see :)
              </p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>Got rid of the thank you ending.</li>
                <li>New endings in place, but not being used correctly yet.</li>
                <li>
                  Added a QR code. Hold start at the character select screen.
                </li>
                <li>The group portrait after the credits has been fixed.</li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <ul className="list-disc ml-4">
                <li>Endings need more work.</li>
                <li>Cutscene 3 has not been started on yet.</li>
              </ul>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.10.1</h3>
              <p>Lots of work on the cutscene before Rugal and the ending.</p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>Cutscene before Rugal now fully works.</li>
                <li>
                  The hack&apos;s ending is now in place. Although it might get
                  better.
                </li>
                <li>
                  The &quot;hack not done yet&quot; message was removed. Hold
                  start during character select to see the hack&apos;s version.
                </li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <ul className="list-disc ml-4">
                <li>The group portrait after the credits is all messed up.</li>
              </ul>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.9.2</h3>
              <p>
                Team random select: the left random box is character random
                select, just like in most KOFs. The right box is team random
                select, it will randomly choose one of the 8 established teams.
              </p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>Team random select</li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <ul className="list-disc ml-4">
                <li>The second and third cutscenes are still not correct.</li>
                <li>Endings are not correct.</li>
              </ul>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.8.2</h3>
              <p>Alternate colors now shown in chosen team avatars</p>
              <p className="mt-4 text-red-600 font-bold">
                This was a big change. So there might be bugs I missed.
              </p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>
                  When your chosen character shows up down below the character
                  select screen, their color choice is now shown. So say you
                  choose Terry with C or D, he will be shown down below in his
                  purple hat and vest.
                  <Image
                    className="shadow-xl my-4"
                    src={altColorsInChosenAvatarsPng.src}
                    width={altColorsInChosenAvatarsPng.width}
                    height={altColorsInChosenAvatarsPng.height}
                    alt="Alternate colors shown for your chosen characters"
                  />
                  So here player one has chosen alternate Terry and Kim.
                </li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <ul className="list-disc ml-4">
                <li>The second and third cutscenes are still not correct.</li>
                <li>Endings are not correct.</li>
              </ul>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.7.0</h3>
              <p>Fixes to the continue screen</p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>
                  The character who lost the match is now in the center of the
                  continue screen.
                </li>
                <li>
                  When continuing, the character who lost the match is the one
                  who yells out.
                </li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <ul className="list-disc ml-4">
                <li>The second and third cutscenes are still not correct.</li>
                <li>Endings are not correct.</li>
                <li>
                  Choosing alternate colors for a character is not reflected in
                  the chosen team avatars at the bottom of the character select
                  screen. For example choose Terry with D. He actually has his
                  purple vest and hat, but in the chosen team avatar, he has his
                  red hat and vest.
                </li>
              </ul>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.6.0</h3>
              <p>
                Mostly bug fixes. Rugal is now usable by turning on debug dip
                1-4. See the &quot;Using Rugal&quot; section above for more
                info.
              </p>
              <p className="mt-4 text-red-600 font-bold">
                This release involved a big clean up of the code, so there may
                be bugs I missed.
              </p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>Rugal selectable via debug dip 1-4.</li>
                <li>
                  The CPU&apos;s chosen team is shown once it is picked in the
                  lower part of the character select screen. This matches what
                  KOF95 does.
                </li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <ul className="list-disc ml-4">
                <li>The second and third cutscenes are still not correct.</li>
                <li>Endings are not correct.</li>
                <li>
                  Choosing alternate colors for a character is not reflected in
                  the chosen team avatars at the bottom of the character select
                  screen. For example choose Terry with D. He actually has his
                  purple vest and hat, but in the chosen team avatar, he has his
                  red hat and vest.
                </li>
              </ul>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.5.2</h3>
              <p>
                Several improvements, most notably random select. It works just
                like KOF98&apos;s random select.
              </p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>Random Select</li>
                <li>
                  Win quotes for both single and versus play are now all correct
                </li>
                <li>First cut scene is now correct</li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <ul className="list-disc ml-4">
                <li>The second and third cutscenes are still not correct.</li>
                <li>Endings are not correct.</li>
                <li>
                  Choosing alternate colors for a character is not reflected in
                  the chosen team avatars at the bottom of the character select
                  screen. For example choose Terry with D. He actually has his
                  purple vest and hat, but in the chosen team avatar, he has his
                  red hat and vest.
                </li>
              </ul>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.4.1</h3>
              <p>
                This is a tiny release. It fixes the regressions that got
                introduced into the player cursors. Regressions bug me. Bonus,
                the cursor also wraps the avater better, so it looks nicer.
              </p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>Fix the palette cursors</li>
                <li>Haved player cursors wrap around the avatar better</li>
                <li>Bump down the character grid a couple pixels</li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <p>Same as last release.</p>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.4.0</h3>
              <p>
                A small release that is more about pushing the latest out to
                correspond with{" "}
                <a
                  href="https://www.youtube.com/watch?v=IzfknjtSBrU"
                  rel="noreferrer"
                >
                  the YouTube update video
                </a>{" "}
                I just to published.
              </p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>
                  Some work on the cutscene before Rugal. Your custom team shows
                  up ... sometimes :) And the cutscene dialog is all wrong. Lots
                  more work to do here.
                </li>
                <li>Changed Rugal to his KOF95 avatar instead of KOF98</li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <p>Same as last release.</p>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.3.3</h3>
              <p>
                A small release that fixes some bugs around continuing and the
                palettes. A single player playthrough should now fully work,
                including if you continue.
              </p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>Continuing no longer causes the long delay</li>
                <li>
                  Continuing now re-fights the defeated team as it should.
                </li>
                <li>
                  When a second player challenges in the middle of a single play
                  run, the greyed out teams are un-greyed during the versus char
                  select. Once it goes back to a single player game, the
                  defeated teams grey out again.
                </li>
                <li>
                  Continuing shows who the cpu team is in the char select screen
                </li>
                <li>
                  Greyed out teams in char select no longer have palette
                  problems.
                </li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <ul className="list-disc ml-4">
                <li>
                  The cutscenes and endings have seen no work so far, they use
                  one of the pre-established teams and have bugs in them.
                </li>
                <li>
                  Choosing alternate colors for a character is not reflected in
                  the chosen team avatars at the bottom of the character select
                  screen. For example choose Terry with D. He actually has his
                  purple vest and hat, but in the chosen team avatar, he has his
                  red hat and vest.
                </li>
              </ul>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.3.1</h3>
              <p>
                The main feature of this version is single player mode is no
                longer endless. Thus it is now an almost fully functioning hack.
                But beware, it still has bugs and there is still more work to
                do.
              </p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>Single player version now properly progresses.</li>
                <li>
                  Defeated teams grey out in the character select screen (see
                  screenshot above).
                </li>
                <li>Character select screen now handles Rugal correctly.</li>
                <li>Demo mode is now completely correct.</li>
              </ul>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <ul className="list-disc ml-4">
                <li>
                  When continuing, the character select screen does not show who
                  the cpu team is.
                </li>
                <li>
                  When continuing, sometimes the cpu team hangs for 5-10 seconds
                  on the character select screen. If you wait, it should
                  progress to order select.
                </li>
                <li>
                  When continuing, you won&apos;t re-fight the team you just
                  lost to.
                </li>
                <li>
                  Sometimes palettes are incorrect. Most notably greyed out
                  teams in the character select screen and endings.
                </li>
                <li>
                  The cutscenes and endings have seen no work so far, they use
                  one of the pre-established teams and have bugs in them.
                </li>
                <li>
                  Choosing alternate colors for a character is not reflected in
                  the chosen team avatars at the bottom of the character select
                  screen. For example choose Terry with D. He actually has his
                  purple vest and hat, but in the chosen team avatar, he has his
                  red hat and vest.
                </li>
              </ul>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.2.1</h3>
              <p>
                Other than some minor polish and possibly some bugs I missed,
                versus mode is now fully functional. Single player mode still
                has several issues, see below.
              </p>
              <h4 className="heading font-bold py-4">Changes</h4>
              <ul className="list-disc ml-4">
                <li>
                  Alternate colors fully working. In mirror matches proper
                  colors will be chosen in all cases. To purposely pick the
                  alternate color for a character, press C or D when choosing
                  them.
                </li>
                <li>Win screens fully working.</li>
                <li>Continue screens fully working.</li>
                <li>
                  Clones (ie, more than one of the same character on a team) no
                  longer allowed. I thought I was going to put this behind a
                  code, but now I am pretty sure I won&apos;t. The game engine
                  just wasn&apos;t designed to handle this and I think making it
                  happen will be a lot of work.
                </li>
                <li>
                  Random stages in versus mode, a small touch to make the game a
                  bit more modern.
                </li>
                <li>
                  Both players can always choose a new team in versus mode. This
                  is different from real KOF94, but modern games tend to allow
                  this so I added it.
                </li>
                <li>
                  Fixed lots of little bugs and added lots of little polish here
                  and there.
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
                  When continuing, the character select screen does not show who
                  the cpu team is.
                </li>
                <li>
                  When continuing, sometimes the cpu team hangs for 5-10 seconds
                  on the character select screen. If you wait, it should
                  progress to order select.
                </li>
              </ul>
              <Hr />
              <h3 className="heading text-lg font-bold pb-4">Version 0.1.3</h3>
              <p>
                The hack still has a very long way to go. But, in its current
                state you can use custom teams if you don&apos;t mind the (many)
                issues this version has.
              </p>
              <h4 className="heading font-bold py-4">Known Issues</h4>
              <ul className="list-disc ml-4">
                <li>
                  In single player mode the game doesn&apos;t keep track of
                  which teams you have beat. This means single player mode is
                  endless.
                </li>
                <li>
                  Win screens show one of the preformed teams, not the team you
                  chose.
                </li>
                <li>
                  The continue screen shows one of the preformed teams, not the
                  team you chose.
                </li>
                <li>
                  The CPU doesn&apos;t always pick alternate colors, so often in
                  mirror matches both characters are the same color.
                </li>
                <li>
                  Versus mode often uses the same colors for mirror matches too.
                </li>
                <li>
                  You can not purposely choose the alternate color for
                  characters.
                </li>
                <li>
                  In single player mode, the char select screen does not yet
                  gray out teams you have defeated.
                </li>
                <li>
                  During the demo, the two CPU players randomly pick a team in
                  character select but their randomization is not shown.
                </li>
                <li>
                  Minor sprite glitches during order select and gameplay. Very
                  minor and often not there at all. Depends on what team you
                  chose. Choosing Chang or multiple Changs makes this happen
                  more often.
                </li>
                <li>
                  You can choose clones without issue. Ultimately clones will
                  not be allowed.
                </li>
              </ul>
              <Hr />
            </>
          )}
        </div>
        <div className="heading-container" id="build-the-rom">
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
          <a href="https://discord.gg/Uuaka5mq">Discord</a>
        </div>
      </div>
    </div>
  );
}

export { IndexPage };
