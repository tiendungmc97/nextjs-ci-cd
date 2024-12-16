import Section from "./components/Section";
import TokenList from "./components/TokenCardList";

export default function HomePage() {
  return (
    <div>
      <Section key={1} />
      <Section key={2} />
      <TokenList />
      <Section key={3} />
      <Section key={4} />
      <Section key={5} />
    </div>
  );
}
