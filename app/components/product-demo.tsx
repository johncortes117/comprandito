"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Store, Phone, ArrowRight, Bot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ProductDemo() {
  const [searchValue, setSearchValue] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    if (!searchValue) return

    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
    }, 1500)
  }

  const handleReset = () => {
    setSearchValue("")
    setShowResults(false)
  }

  return (
    <div className="bg-white p-6 rounded-xl min-h-[600px] w-full max-w-md mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Busca un producto</h3>
          <div className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            <Bot className="h-3 w-3" />
            <span>IA activa</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Ej: Zapatillas deportivas"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={handleSearch}
            disabled={isSearching || !searchValue}
            className="bg-primary hover:bg-primary/90 group"
          >
            {isSearching ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            ) : (
              <Search className="h-4 w-4 group-hover:animate-wave" />
            )}
          </Button>
        </div>
      </div>

      {isSearching && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-secondary border-b-primary border-l-secondary animate-rotate-slow"></div>
            <div
              className="absolute inset-2 rounded-full border-4 border-t-secondary border-r-primary border-b-secondary border-l-primary animate-rotate-slow"
              style={{ animationDirection: "reverse" }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Bot className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>
          <p className="text-primary font-medium mt-4">Buscando en tiendas de Tulcán...</p>
          <p className="text-sm text-gray-500 mt-2">Analizando precios y disponibilidad</p>
        </div>
      )}

      {showResults && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Resultados para "{searchValue}"</h3>
            <Button variant="ghost" size="sm" onClick={handleReset} className="text-primary hover:text-primary/80">
              Nueva búsqueda
            </Button>
          </div>

          <Card className="border border-green-100 bg-green-50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="bg-primary mb-2">Mejor precio</Badge>
                  <h4 className="font-semibold">Zapatillas Nike Air Max</h4>
                  <p className="text-2xl font-bold text-primary">$89.99</p>
                </div>
                <div className="h-16 w-16 bg-gray-200 rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Zapatillas" width={64} height={64} />
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-gray-500" />
                  <span>Calzado Tulcán - Centro Comercial Popular</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>A 0.8 km de tu ubicación</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>099 123 4567</span>
                </div>
              </div>
              <Button className="w-full mt-4 gap-2 bg-primary hover:bg-primary/90 group">
                Ver detalles
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Zapatillas Nike Air Max</h4>
                  <p className="text-2xl font-bold">$99.99</p>
                </div>
                <div className="h-16 w-16 bg-gray-200 rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Zapatillas" width={64} height={64} />
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-gray-500" />
                  <span>Deportes Carchi - Av. Veintimilla</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>A 1.5 km de tu ubicación</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>098 765 4321</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4 gap-2 border-primary text-primary hover:bg-primary/10 group"
              >
                Ver detalles
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="outline" className="border-secondary text-primary mb-2">
                    Envío gratis
                  </Badge>
                  <h4 className="font-semibold">Zapatillas Nike Air Max</h4>
                  <p className="text-2xl font-bold">$94.99</p>
                </div>
                <div className="h-16 w-16 bg-gray-200 rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Zapatillas" width={64} height={64} />
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-gray-500" />
                  <span>Mega Deportes - Calle Bolívar</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>A 2.3 km de tu ubicación</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>097 654 3210</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4 gap-2 border-primary text-primary hover:bg-primary/10 group"
              >
                Ver detalles
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {!isSearching && !showResults && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="relative w-24 h-24 mb-4">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-light"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-12 w-12 text-primary" />
            </div>
          </div>
          <p className="text-primary font-medium mb-2">Busca cualquier producto en Tulcán</p>
          <p className="text-sm text-gray-500">
            Nuestra IA te mostrará dónde comprarlo al mejor precio en tiendas locales
          </p>
        </div>
      )}
    </div>
  )
}

