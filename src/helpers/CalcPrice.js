export function calcSubPrice(item) {
    console.log(item)
    return item.count * item.product.price
}
export function calcTotalPrice(product) {
    let totalPrice = 0
    product.forEach(item => {
        totalPrice += item.subPrice
    })
    return totalPrice
}