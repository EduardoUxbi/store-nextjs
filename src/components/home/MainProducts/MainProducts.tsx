import Image from "next/image";
import styles from "./MainProducts.module.sass";

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
      {
        headers: {
          "X-Shopify-Access-Token": process.env.SHOPIFY_KEY || "",
        },
      }
    );

    const { products } = await response.json();

    return products;
  } catch (error) {
    console.log(error);
  }
};

export const MainProducts = async () => {
  const products = await getProducts();
  return (
    <section className={styles.MainProducts}>
      <h3> Productos Recientes</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product) => {
          const imageSrc = product.images[0].src;

          return (
            <article key={product.id}>
              <p>{product.id}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
