import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {
  public form: FormGroup;
  public firstName: string;

  constructor() { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      'firstName': new FormControl(
        this.firstName,
        [
          Validators.required,
          Validators.minLength(3)
        ]
      )
    });

  }

}
