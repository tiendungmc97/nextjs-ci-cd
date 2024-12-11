import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="w-full">
      <nav className="flex w-full justify-between p-2 text-white">
        <div>
          <NavigationLink href="/home">{t("home")}</NavigationLink>
          <NavigationLink href="/home">{t("home")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
