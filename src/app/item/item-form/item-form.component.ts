import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  item: Item;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private itemService: ItemService) {
    this.item = new Item();
  }

  ngOnInit(){
    this.route.paramMap.subscribe( parameterMap =>{
     const id =  Number(parameterMap.get('id'));
    });
  }


  onSubmit() {
    this.itemService.save(this.item).subscribe(result => this.gotoItemList());
  }

  gotoItemList() {
    this.router.navigate(['/items']);
  }

}
