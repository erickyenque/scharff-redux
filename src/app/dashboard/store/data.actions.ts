import { createAction, props } from "@ngrx/store";
import { DatosAdicionales } from "src/app/core/models/DatosAdicionales";
import { DatosCorreo } from "src/app/core/models/DatosCorreo";
import { DatosGenerales } from "src/app/core/models/DatosGenerales";

export const SAVE_DATA_GENERAL = '[Data] Save Data General';
export const SAVE_DATA_EMAIL = '[Data] Save Data Email';
export const SAVE_DATA_ADITIONAL = '[Data] Save Data Aditional';

export const saveDataGeneral = createAction(
    SAVE_DATA_GENERAL,
    props<{ payload: DatosGenerales}>()
)

export const saveDataEmail = createAction(
    SAVE_DATA_EMAIL,
    props<{ payload: DatosCorreo}>()
)

export const saveDataAditional = createAction(
    SAVE_DATA_ADITIONAL,
    props<{ payload: DatosAdicionales}>()
)