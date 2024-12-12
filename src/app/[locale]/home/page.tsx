import { useTranslations } from "next-intl";
import TokenList from "./components/TokenList";
import Section from "./components/Section";

export default function HomePage() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <TokenList />
      <Section key={1} />
      <Section key={2} />
      <Section key={3} />
      <Section key={4} />
      <Section key={5} />
      <div className="h-40 w-full bg-red-500 text-center">section2</div>
    </div>
  );
}
