import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';
import { PersonService } from 'src/app/service/person.service';
import { VoteService } from 'src/app/service/vote.service';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.scss']
})
export class VoteListComponent implements OnInit {

  @Input() votes: any;
  @Input() person: any;
  @Input() item: any;
  constructor(private voteService: VoteService,private router: Router, private personService : PersonService, private itemService : ItemService) { }

  ngOnInit(): void {
    this.voteService.findAll().subscribe(data => {
      this.votes = data;
    });

  }

  findPerson(idPerson: number){
    return this.personService.findById(idPerson).subscribe(
      data => {
        this.person = data;
      }

    );
  }

  findItem(idItem: number){
    return this.itemService.findById(idItem).subscribe(
    data => {
      this.item = data;
    }
      );
  }

}
