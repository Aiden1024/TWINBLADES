import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl md:px-6 flex-grow ">
        {children}
      </main>

    </div>
  );
}
