"use server"
import prisma from "@/app/db/db"
import { object, z } from "zod"
import fs from "fs/promises"
import { notFound, redirect } from "next/navigation"

const fileSchema = z.instanceof(File, { message: "required" }) //Pass file as an instance otherwise show the message 
const imageSchema = fileSchema.refine(file => file.size === 0 || file.type.startsWith("image/"))// It checks if the file is empty or it's MIME type starts with image/

const addSchema = z.object({                                                                                      //if a file is submitted check that file if it is of the for jpeg, png e.t.c         
    name: z.string().min(1),
    description: z.string().min(1),
    priceInCents: z.coerce.number().int().min(1),
    file: fileSchema.refine(file => file.size > 0, "required"), //.refine takes a file object
    image: imageSchema.refine(file => file.size > 0, "required")  //Refinement is further done to imageSchema to ensure it's size is greater than zero
})
export async function addProduct(prevState: unknown, formData: FormData) { //actions must be async
    console.log(formData)
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    console.log(result);
    if (result.success === false) {
        return result.error.formErrors.fieldErrors
    }
    const data = result.data

    await fs.mkdir("products", { recursive: true })
    const filePath = `products/${crypto.randomUUID()}-${data.file.arrayBuffer()}` //create an id for the products and then append ...(to check what is appended)
    const fileBuffer = await data.file.arrayBuffer();
    await fs.writeFile(filePath, new Uint8Array(fileBuffer))
    //convert the image into a buffer and then pass the file to  .writeFile
    //.arrayBuffer converts the file into a format that node.js knows how to write a file

    await fs.mkdir("public/products", { recursive: true })// public/ -to store image in the public folder in order to be easily accessible in our applicarion. 
    const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`
    const imageBuffer = await data.image.arrayBuffer();
    await fs.writeFile(`public${imagePath}`, new Uint8Array(imageBuffer))


    await prisma.product.create({
        data: {
            isAvailableForPurchase: false,
            name: data.name,
            description: data.description,
            priceInCents: data.priceInCents,
            filePath,
            imagePath
        }
    })
    redirect("/admin/products")
}
//we need to save files in the file system before we can save the filePath to the database
export async function toggleProductAvailability(id: string, isAvailableForPurchase: boolean) {
    await prisma.product.update({
        where: { id },
        data: { isAvailableForPurchase }
    })//this function is linked to the ActiveToggleDrown function (productActions.tsx)

    await prisma.product.update({ where: { id }, data: { isAvailableForPurchase } })
}

export async function deleteProduct(id: string) {
    const product = await prisma.product.delete({ where: { id } })
    if (product === null) { return notFound() }

    await fs.unlink(product.filePath)
    await fs.unlink(`public${product.imagePath}`)
}