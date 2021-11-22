export class Person {
  id?: number;
  name?: string;
  cpf?: string;

  constructor(id?:number, name?:string, cpf?:string){
    this.id = id;
    this.name = name;
    this.cpf = cpf;
  }
}
