
import {Schema, model} from "mongoose"

const PedidosSchema = new Schema(
{
    Description: String,
    Address: String,
    DateOrder: Date,
}, {
    timestamps: true,
    versionKey: false
})

export default model ('Pedido', PedidosSchema);
