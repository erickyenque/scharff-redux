import { createReducer, on } from "@ngrx/store";
import { DataState } from "src/app/core/models/data.state";
import { saveData } from "./data.actions";

export const initialState: DataState = { name: '', nickname: '' };

export const dataReducer = createReducer(
    initialState,
    on(saveData, (state, action) => {
        return { ...state, ...action.payload };
    })
)