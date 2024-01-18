"use client";

import { RecoilRoot, atom } from "recoil";

//recoil state 생성
export const isBlogState = atom({
  key: "isBlog",
  default: false,
});
export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
