import ProductsComponent from "@/components/Cards";
import { productos } from "../../public/data";
import Video from "@/components/Video/Video";



export default function Home() {
  return (
    <div className="bg-[#131212] w-[100%]">
    <Video/>

    <section className="flex mt-7 lg:space-x-4 lg:p-4 lg:mt-20 justify-around">

      <div className="flex flex-col justify-center">
        <span className="text-white text-[10px] text-center mb-3 lg:text-white lg:text-xl lg:text-center lg:mb-7" >IPHONE</span>
      <img src="/assets/rectangle 5.png" className=" w-[70px] h-[70px]  lg:w-[250px] lg:h-[250px] lg:border- border-black rounded-[100%] transition-transform duration-300 hover:scale-105 " alt="foto apple" />
      </div>

      <div className="flex flex-col justify-center">
      <span className="text-white text-[10px] text-center mb-3 lg:text-white lg:text-xl lg:text-center lg:mb-7">IPAD</span>
      <img src="/assets/rectangle 8.png" className="w-[70px] h-[70px]  lg:w-[250px] lg:h-[250px] lg:border- border-black rounded-[100%] transition-transform duration-300 hover:scale-105  " alt="foto apple" />
      </div>

      <div className="flex flex-col justify-center">
      <span className="text-white text-[10px] text-center mb-3 lg:text-white lg:text-xl lg:text-center lg:mb-7">MACBOOK</span>
      <img src="/assets/rectangle 9.png"className="w-[70px] h-[70px]  lg:w-[250px] lg:h-[250px] lg:border- border-black rounded-[100%] transition-transform duration-300 hover:scale-105 " alt="foto apple"  />
      </div>

      <div className="flex flex-col justify-center">
      <span className="text-white text-[10px] text-center mb-3 lg:text-white lg:text-xl lg:text-center lg:mb-7">ACCESORIES</span>
      <img src="/assets/rectangle 10.png" className="w-[70px] h-[70px]  lg:w-[250px] lg:h-[250px] lg:border- border-black rounded-[100%] transition-transform duration-300 hover:scale-105 " alt="foto apple" />
      </div>

    </section>

    <section>
      <img src="/assets/image1.png" className="p-3 mt-2 h-[150px] lg:p-8 lg:rounded-md" alt="" />
    </section>

    <h2 className="text-[#c4ac23] mt-3 mb-4  lg:text-[35px] lg:text-[#C4AC23] text-center lg:mb-20 "  >Nuestros productos EN STOCK🔥</h2>
      
    <ProductsComponent products={productos}/>

    <img src="/assets/image 10.png" className="hidden lg:block  lg:ml-[120px] lg:mt-[50px]  lg:w-[80%] lg:h-[400px]" alt="" />
  
    </div>
  

  );
}
//renderice los productos, este es mi pagina principal, mi home