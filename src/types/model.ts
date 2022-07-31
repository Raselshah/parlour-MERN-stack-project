export default interface Products{
    name: string,
    description: string,
    price:number,
    photo:any,
    userId:number
}

export default interface GiftModel{
    name: string,
    regularPrice: number,
    currentPrice: number,
    photo:any,
    userId:number
}

export default interface DoctorsModel{
    name: string,
    experience: string,
    email: string,
    userId:number,
    photo:any
}