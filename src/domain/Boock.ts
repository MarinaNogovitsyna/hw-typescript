import Buyable from "./Buyble";
export default class Boock implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly autor: string,
        readonly price: number,
        readonly pages: number,
        readonly isUnique: boolean,
        ) {}
}