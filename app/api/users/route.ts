import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import jwt, { JwtPayload } from 'jsonwebtoken';

export async function GET(request: Request) {
    try {
        const authHeader = request.headers.get('authorization');
        const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

        if (!token) {
            return NextResponse.json(
                { error: 'Token de autorización no proporcionado o inválido' },
                { status: 401 }
            );
        }

        const JWT_SECRET = process.env.JWT_SECRET;

        if (!JWT_SECRET) {
            console.error('JWT_SECRET no está configurado');
            return NextResponse.json(
                { error: 'Error de configuración del servidor' },
                { status: 500 }
            );
        }

        try {
            // Verificar y decodificar el token
            const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
            
            if (!decoded.userId) {
                return NextResponse.json(
                    { error: 'Token inválido' },
                    { status: 401 }
                );
            }

            await dbConnect();
            
            // Solo obtener el usuario autenticado
            const user = await User.findById(decoded.userId).select('-password');
            
            if (!user) {
                return NextResponse.json(
                    { error: 'Usuario no encontrado' },
                    { status: 404 }
                );
            }

            return NextResponse.json({
                success: true,
                data: user
            }, { status: 200 });
            
        } catch (jwtError) {
            console.error('Error al verificar token:', jwtError);
            return NextResponse.json(
                { error: 'Token inválido o expirado' },
                { status: 401 }
            );
        }
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}