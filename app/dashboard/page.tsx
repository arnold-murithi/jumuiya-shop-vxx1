import Image from "next/image";
import dashboardImage from "@/public/interior.jpg"
import { getFiveProducts } from "../data-access/product";
import { Button } from "@/components/ui/button";



export default async function Home() {

  const fiveProducts = await getFiveProducts()
  
  return (
  <div className="min-h-screen w-full sm:min-w-64">
    <div className="h-96 mb-2 rounded-md mt-1">
      <div className="items-center">
       <Image priority={false} src={dashboardImage} className="w-full h-96 object-cover absolute rounded-md" alt=""/>
        <div className="items-center justify-center">
          <span className="m-8 p-2 box-decoration-slice bg-gradient-to-r from-gray-800 to-gray-200 text-white
          text-6xl relative font-bold">
          ONLINE <br/>STORE
          </span>
          </div>
       </div>
    </div>
     <footer className="bg-gradient-to-r from-blue-600 to-purple-300 text-white pt-[100px] rounded-lg m-1">
      <div className="max-w-6xl mx-auti px-4 sm:px-6 lg:px-8 flex flex-cols-1 gap-8">
        <div className="">
          <h4 className="text-lg font-semibold mb-4">About us</h4>
          <p className="text-sm leading-6">
          Your go-to destination for all things amazing! We provide quality products at the best prices, with a seamless shopping experience.
          </p>
        </div>
        <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="/shop" className="hover:text-indigo-300 transition-colors">Shop</a></li>
        <li><a href="/about" className="hover:text-indigo-300 transition-colors">About Us</a></li>
        <li><a href="/contact" className="hover:text-indigo-300 transition-colors">Contact</a></li>
        <li><a href="/faq" className="hover:text-indigo-300 transition-colors">FAQs</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
      <ul className="space-y-2">
        <li><a href="/returns" className="hover:text-indigo-300 transition-colors">Returns</a></li>
        <li><a href="/shipping" className="hover:text-indigo-300 transition-colors">Shipping Info</a></li>
        <li><a href="/terms" className="hover:text-indigo-300 transition-colors">Terms & Conditions</a></li>
        <li><a href="/privacy" className="hover:text-indigo-300 transition-colors">Privacy Policy</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-4">Subscribe to receive<br/> our offers</h4>
      <form className="flex flex-col space-y-3">
        <input 
          type="email" 
          placeholder="Your email" 
          className="px-4 py-2 text-gray-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md transition-transform transform hover:scale-105"
        >
          Subscribe
        </button>
      </form>
    </div>
    <div className="flex justify-center space-x-4 mb-4">
    <div className="mt-10 border-t border-indigo-500 pt-6 text-center">
      <a href="#" className="hover:text-indigo-300 transition"><Image src="" alt="Facebook" width={24} height={24}/></a>
      <a href="#" className="hover:text-indigo-300 transition"><Image src="" alt="Twitter" width={24} height={24}/></a>
      <a href="#" className="hover:text-indigo-300 transition"><Image src="" alt="Instagram" width={24} height={24}/></a>
      <a href="#" className="hover:text-indigo-300 transition"><Image src="" alt="LinkedIn" width={24} height={24}/></a>
    </div>
    </div>
      </div>
      <p className="text-sm">&copy; 2025 Your Ecommerce Site. All rights reserved.</p>
     </footer>
  </div>
  );
}
