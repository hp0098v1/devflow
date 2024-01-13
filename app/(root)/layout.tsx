import React from "react";

import Navbar from "@/components/shared/navbar/Navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <main className="bg-light-850-dark-100 relative">
      {/* Navbar */}
      <Navbar />
      <div className="flex">
        {/* Left Sidebar */}
        Left Sidebar
        {/* Content */}
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        {/* Right Sidebar */}
        Right Sidebar
      </div>
      {/* Toaster */}
      Toaster
    </main>
  );
}
