import { MainProducts } from "@/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "✨ Future World",
  description: "Welcome to the future world, a ecommerce from other century.",
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
