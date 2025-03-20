import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor ingrese su nombre'],
  },
  email: {
    type: String,
    required: [true, 'Por favor ingrese su correo electrónico'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Por favor ingrese un correo electrónico válido'],
  },
  password: {
    type: String,
    required: [true, 'Por favor ingrese una contraseña'],
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model('User', userSchema);