// CLASE MAYOR — mServicioTecnico.ts
// Acumula y procesa cualquier reparación de forma polimórfica (sin arrays).
// Solo importa mReparacion (clase base) y mPantalla (para instanceof).
import { mPantalla } from "./mPantalla.js";
export default class mServicioTecnico {
    acIngresoTotal = 0;
    acIngresoPantalla = 0;
    auxOrdenMenor = "";
    menorMonto = Infinity;
    procesar(r) {
        const montoOrden = r.monto();
        // Acumular ingreso total
        this.acIngresoTotal += montoOrden;
        // Acumular ingresos de pantalla usando instanceof
        // instanceof permite identificar si r es una instancia de mPantalla
        if (r instanceof mPantalla) {
            this.acIngresoPantalla += montoOrden;
        }
        // Registrar orden con menor monto
        if (montoOrden < this.menorMonto) {
            this.menorMonto = montoOrden;
            this.auxOrdenMenor = r.orden;
        }
    }
    get ingresoTotal() {
        return this.acIngresoTotal;
    }
    get ordenMenorMonto() {
        return this.auxOrdenMenor;
    }
    // Porcentaje de ingresos provenientes de cambios de pantalla
    porcentajePantalla() {
        if (this.acIngresoTotal === 0)
            return 0;
        return (this.acIngresoPantalla / this.acIngresoTotal) * 100;
    }
}
//# sourceMappingURL=mServicioTecnico.js.map