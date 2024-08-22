import Image from "next/image"
import { IProductCardProps } from "@/interfaces/Interfaces"

function ProductCard({product}: IProductCardProps) {
    return(
        <div>
         <Image src={product.image} alt={product.name} width={200} height={200} /> 
         <h2>{product.name}</h2>
         <p>{product.price}</p>
         <button>Detalle</button>
        </div>

    )
}

export default ProductCard

//para imagenes es mejor usar la etiqueta image e importarlo de next, esta optimizado


