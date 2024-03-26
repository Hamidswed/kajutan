import { Body } from "../components/body/Body";
import CommentList from "../components/comments/CommentList";
import { Hero } from "../components/hero/Hero";

export function Home() {
  return (
    <div className="pb-24 flex flex-col items-center">
      <Hero />
      <Body />
      <CommentList />
    </div>
  );
}
