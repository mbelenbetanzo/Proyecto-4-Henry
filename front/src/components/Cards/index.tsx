import { IProducts, IProductsComponent } from "@/interfaces/Interfaces";
import ProductCard from "../Card";

function ProductsComponent({products}: IProductsComponent) {
    return(
      <>
        {products.map((product: IProducts )=> (
            <ProductCard product={product} key={product.id}  />
        ))}
      </>
    )
}

export default ProductsComponent;