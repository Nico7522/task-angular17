import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { displayError } from '../../../utils/displayError';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  registerForm: FormGroup;
  displayErrorInput = displayError;
  constructor(private _formBuilder: FormBuilder) {
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.mailRegex),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordRegex)],
      ],
    });
  }

  handleSubmit() {
    if (this.registerForm.valid) {
      console.log('valide');
    }
  }
}
