import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/service/person.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  person: Person;
  personUpdate: Observable<Person>;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private personService: PersonService) {
    this.person = new Person();
    this.personUpdate = new Observable<Person>();
  }

  ngOnInit(){
    this.route.paramMap.subscribe( parameterMap =>{
     const id =  Number(parameterMap.get('id'));
     this.getPersonById(id);
    });
  }

  getPersonById(id: number){
    if(id === 0){
      return this.person = {
        id:undefined,
        name:undefined,
        cpf:undefined,
      };
    }else{
      return this.personService.findById(id).subscribe(
        (x)=> console.log(`Person update ${x.cpf} e nome ${x.name}`),
      );
    }
  }

  onSubmit() {
    this.personService.save(this.person).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/persons']);
  }

}
