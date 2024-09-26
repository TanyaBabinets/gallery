export class Image {
    name: string;
    author: string;
    year: number;
    descr: string;
    location: string;
    img: string;

    constructor(name: string, author: string, year: number, location: string, descr: string, img: string)
    {
        this.name = name;
        this.author = author;
        this.year = year;
        this.location = location;
        this.descr = descr;
        this.img = img;
    }
}