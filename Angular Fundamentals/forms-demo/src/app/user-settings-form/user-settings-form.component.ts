import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { IUserSettings } from '../data/user-settings';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: null,
    emailOffers: null,
    insterfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: IUserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;
  singleModel = 'On';
  startDate: Date;

  constructor(private dataService: DataService) { }

  public ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
  }

  public onSubmit(form: NgForm): void {
    console.log('in onSubmit ', form.value);

    // if (form.valid) {
    //   this.dataService.postUserSettingsForm(this.userSettings)
    //     .subscribe(
    //       result => console.log('success: ', result),
    //       error => this.onHttpError(error)
    //     );
    // } else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Please fix the above errors';
    // }
  }

  public onBlur(field: NgModel) {
    console.log('in onBlur');
  }

  private onHttpError(error: any) {
    console.log('error: ', error);
    this.postError = true;
    this.postErrorMessage = error.error.errorMessage;
  }
}
