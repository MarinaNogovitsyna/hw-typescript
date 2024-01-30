import Buyable from "./Buyble";

export default class MusicAlbum implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly isUnique: boolean,
    ) { }
}