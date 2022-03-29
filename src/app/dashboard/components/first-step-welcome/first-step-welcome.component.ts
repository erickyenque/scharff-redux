import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, Action } from '@ngrx/store';
import { Data } from 'src/app/core/models/Data';
import { AppState } from 'src/app/core/state/app.state';
import { saveData } from '../../store/data.actions';

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
    this.store.select('data').subscribe(state => {
      this.validateForm.controls['name'].setValue(state.name);
      this.validateForm.controls['nickname'].setValue(state.nickname);
    })
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      nickname: [null],
      required: [false]
    });
    this.loadData();
  }

  loadData() {
    this.store.select('data').forEach(state => {
      console.log('second component');
      this.validateForm.controls['name'].setValue(state.name);
      this.validateForm.controls['nickname'].setValue(state.nickname);
    })
  }


  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      let data: Data = {
        name: this.validateForm.value.name,
        nickname: this.validateForm.value.nickname
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

  saveStore(data: Data) {
    this.store.dispatch(saveData({ payload: data }));
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateForm.get('nickname')!.clearValidators();
      this.validateForm.get('nickname')!.markAsPristine();
    } else {
      this.validateForm.get('nickname')!.setValidators(Validators.required);
      this.validateForm.get('nickname')!.markAsDirty();
    }
    this.validateForm.get('nickname')!.updateValueAndValidity();
  }
}
