"use client";

import { RecoilRoot, atom } from "recoil";

export const isKoreanState = atom({
  key: "isKorean",
  default: false,
});
export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
