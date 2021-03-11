import { IonDatetime } from "@ionic/angular";

export interface Pedido {
    IDVenta             : string;
    Fecha               : IonDatetime;
    HoraEntrega         : string;
    NumeroDocumento     : string;
    Cliente             : string;
    Telefono            : string;
    DireccionEnvio      : string;
    Total               : DoubleRange;
    Descripcion         : string;
    Repartidor          : string;
    Estado              : string;
    IDRepartidor        : string;
}