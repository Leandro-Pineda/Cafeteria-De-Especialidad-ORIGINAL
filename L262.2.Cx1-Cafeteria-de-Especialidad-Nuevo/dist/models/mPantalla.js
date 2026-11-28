// CLASE MENOR DERIVADA — mPantalla.ts
// Cambio de Pantalla: monto base + $15 mano de obra.
// Si es OLED original: aplica 20% de recargo sobre el subtotal acumulado.
import { mReparacion } from "./mReparacion.js";
export class mPantalla extends mReparacion {
    _esOled;
    constructor({ orden, cliente, costoRepuesto, esOled, }) {
        super({ orden, cliente, costoRepuesto });
        this._esOled = esOled;
    }
    get esOled() {
        return this._esOled;
    }
    set esOled(valor) {
        this._esOled = valor;
    }
    monto() {
        // Subtotal: monto base + $15 de mano de obra especializada
        const subtotal = this.montoBase + 15;
        // Si es OLED: recargo del 20% sobre el subtotal
        if (this.esOled) {
            return subtotal * 1.20;
        }
        return subtotal;
    }
}
//# sourceMappingURL=mPantalla.js.map