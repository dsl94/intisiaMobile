export class Airline {
    id: number;
    name: string;
    icao: string;
    base: string;

    constructor(id: number,name: string, icao: string, base: string) {
        this.id = id;
        this.name = name;
        this.icao = icao;
        this.base = base;
    }
}
