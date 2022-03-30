import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DatosGenerales } from 'src/app/core/models/DatosGenerales';
import { AppState } from 'src/app/core/state/app.state';
import { saveDataGeneral } from '../../store/data.actions';

@Component({
  selector: 'app-first-step-welcome',
  templateUrl: './first-step-welcome.component.html',
  styleUrls: ['./first-step-welcome.component.scss']
})
export class FirstStepWelcomeComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      lastname: [null],
      required: [false]
    });
    this.loadData();
  }

  loadData() {
    this.store.select('data').subscribe(state => {
      console.log('First component', state);
      this.validateForm.controls['name'].setValue(state.datosGenerales.name);
      this.validateForm.controls['lastname'].setValue(state.datosGenerales.lastname);
    })
  }


  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      let data: DatosGenerales = {
        name: this.validateForm.value.name,
        lastname: this.validateForm.value.lastname
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

  saveStore(datosGenerales: DatosGenerales) {
    this.store.dispatch(saveDataGeneral({ payload: datosGenerales }));
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateForm.get('lastname')!.clearValidators();
      this.validateForm.get('lastname')!.markAsPristine();
    } else {
      this.validateForm.get('lastname')!.setValidators(Validators.required);
      this.validateForm.get('lastname')!.markAsDirty();
    }
    this.validateForm.get('lastname')!.updateValueAndValidity();
  }
}
