import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uxbi Store",
  description: "Welcome to the Uxbi Store, an ecommerce from other century",
  keywords: ["ecommerce", "future", "world"],
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
