// CLASE MENOR DERIVADA — mBateria.ts
// Cambio de Batería y Puerto: monto base + $8 instalación.
// Si entrega batería para reciclaje: descuento fijo de $3.
import { mReparacion } from "./mReparacion.js";
export class mBateria extends mReparacion {
    _reciclaje;
    constructor({ orden, cliente, costoRepuesto, reciclaje, }) {
        super({ orden, cliente, costoRepuesto });
        this._reciclaje = reciclaje;
    }
    get reciclaje() {
        return this._reciclaje;
    }
    set reciclaje(valor) {
        this._reciclaje = valor;
    }
    monto() {
        // Subtotal: monto base + $8 de instalación
        const subtotal = this.montoBase + 8;
        // Si entrega batería para reciclaje: descuento fijo de $3
        if (this.reciclaje) {
            return subtotal - 3;
        }
        return subtotal;
    }
}
//# sourceMappingURL=mBateria.js.map