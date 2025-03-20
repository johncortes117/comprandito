import { config } from 'dotenv';
import path from 'path';

// Configurar dotenv para cargar el archivo .env desde el directorio raíz
config({ path: path.resolve(__dirname, '../.env') });

import dbConnect from '../lib/mongodb';
import mongoose from 'mongoose';
import User from '../models/User';

async function testDatabase() {
    try {
        // Test 1: Conexión a la base de datos
        console.log('🔄 Probando conexión a MongoDB...');
        await dbConnect();
        
        if (mongoose.connection.readyState === 1) {
            console.log('✅ Conexión a MongoDB establecida correctamente');
            
            const db = mongoose.connection.db;
            if (db) {
                const collections = await db.listCollections().toArray();
                console.log('📁 Colecciones en la base de datos:', collections.map(c => c.name));
            }

            // Test 2: Crear un usuario de prueba
            console.log('\n🔄 Probando creación de usuario...');
            const testUser = new User({
                name: 'Usuario de Prueba',
                email: `test_${Date.now()}@test.com`,
                password: 'password123'
            });
            await testUser.save();
            console.log('✅ Usuario creado correctamente:', testUser._id);

            // Test 3: Buscar el usuario creado
            console.log('\n🔄 Probando búsqueda de usuario...');
            const foundUser = await User.findById(testUser._id);
            if (foundUser) {
                console.log('✅ Usuario encontrado correctamente');
            }

            // Test 4: Actualizar el usuario
            console.log('\n🔄 Probando actualización de usuario...');
            const updateResult = await User.findByIdAndUpdate(
                testUser._id,
                { name: 'Usuario Actualizado' },
                { new: true }
            );
            if (updateResult) {
                console.log('✅ Usuario actualizado correctamente');
            }

            // Test 5: Eliminar el usuario de prueba
            console.log('\n🔄 Limpiando datos de prueba...');
            await User.findByIdAndDelete(testUser._id);
            console.log('✅ Usuario de prueba eliminado correctamente');

            console.log('\n✅ Todas las pruebas completadas exitosamente');
        } else {
            console.log('❌ No hay conexión activa a MongoDB');
        }
        
        process.exit(0);
    } catch (error) {
        console.error('❌ Error durante las pruebas:', error);
        process.exit(1);
    }
}

testDatabase();