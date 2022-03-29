import { createAction, props } from "@ngrx/store";
import { Data } from "src/app/core/models/Data";

export const SAVE = '[Data] Save';

export const saveData = createAction(
    SAVE,
    props<{ payload: Data}>()
)