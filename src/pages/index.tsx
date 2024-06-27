import { IndexPage } from "@/components/IndexPage/IndexPage";
import { games } from "../hacks";
import { Layout } from "@/components/Layout/Layout";

export default function NextIndexPage() {
  return (
    <Layout>
      <IndexPage games={games} />
    </Layout>
  );
}
