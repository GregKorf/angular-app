import { Component, EventEmitter, Output } from '@angular/core';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Output() personClicked =new EventEmitter<EPerson>();
  manyPerson = ManyPerson;

  sortOrder: EPerson = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    address: 'none'
  }

  sortData(sortKey: keyof EPerson): void{
    if(this.sortOrder[sortKey] === 'asc') {
      console.log(this.sortOrder[sortKey]);
      console.log(sortKey);
      this.sortOrder[sortKey] = 'desc'
      this.manyPerson = sortBy(this.manyPerson, sortKey).reverse()
      console.log(this.sortOrder[sortKey]);
    } else {
      console.log(this.sortOrder[sortKey]);
      console.log(sortKey);
     this.sortOrder[sortKey] = 'asc';
     this.manyPerson = sortBy(this.manyPerson, sortKey);
     console.log(this.sortOrder[sortKey]);
      }
      

      for(let key in this.sortOrder){
        if(key!=sortKey){
          this.sortOrder[sortKey]
        }
      }
    }

    sortSign(sortKey: keyof EPerson) {
      if(this.sortOrder[sortKey] === 'asc')
        return '↑'
      else if(this.sortOrder[sortKey] === 'desc')
        return '↓'
      else
        return ''
    }

    onPersonClick(person: EPerson){
      console.log(person);
      this.personClicked.emit(person)
    }
}
