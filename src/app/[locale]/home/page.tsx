import { useTranslations } from "next-intl";
import TokenList from "./components/TokenList";

export default function HomePage() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <TokenList />
    </div>
  );
}
