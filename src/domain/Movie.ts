import Buyable from "./Buyble";

export default class Movie implements Buyable {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: Array<string>,
        readonly time: string,
        readonly isUnique: boolean,
    ) {}
}