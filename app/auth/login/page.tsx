"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    if (searchParams?.get("registered")) {
      setSuccess("Registro exitoso. Por favor inicia sesión.")
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al iniciar sesión")
      }

      // Guardar el token en localStorage
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))

      // Redireccionar a la página principal
      router.push("/")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold">Comprandito</h2>
          </div>
          <p className="text-gray-500">Inicia sesión en tu cuenta</p>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 text-red-500 text-sm">
                {error}
              </div>
            )}
            {success && (
              <Alert className="bg-green-50 text-green-600 border-green-200">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
            <div className="text-center text-sm">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/auth/register"
                className="text-primary hover:underline"
              >
                Regístrate
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}