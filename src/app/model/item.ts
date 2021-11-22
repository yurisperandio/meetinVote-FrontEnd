export class Item {
  id?: number;
  subject?: string;
  description?: string;

  constructor(id?:number, subject?:string, description?:string){
    this.id = id;
    this.subject = subject;
    this.description = description;
  }
}
