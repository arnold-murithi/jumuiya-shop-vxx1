import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "../db/db";
import { formatCurrency, formatNumber } from "../lib/formatter";


 async function getSalesData(){
const data = await prisma.order.aggregate({
    _sum:{pricePaidInCents:true},
    _count:true             //count the number of rows in our database
})
return {
    amount: (data._sum.pricePaidInCents || 0)/100,
    numberOfSales: data._count
}
}

    
async function getUserData(){
    const [userCount, orderData] = await Promise.all([
        prisma.user.count(),
    prisma.order.aggregate({
        _sum: {pricePaidInCents:true}
    })
    ])
    
    return {
        userCount,
        averageValuePerUser: userCount == 0 ? 0 : (orderData._sum.pricePaidInCents || 0) / userCount /100
    }
} 

async function getProductData(){
    const [activeProduct, inActiveProduct] = await Promise.all([
        prisma.product.count({where:{isAvailableForPurchase: true}}),
        prisma.product.count({where:{isAvailableForPurchase: false}})
    ])
    return {
        activeProduct, inActiveProduct
    }
}
export default async function AdminDashboard(){
    const {amount, numberOfSales} = await getSalesData()
    const {averageValuePerUser, userCount} = await getUserData()
    const {activeProduct, inActiveProduct} = await getProductData()
    return(
        <div data-test="dashboard-card" className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DashboardCard  title="Sales" subtitle={`${formatNumber(numberOfSales)} orders`} body={formatCurrency(amount)}/>
            <DashboardCard  title="Customer" subtitle={`${formatCurrency(averageValuePerUser)} average value`} body={formatNumber(userCount)}/>
            <DashboardCard  title="Active Products" subtitle={`${formatCurrency(inActiveProduct)} inactive products`} body={formatNumber(activeProduct)}/>
        </div>
    )
}

type DashboardCardProps = {
    title:string;
    subtitle:string;
    body:string;
}

function DashboardCard({title, subtitle, body}:DashboardCardProps){
    return(
        <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                    <h3>{body}</h3>
                </CardContent>
            </Card>
    )
}