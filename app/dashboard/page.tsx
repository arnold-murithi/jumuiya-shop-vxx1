import Image from "next/image";
import dashboardImage from "@/public/interior.jpg"
import { getFiveProducts } from "../data-access/product";
import { Button } from "@/components/ui/button";


export default async function Home() {

  const fiveProducts = await getFiveProducts()
  
  return (
    <div className="min-h-screen">
     <Image priority={false} src={dashboardImage} className="w-full h-96 object-cover absolute" alt=""/>
     
      <div className="ml-5 ">
        <h1 className="text-white text-9xl relative font-bold p-40">ONLINE STORE</h1>
        </div>
        <div className="place-items-center mt-0">
            <h1 className="font-mono font-bold text-4xl">Discounted Products</h1>
          </div>
        <div className="min-h-64 ">
          <div className="flex mx-24 ms-0.5 me-0 bg-fuchsia-200">
            {fiveProducts.map((product) =>(
              <div key={product.id} className="place-items-center justify-center shadow-xl border-black border-1 w-64 h-44 mt-10 ml-3 rounded-xl p-4">
                <Image 
                src={product.imagePath}
                width={100}
                height={100}
                alt={product.description}
                />
              <h2 className="mt-8 font-semibold">{product.name}</h2>
              <Button className="w-full">Buy now</Button>
            </div>
            ))}
          </div>
        </div>
    </div>
  );
}
