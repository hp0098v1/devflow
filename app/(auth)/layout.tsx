import React from "react";

type TProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: TProps) {
  return <main className="flex-center min-h-screen w-full">{children}</main>;
}
