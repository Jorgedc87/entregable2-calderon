export class Passenger {
  constructor(name, surname, dni, email, phone, isReturn = false) {
    this.name = name;
    this.surname = surname;
    this.dni = dni;
    this.email = email;
    this.phone = phone;
    this.isReturn = isReturn;
  }
}