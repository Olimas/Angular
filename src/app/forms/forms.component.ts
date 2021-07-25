import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  // @ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'yes';
  defaultCountry = 'ua';

  formData = {};
  isSubmitted = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  // first variant get form
  // submitForm(form: NgForm) {
  //   console.log('submitted', form);
  // }

  // second variant get form
  // @ViewChild('form') form: ngForm;
  // submitForm() {
  //   console.log('submitted', this.form);
  // }

  addRandomEmail() {
    const randomEmail = 'random-email@.com';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randomEmail
    //   },
    //   country: '',
    //   answer: ''
    // })

    // this.form.form.patchValue({
    //   user: {email: randomEmail}
    // });
  }

  submitForm(form: NgForm) {
    // this.isSubmitted = true;
    // this.formData = this.form.value;
    // this.form.reset();
    // console.log('submitted', this.form);
  }


}
