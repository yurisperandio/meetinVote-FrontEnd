export class Vote {
  id?: number;
  idPerson?: number;
  idItem?: number;
  flVote?: String;

  constructor(id?:number, idPerson?:number, idItem?:number, flVote?: string){
    this.id = id;
    this.idPerson = idPerson;
    this.idItem = idItem;
    this.flVote = flVote;
  }
}
