export class Item {

    constructor(
        public id: number | null,
        public imgSrc: string,
        public title: string,
        public price: number,
        public category: string,
    ) {}
}