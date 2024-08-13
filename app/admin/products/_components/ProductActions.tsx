"use client"
import { DropdownMenu, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useTransition } from "react";
import { deleteProduct, toggleProductAvailability } from "../../actions/products";
import { useRouter } from "next/navigation";

export function ActiveToggleDropdownProduct({id, isAvailableForPurchase}:{id:string, isAvailableForPurchase:boolean}){
    const router = useRouter();
    const [isPending, startTransition] = useTransition()

    return <DropdownMenuItem 
    disabled={isPending}
    onClick={()=>{startTransition(async () =>{ // async function to toogle our actual active state
        await toggleProductAvailability(id, !isAvailableForPurchase)
        router.refresh()
    })}}>
      {isAvailableForPurchase? "Deactivate":"Activate"}  
    </DropdownMenuItem>
}

export function DeleteDropdownItem({id, disabled}:{id:string, disabled:boolean}){ //the reason for passing disabled is so that if there are orders the product cannot be deleted
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    return(
        <DropdownMenuItem 
    disabled={disabled || isPending}
    onClick={()=>{startTransition(async () =>{ // async function to toogle our actual active state
        await deleteProduct(id)
        router.refresh()
    })}}>
      Delete 
    </DropdownMenuItem>
    )
}