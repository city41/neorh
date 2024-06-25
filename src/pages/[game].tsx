import { useRouter } from "next/router";
import { games } from "../hacks";
import { GamePage, PublicGamePageProps } from "@/components/GamePage/GamePage";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

export const getStaticPaths = () => {
  const paths = games.map((g) => {
    return { params: { game: g.mameName } };
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

  return {
    props: {
      game,
    },
  };
}

function NextGamePage(props: PublicGamePageProps) {
  return <GamePage {...props} />;
}

export default NextGamePage;
