import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  cpf: string;

  @Column({ nullable: false })
  password: string;

  setId(id: number) {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
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

  getEmail(): string {
    return this.email;
  }
  getPhone(): string {
    return this.phone;
  }
  getCpf(): string {
    return this.cpf;
  }

  getPassword(): string {
    return this.password;
  }
}
