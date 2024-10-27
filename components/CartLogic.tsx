// import { Product } from "@prisma/client";

// export function groupByIdentity(products:Product[]):Record<string, Product[]>{
// return products.reduce((accumulator, currentProduct) =>{
//     const identity = currentProduct.id;
//     if(!accumulator[identity] ){
//         accumulator[identity] = []
//     }
//     accumulator[identity].push(currentProduct);
//     return accumulator;
// }, {})
// }