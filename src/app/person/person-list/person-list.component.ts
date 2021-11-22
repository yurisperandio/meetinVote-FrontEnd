import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateParseResult } from '@angular/compiler';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  @Input() persons: any;

  constructor(private personService: PersonService,private router: Router) { }

  ngOnInit(): void {
    this.personService.findAll().subscribe(data => {
      this.persons = data;
    });

  }

  public deletePerson(personId: number){
   return this.personService.deletePerson(personId).subscribe(
     ()=> console.log(`Person deleted ${personId}`)
   );
  }

  editPerson(personId: number){
    console.log(personId)
    this.router.navigate(['/edit/'+ personId]);
  }



}
