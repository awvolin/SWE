export class User {
  name: string;
  email: string;
  password: string;
  addressLine1: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  role: string;
  managerId: string;
  id: string;
  constructor(user: any) {
    this.name = user.name || "";
    this.email = user.email || "";
    this.password = user.password || "";
    this.addressLine1 = user.addressLine1 || "";
    this.city = user.city || "";
    this.state = user.state || "";
    this.country = user.country || "";
    this.zipCode = user.zipCode || "";
    this.role = user.role || "";
    this.managerId = user.managerId || "";
    this.id = user.id || "";
  }
}
