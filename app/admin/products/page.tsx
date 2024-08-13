import Link from "next/link"
import PageHeader from "../_components/PageHeader"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import prisma from "@/app/db/db";
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";
import { formatCurrency, formatNumber } from "@/app/lib/formatter";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ActiveToggleDropdownProduct, DeleteDropdownItem } from "./_components/ProductActions";
  

export const revalidate = 500;

const baseUrl = "/admin"

export default function AdminProductsPage(){
return(
    <>
        <div className="flex justify-between items-center gap-4">
            <PageHeader>Products</PageHeader>
                <Button asChild>
                    <Link href="/admin/products/new">Add Product</Link>
                </Button>
        </div>
        <ProductTable/>
    </>
)
}

async function ProductTable(){
    const products = await prisma.product.findMany({
        select:{
            id:true,
            name:true,
            priceInCents:true,
            isAvailableForPurchase:true,
            _count:{select:{orders:true}},
        },
        orderBy:{name:"asc"},
    })

    if(products.length === 0) return  <p className="text-2xl">No products found</p>

    return(
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-0">
                    <span className="sr-only">Available for purchase</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>
                    <span className="sr-only">Available for purchase</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) =>(
                    <TableRow key={product.id}>
                        <TableCell>
                            {product.isAvailableForPurchase ? (
                            <>
                            <span className="sr-only">Available</span>
                            <CheckCircle2/>
                            </>):(
                            <>
                            <span className="sr-only">Unavailble</span>
                            <XCircle/>
                            </>)}
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{formatCurrency(product.priceInCents / 100)}</TableCell>
                        <TableCell>{formatNumber(product._count.orders)}</TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <MoreVertical/>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <a href={`${baseUrl}/products/${product.id}/download`}>Download</a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href={`admin/products/${product.id}/edit`}>Edit</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <ActiveToggleDropdownProduct id={product.id} isAvailableForPurchase={product.isAvailableForPurchase}/>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                    <DeleteDropdownItem id={product.id} disabled={product._count.orders > 0}/>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

