export class SpecialCargo {

    id: number;
    weight: number;
    multiplication: number;
    description: string;
    departure: string;
    arrival: string;

    constructor(id: number, weight: number, multiplication: number, description: string, departure: string, arrival: string) {
        this.id = id;
        this.weight = weight;
        this.multiplication = multiplication;
        this.description = description;
        this.departure = departure;
        this.arrival = arrival;
    }
}
