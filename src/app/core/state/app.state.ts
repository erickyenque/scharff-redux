import { DataState } from "../models/data.state";
import { ActionReducerMap } from '@ngrx/store';
import { dataReducer } from "src/app/dashboard/store/data.reducer";

export interface AppState {
    data: DataState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    data: dataReducer
}