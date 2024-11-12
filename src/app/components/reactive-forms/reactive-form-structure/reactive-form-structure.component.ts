import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { EPerson } from '../../../shared/interfaces/person';

@Component({
  selector: 'app-reactive-form-structure',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatSelectModule,MatButton],
  templateUrl: './reactive-form-structure.component.html',
  styleUrl: './reactive-form-structure.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormStructureComponent {
@Output() person = new EventEmitter<EPerson>

  userForm = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    address: new FormControl('', Validators.required)
  })

  ngOnInit(){
    this.userForm.get('address')?.setValue('road2')
  }

  onSubmit(value: any){
    console.log(value);
    console.log(this.userForm.get('address')?.value);
    this.person.emit(value as EPerson);
    this.userForm.reset();

  }
}
