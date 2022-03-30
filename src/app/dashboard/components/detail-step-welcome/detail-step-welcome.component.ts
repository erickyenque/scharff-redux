import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Data } from 'src/app/core/models/Data';
import { AppState } from 'src/app/core/state/app.state';

@Component({
  selector: 'app-detail-step-welcome',
  templateUrl: './detail-step-welcome.component.html',
  styleUrls: ['./detail-step-welcome.component.scss']
})
export class DetailStepWelcomeComponent implements OnInit {

  data!: Data;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.store.select('data').subscribe(state => {
      this.data = state;
    })
  }

}
