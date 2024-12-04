import { Product, User } from "@prisma/client";
// process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')('sk_test_51QPSIYAhbvSUQO3mTRYhUYeWOvDh223eoGnvxZS4a2XZ1Z8IjkMGlEA7EaIQrllCGBXOxirHxH2AryXWs8JyGL70002XKLsY2N')

export type Metadata = {
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    userId: string;
}
export type GroupedBasketItems = Product & {
    // product: Product
    quantity: number;
}

export async function createCheckoutSession(items: GroupedBasketItems[], user: Metadata) {
    try {
        const itemWithoutPrice = items.filter((item) => !item.priceInCents)

        if (itemWithoutPrice.length > 0) {
            throw new Error("some items do not have price")
        }
        const customers = await stripe.customers.list({
            email: user.customerEmail,
            limit: 1
        })

        let customerId: string | undefined;

        if (customers.data.length > 0) {
            customerId = customers.data[0].id
        }

        const session = await stripe.checkout.sessions.create({
            customer: customerId,
            customer_creation: customerId ? undefined : "always",
            customer_email: !customerId ? user.customerEmail : undefined,
            // metadata,
            mode: "payment",
            allow_promotion_codes: true,
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment?status=success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment?status=failed`,
            line_items: items.map((item) => ({
                price_data: {
                    currency: "gbp",
                    unit_amount: Math.round(item.priceInCents * 100),
                    product_data: {
                        name: item.name || "unnamed product",
                        description: `product id: ${item.id}`,
                        metadata: {
                            id: item.id
                        },
                        image: [item.imagePath]
                    }
                },
                quantity: item.quantity
            }))
        })
        return session.url;
    } catch (error) {
        console.error("Checkout problem", error)
        throw error
    }
}