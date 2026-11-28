
import { mBebida } from "./mBebida.js";
import { mCafeCaliente } from "./mCafeCaliente.js";

export default class mCafeteria {
  private acumMontoTotal: number = 0;
  private cntBebida: number = 0;
  private cntBebidaVendida: number = 0;
  private acumAzucar:number = 0;
  
  

  procesarBebida(b: mBebida): void {
    this.acumMontoTotal += b.montoTotal()
    this.cntBebidaVendida++
    this.acumAzucar += b.gramosAzucar()

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

  get promedioAzucar():number{
    if (this.cntBebidaVendida === 0) return 0;
    return this.acumAzucar/ this.cntBebidaVendida;
  }
}
