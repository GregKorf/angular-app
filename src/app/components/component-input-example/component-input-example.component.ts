import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: "Gregory",
    surName: "Korfiatis",
    age: 30,
    email: "gregko@aueb.gr",
    address: "Volou 409"
  }

  person1: Person = {
    givenName: "David",
    surName: "Stewart",
    age: 40,
    email: "david@aueb.gr",
    address: "Kerkyras 49"
  }
}
