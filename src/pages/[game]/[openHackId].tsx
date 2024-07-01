import { games } from "@/hacks";
import { GamePage, PublicGamePageProps } from "@/components/GamePage/GamePage";
import { Layout } from "@/components/Layout/Layout";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

export const getStaticPaths = () => {
  const paths = games.flatMap((g) => {
    return g.hacks.map((h) => {
      return { params: { game: g.mameName, openHackId: h.id } };
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export function getStaticProps(
  context: GetStaticPropsContext
): GetStaticPropsResult<PublicGamePageProps> {
  const mameSlug = context.params!.game as string;
  const game = games.find((g) => g.mameName === mameSlug)!;

  const openHackIdp = context.params!.openHackId;

  const openHackId = Array.isArray(openHackIdp) ? openHackIdp[0] : openHackIdp;

  return {
    props: {
      game,
      focusedHackId: openHackId,
    },
  };
}

function NextGamePage(props: PublicGamePageProps) {
  return (
    <Layout>
      <GamePage {...props} />
    </Layout>
  );
}

export default NextGamePage;
