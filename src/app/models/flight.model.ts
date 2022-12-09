export class Flight {
  id: number;
  departure: string;
  arrival: string;
  startTime: string;
  endTime: string;
  length: string;
  aircraft: string;
  user: string;
  fuelSpent: number;
  earning: number;
  fuelCost: number;
  profit: number;
  info: string;
  landingRate: number;
  fuelStart: number;
  fuelEnd: number;
  fuelBought: number;
  deplat: number;
    deplon: number;
    arlat: number;
    arlon: number;

  constructor(
    id: number,
    departure: string,
    arrival: string,
    startTime: string,
    endTime: string,
    length: string,
    aircraft: string,
    user: string,
    fuelSpent: number,
    earning: number,
    fuelCost: number,
    profit: number,
    info: string,
    landingRate: number,
    fuelStart: number,
    fuelEnd: number,
    fuelBought: number,
    deplat: number,
    deplon: number,
    arlat: number,
    arlon: number
  ) {
    this.id = id;
    this.departure = departure;
    this.arrival = arrival;
    this.startTime = startTime;
    this.endTime = endTime;
    this.length = length;
    this.aircraft = aircraft;
    this.user = user;
    this.fuelCost = fuelCost;
    this.fuelSpent = fuelSpent;
    this.earning = earning;
    this.profit = profit;
    this.info = info;
    this.landingRate = landingRate;
    this.fuelStart = fuelStart;
    this.fuelEnd = fuelEnd;
    this.fuelBought = fuelBought;
    this.deplat = deplat;
    this.deplon = deplon;
    this.arlat= arlat;
    this.arlon= arlon;
  }
}
