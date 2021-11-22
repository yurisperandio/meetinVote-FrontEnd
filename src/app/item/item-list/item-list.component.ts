import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() items: any;

  constructor(private itemService: ItemService,private router: Router) { }

  ngOnInit(): void {
    this.itemService.findAll().subscribe(data => {
      this.items = data;
    });

  }

  public deleteItem(itemId: number){
   return this.itemService.deleteItem(itemId).subscribe(
     ()=> console.log(`Item deleted ${itemId}`)
   );
  }

  editItem(itemId: number){
    console.log(itemId)
    this.router.navigate(['/editItem/'+ itemId]);
  }

}
