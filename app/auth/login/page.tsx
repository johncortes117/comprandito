"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se implementará la lógica de inicio de sesión cuando tengamos la base de datos
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-6">
            <Link href="/" className="flex items-center gap-2">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Comprandito</span>
            </Link>
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Iniciar Sesión
          </h2>
          <p className="text-center text-sm text-gray-600 mt-2">
            ¿No tienes una cuenta?{" "}
            <Link href="/auth/register" className="text-primary hover:text-primary/90">
              Regístrate aquí
            </Link>
          </p>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Correo electrónico
              </label>
              <Input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                  Recordarme
                </label>
              </div>
              <Link href="/auth/forgot-password" className="text-sm text-primary hover:text-primary/90">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
              Iniciar Sesión
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}