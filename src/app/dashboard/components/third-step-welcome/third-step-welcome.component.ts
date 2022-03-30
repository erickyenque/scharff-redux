import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DatosAdicionales } from 'src/app/core/models/DatosAdicionales';
import { AppState } from 'src/app/core/state/app.state';
import { saveDataAditional } from '../../store/data.actions';

@Component({
  selector: 'app-third-step-welcome',
  templateUrl: './third-step-welcome.component.html',
  styleUrls: ['./third-step-welcome.component.scss']
})
export class ThirdStepWelcomeComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      address: [null, [Validators.required]],
      city: [null],
      required: [false]
    });
    this.loadData();
  }

  loadData() {
    this.store.select('data').subscribe(state => {
      console.log("Third component", state);
      this.validateForm.controls['address'].setValue(state.datosAdicionales.address);
      this.validateForm.controls['city'].setValue(state.datosAdicionales.city);
    })
  }


  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      let data: DatosAdicionales = {
        address: this.validateForm.value.address,
        city: this.validateForm.value.city
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

  saveStore(datosAdicionales: DatosAdicionales) {
    this.store.dispatch(saveDataAditional({ payload: datosAdicionales }));
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateForm.get('city')!.clearValidators();
      this.validateForm.get('city')!.markAsPristine();
    } else {
      this.validateForm.get('city')!.setValidators(Validators.required);
      this.validateForm.get('city')!.markAsDirty();
    }
    this.validateForm.get('city')!.updateValueAndValidity();
  }
}
