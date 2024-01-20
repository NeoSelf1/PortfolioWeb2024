import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";

import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { cls, notoSansKr, roboto } from "@/lib/fonts";
import RecoilContextProvider from "@/context/recoil-context";

export const metadata = {
  title: { default: "Neoself Portfolio", template: "%s | Neoself" },
  description: "항상 새로운 UX를 탐구하고자 하는 프론트엔드 개발자입니다.",
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
        )} bg-gray-50 dark:bg-[#091A0D] text-gray-950 relative pt-28 sm:pt-36  dark:text-gray-50 dark:text-opacity-90 px-8`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <RecoilContextProvider>
              {children}
              {/* <Toaster position="top-right" /> */}
              <ThemeSwitch />
            </RecoilContextProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
