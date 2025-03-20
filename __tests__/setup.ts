import mongoose from 'mongoose';
import { config } from 'dotenv';

// Cargar variables de entorno
config();

const MONGODB_URI = process.env.MONGODB_URI!;

async function setupDatabase() {
  try {
    console.log('Conectando a MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Conexión exitosa a MongoDB');

    // Verificar la conexión
    const connection = mongoose.connection;
    console.log(`Base de datos actual: ${connection.db?.databaseName || 'Sin nombre'}`);
    
    if (connection.db) {
      // Listar todas las colecciones
      const collections = await connection.db.listCollections().toArray();
      console.log('Colecciones existentes:', collections.map(col => col.name));

      // Verificar si la colección de usuarios existe
      const hasUsersCollection = collections.some(col => col.name === 'users');
      if (!hasUsersCollection) {
        console.log('La colección users no existe. Se creará automáticamente cuando se registre el primer usuario.');
      } else {
        console.log('La colección users ya existe.');
      }
    }

    console.log('Configuración de la base de datos completada');
  } catch (error) {
    console.error('Error al configurar la base de datos:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Desconectado de MongoDB');
  }
}

setupDatabase();