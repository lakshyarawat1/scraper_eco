export type PriceHistoryItem = {
    price: number;
}

export type User = {
    email : string, 
}

export type Product = {
    _id?: string,
    url: string,
    currency: string,
    image: string,
    title: string,
    currentPrice: number,
    originalPrice: number,
    priceHistory: PriceHistoryItem[] | [];
    highestPrice: number,
    lowestPrice: number,
    description : string,
    discountRate: number,
    category: string,
    reviewsCount: number,
    stars: number,
    isOutOfStock: boolean,
    users? :User[],
}

export type NotificationType = 
    | "WELCOME"
    | "CHANGE_OF_STOCK"
    | "LOWEST_PRICE"
    | "THRESHOLD_MET"

export type EmailContent = {
    subject: string,
    body : string,
}

export type EmailProductInfo = {
    title: string,
    url : string,
}