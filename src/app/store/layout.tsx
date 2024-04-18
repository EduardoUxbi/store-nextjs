import { getCollections } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";
import { createAgent } from "app/utils/openai/createAgent";
import { Chat } from "app/components/chat/chat";
import styles from "./StoreLayout.module.sass";
import Link from "next/link";


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();
  const products = await getProducts();
  const productTitles = products.map((product) => product.title);
  const flatProductTitles = productTitles.join("\n");
  const agent = createAgent(flatProductTitles);

  return (
    <main className={styles.StoreLayout}>
      <Chat agent={agent} />
      <nav>
        <ul className={styles.StoreLayout__list}>
          {collections.map((collection: any) => (
            <Link
              key={collection.id}
              href={"/store/" + collection.handle}
              className={styles.StoreLayout__chip}
            >
              {collection.title}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </main>
  );
}
