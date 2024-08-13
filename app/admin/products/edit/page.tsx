import prisma from "@/app/db/db";
import PageHeader from "../../_components/PageHeader";
import ProductForm from "../_components/ProductForm";

export default async function EditProductPage ({params:{id}}:{params:{id:string}}){

    //failure to write ({params:{id}})this error prompts:- No value exists in scope for the shorthand property 'id'. Either declare one or provide an initializer.
const product = await prisma.product.findUnique({
    where:{id},// Product function implementation currently not working
})
      
    return(
    <>
    <PageHeader>Edit product</PageHeader>
    <ProductForm product={product}/>
    </>
    )
}