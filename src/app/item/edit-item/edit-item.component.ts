import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  itemId: any;
  itemDetails: any;
  editItemForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((data) => {
      this.itemId = data.id;
    });
    if (this.itemId !== '') {
      this.itemService
        .findById(this.itemId)
        .toPromise()
        .then((data) => {
          this.itemDetails = data;
          Object.assign(this.itemDetails, data);
          console.log(this.itemDetails)
          //Build edit form
          this.editItemForm = this.formBuilder.group({
            'subject': new FormControl(this.itemDetails.subject),
            'description': new FormControl(this.itemDetails.description)

          })
          this.dataLoaded=true;
        }).catch(err =>{
          console.log(err);
        })

    }
  }

  gotoItemList() {
    this.router.navigate(['/items']);
  }

  updateItem(){
    console.log(this.editItemForm.value)
     this.itemService.updateItem(this.itemId, this.editItemForm.value).subscribe(
      ()=> console.log(`Item update ${this.itemDetails}`)
    );
    this.itemService.updateDescription(this.itemId, this.editItemForm.value).subscribe(
      result => this.gotoItemList()
   );
    }
}
