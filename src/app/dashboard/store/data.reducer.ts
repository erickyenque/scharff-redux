import { createReducer, on } from "@ngrx/store";
import { DataState } from "src/app/core/models/data.state";
import { saveDataAditional, saveDataEmail, saveDataGeneral } from "./data.actions";

export const initialState: DataState = { 
    datosGenerales: { name: '', lastname: ''},
    datosCorreo: { user: '', email: '' },
    datosAdicionales: { address: '', city: '' }
};

export const dataReducer = createReducer(
    initialState,
    on(saveDataGeneral, (state, action) => {
        return { ...state, datosGenerales: action.payload };
    }),
    on(saveDataEmail, (state, action) => {
        return { ...state, datosCorreo: action.payload };
    }),
    on(saveDataAditional, (state, action) => {
        return { ...state, datosAdicionales: action.payload };
    })
)