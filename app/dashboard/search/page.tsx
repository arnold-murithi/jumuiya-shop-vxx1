import { getProduct } from "@/app/data-access/product"
import SearchPage from "@/components/SearchPage"

export default async function ProductSearch({searchParams}:{searchParams?:{query?:string}}){
    const query = searchParams?.query || ""
return(
    <div>
      <h1>Hello this is the search page</h1>
      {/* <SearchPage/>   */}
      
    </div>
)
}