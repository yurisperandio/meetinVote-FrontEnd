import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss'],
})
export class EditPersonComponent implements OnInit {
  personId: any;
  personDetails: any;
  editPersonForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private personService: PersonService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((data) => {
      this.personId = data.id;
    });
    if (this.personId !== '') {
      this.personService
        .findById(this.personId)
        .toPromise()
        .then((data) => {
          this.personDetails = data;
          Object.assign(this.personDetails, data);
          console.log(this.personDetails)
          //Build edit form
          this.editPersonForm = this.formBuilder.group({
            'name': new FormControl(this.personDetails.name),
            'cpf': new FormControl(this.personDetails.cpf)

          })
          this.dataLoaded=true;
        }).catch(err =>{
          console.log(err);
        })

    }
  }

  gotoUserList() {
    this.router.navigate(['/persons']);
  }

  updatePerson(){
    console.log(this.editPersonForm.value)
    //this.personService.updatePerson(this.personId, this.editPersonForm.value )
     this.personService.updatePerson(this.personId, this.editPersonForm.value).subscribe(
      ()=> console.log(`Person update ${this.personDetails}`)
    );
    this.personService.updateCpf(this.personId, this.editPersonForm.value).subscribe(
      result => this.gotoUserList()
   );
  }


}
