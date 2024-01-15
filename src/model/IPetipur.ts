import ICategory from "./ICategory";

export default interface IPetipur {
    name: string,
    price: number,
    category: ICategory,
    imageUrl:string,
    amount:number

}