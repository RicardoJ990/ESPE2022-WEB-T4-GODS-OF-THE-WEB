import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    telefono: {
        type: String,
        unique: true,
    },
    inventario_disponible: {
        type: Number
    },
    inventario_vendido: {
        type: Number
    },
    inventario_restante: {
        type:Number},
    ruc: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (ruc) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(ruc, salt);
  };
  
userSchema.statics.comparePassword = async (ruc, receivedPassword) => {
    return await bcrypt.compare(ruc, receivedPassword)
  }

  export default model("User", userSchema); 