export class Register {
  username: string;
  email: string;
  fullName: string;
  password: string;
  airlineName: string;
  airlineIcao: string;
  airlineBaseIcao: string;
  startingBalance: number;
  airlineId: number;

  constructor(
    username: string,
    email: string,
    fullName: string,
    password: string,
    airlineName: string,
    airlineIcao: string,
    airlineBaseIcao: string,
    startingBalance: number,
    airlineId: number
  ) {
      this.username = username;
      this.email = email;
      this.fullName = fullName;
      this.password = password;
      this.airlineName = airlineName;
      this.airlineIcao = airlineIcao;
      this.airlineBaseIcao = airlineBaseIcao;
      this.startingBalance = startingBalance;
      this.airlineId = airlineId;
  }
}
