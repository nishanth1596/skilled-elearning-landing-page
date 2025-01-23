import { productData } from "../productData";
import Card from "./Card";

const ProductSection = () => {
  return (
    <section className="mx-5 mb-20 mt-16 md:mx-11 xl:mx-40">
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-y-[3.75rem] xl:grid-cols-3 xl:grid-rows-2">
        <Card title="Check out our most popular courses!" />
        {productData.map((item) => (
          <Card
            title={item.title}
            logo={item.logo}
            details={item.details}
            key={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
