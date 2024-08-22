import ProductsComponent from "@/components/Cards";
import { productos } from "../../public/data";

export default function Home() {
  return (
    <div>
      <ProductsComponent products={productos} />
    </div>
  );
}
