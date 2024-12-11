import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="bg-slate-850 relative flex grow flex-col py-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1 size-[20500px] translate-x-[-47.5%] rounded-full bg-gradient-to-b from-slate-900 via-cyan-500" />
      </div>
      <div className="container flex grow flex-col px-4">
        <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
      </div>
    </div>
  );
}
