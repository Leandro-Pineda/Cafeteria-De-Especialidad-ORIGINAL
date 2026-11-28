import { mPantalla } from "../models/mPantalla.js";
import { mBateria } from "../models/mBateria.js";
export default class cReparacion {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarReparacion(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        const datos = {
            orden: this.vista.orden,
            cliente: this.vista.cliente,
            costoRepuesto: this.vista.costoRepuesto,
        };
        let reparacion;
        if (this.vista.tipoPantalla) {
            reparacion = new mPantalla({ ...datos, esOled: this.vista.esOled });
        }
        else {
            reparacion = new mBateria({ ...datos, reciclaje: this.vista.reciclaje });
        }
        this.callback(reparacion);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cReparacion.js.map