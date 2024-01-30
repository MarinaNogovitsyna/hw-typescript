import Buyable from "./Buyble";
export default class Phone implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly isUnique: boolean,
        readonly ram: number,
        ) {}
}