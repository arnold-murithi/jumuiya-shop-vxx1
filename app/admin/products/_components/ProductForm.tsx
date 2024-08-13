"use client"
import { formatCurrency, formatNumber } from "@/app/lib/formatter"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { addProduct } from "../../actions/products"
import { Textarea } from "@/components/ui/textarea"
import { useFormState, useFormStatus } from "react-dom"
import { Product } from "@prisma/client"
import Image from "next/image"

export default function ProductForm({product}:{product?:Product | null}){
    const [priceInCents, setPriceInCents] = useState<number | undefined>(product?.priceInCents)
    const [error, action] = useFormState(addProduct, {})


    return <form action={action} className="space-y-8">
        <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" name="name" required defaultValue={product?.name ||""}/>
            {error.name && <div className="text-destructive">{error.name}</div>}
        </div>
        <div className="space-y-2">
            <label htmlFor="priceIncents">Price in Cents</label>
            <Input type="number" id="priceInCents" name="priceInCents" value={priceInCents} 
            onChange={(e) => setPriceInCents(Number(e.target.value)||undefined)} required
            />
            {/*Will show the actual dollar amount*/}
            <div className="text-muted-foreground">{formatCurrency((priceInCents || 0)/100)}</div>
            {error.priceInCents && <div className="text-destructive">{error.priceInCents}</div>}

        </div>
        <div className="space-y-2">
            <label htmlFor="description">Description</label>
            <Textarea id="description" name="description" required defaultValue={product?.description}/>
            {error.description && <div className="text-destructive">{error.description}</div>}
        </div>
        <div className="space-y-2">
            <label htmlFor="file">File</label>
            <Input type="file" id="file" name="file" required = {product == null}/>
            {error.file && <div className="text-destructive">{error.file}</div>}
        </div>
        <div className="space-y-2">
            <label htmlFor="image">Image</label>
            <Input type="file" id="image" name="image" required = {product == null}/> 
            {error.image && <div className="text-destructive">{error.image}</div>}
        </div>
        <SubmitButton/>
    </form>
}

function SubmitButton(){
    const{pending} = useFormStatus()
    return(
        <Button type="submit" disabled={pending}>{pending ? "Saving":"Save"}</Button>
    )
}
//In the image section required = {product == null} this is because we don't want our a user to be forces to upload an image when they want to edit