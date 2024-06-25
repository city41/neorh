import { IndexPage } from "@/components/IndexPage/IndexPage";
import { games } from "../hacks";

export default function NextIndexPage() {
  return <IndexPage games={games} />;
}
