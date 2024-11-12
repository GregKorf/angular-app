import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';
import { ReactiveFormStructureComponent } from './reactive-form-structure/reactive-form-structure.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [PersonTableComponent,ReactiveFormStructureComponent,SimpleDatatableComponent],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  
  currentPerson: EPerson | undefined;


  onPerson(person: EPerson){
    console.log("Parent>>>>" , person)
    this.currentPerson = person;
    ManyPerson.push(person);
  }
}
