import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DatosCorreo } from 'src/app/core/models/DatosCorreo';
import { AppState } from 'src/app/core/state/app.state';
import { saveDataEmail } from '../../store/data.actions';

@Component({
  selector: 'app-second-step-welcome',
  templateUrl: './second-step-welcome.component.html',
  styleUrls: ['./second-step-welcome.component.scss']
})
export class SecondStepWelcomeComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      user: [null, [Validators.required]],
      email: [null],
      required: [false]
    });
    this.loadData();
  }

  loadData() {
    this.store.select('data').subscribe(state => {
      console.log("Second component", state);
      this.validateForm.controls['user'].setValue(state.datosCorreo.user);
      this.validateForm.controls['email'].setValue(state.datosCorreo.email);
    })
  }


  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      let data: DatosCorreo = {
        user: this.validateForm.value.user,
        email: this.validateForm.value.email
      }
      this.saveStore(data);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  saveStore(datosCorreo: DatosCorreo) {
    this.store.dispatch(saveDataEmail({ payload: datosCorreo }));
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateForm.get('email')!.clearValidators();
      this.validateForm.get('email')!.markAsPristine();
    } else {
      this.validateForm.get('email')!.setValidators(Validators.required);
      this.validateForm.get('email')!.markAsDirty();
    }
    this.validateForm.get('email')!.updateValueAndValidity();
  }

}
