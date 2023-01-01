export interface LoginModel {
  token: string;
  location: string;
  expiration: string;
  username: string;
  airlineIcao: string;
  airlineName: string;
  numberOfBookings: number;
  roles: string[];
}
