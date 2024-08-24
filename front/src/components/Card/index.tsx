
import { IProductCardProps } from "@/interfaces/Interfaces"

function ProductCard({product}: IProductCardProps) {
    return(
<div className=" flex space-x-4 ">
    <div className="flex flex-col gap-3 p-4 w-56 bg-[#27272a] rounded-lg">

      <div className="relative z-10 w-full h-40 bg-[#4c1d95] rounded-lg  cursor-pointer">
              <img src={product.image} alt="Product Image" className="w-full h-full object-cover" />
            </div>
      
            <div className="text-lg font-semibold text-[#d9d9d9] capitalize overflow-clip">
              <span>{product.name}</span>
            </div>
      
            <div className="text-sm text-[#d9d9d9]">
              <span>e</span>
            </div>
      
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-[#d9d9d9]">
                <span>${product.price}</span>
              </div>
      
              <button className="cursor-pointer flex justify-center items-center gap-1 py-2 px-4 bg-[#C4AC23] text-sm font-medium text-black border-2 rounded-lg shadow-inner">
                <span>Detalles</span>
              </button>
            </div>
          </div>
          </div>

      
  )
}

export default ProductCard

//para imagenes es mejor usar la etiqueta image e importarlo de next, esta optimizado

/*<div>
         <Image src={product.image} alt={product.name} width={200} height={200} /> 
         <h2>{product.name}</h2>
         <p>{product.price}</p>
         <button>Detalle</button>
        </div>*/

        //flex flex-col gap-3 p-4 w-full sm:w-56 bg-[#27272a] rounded-lg border-2 border-yellow-500
//relative z-10 w-full h-40 bg-[#4c1d95] rounded-lg overflow-hidden cursor-pointer