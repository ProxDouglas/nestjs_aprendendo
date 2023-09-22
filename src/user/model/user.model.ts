export class User {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;

  setId(id: number) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setEmail(email: string) {
    this.email = email;
  }
  setPhone(phone: string) {
    this.phone = phone;
  }
  setCpf(cpf: string) {
    this.cpf = cpf;
  }
  setPassword(password: string) {
    this.password = password;
  }
}
