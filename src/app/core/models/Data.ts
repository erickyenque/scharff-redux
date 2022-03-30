import { DatosAdicionales } from "./DatosAdicionales";
import { DatosCorreo } from "./DatosCorreo";
import { DatosGenerales } from "./DatosGenerales";

export interface Data {
    datosGenerales: DatosGenerales;
    datosCorreo: DatosCorreo;
    datosAdicionales: DatosAdicionales;
}