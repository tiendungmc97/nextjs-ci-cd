import { ReactNode } from "react";
import "./styles.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
