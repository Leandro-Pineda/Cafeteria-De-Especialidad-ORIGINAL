
import { mBebida } from "./mBebida.js";
import { mCafeCaliente } from "./mCafeCaliente.js";

export default class mCafeteria {
  private acumMontoTotal: number = 0;
  private cntBebida: number = 0;
  
  

  procesarBebida(b: mBebida): void {
    this.acumMontoTotal += b.montoTotal()

    if (b.montoTotal()> 4) {
      this.cntBebida++;
    }
  }

  get montoTotalVenta(): number {
    return this.acumMontoTotal;
  }

  get cantidadBebidaPrecioMayor4(): number {
    return this.cntBebida;
  }


}
