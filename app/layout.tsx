import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";

import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { cls, notoSansKr, roboto } from "@/lib/fonts";
import RecoilContextProvider from "@/context/recoil-context";

export const metadata = {
  title: { default: "Neoself Portfolio", template: "%s | Neoself" },
  description: "항상 새로운 UX를 탐구하고자 하는 풀스택 개발자입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${cls(
          notoSansKr.className,
          roboto.variable
        )} transition bg-gray-50 dark:bg-[#0b180f] text-gray-950 relative pt-28 sm:pt-36  dark:text-gray-50 dark:text-opacity-90 px-8`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <RecoilContextProvider>
              {children}
              <ThemeSwitch />
            </RecoilContextProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
