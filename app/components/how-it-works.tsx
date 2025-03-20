import { Search, MapPin, ShoppingBag } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center group">
        <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
          <Search className="h-10 w-10" />
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-secondary -z-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-light">
            1
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">Busca tu producto</h3>
        <p className="text-gray-600">Escribe el nombre o descripción del producto que estás buscando en Tulcán.</p>
      </div>

      <div className="text-center group">
        <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
          <MapPin className="h-10 w-10" />
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-secondary -z-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div
            className="bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-light"
            style={{ animationDelay: "0.5s" }}
          >
            2
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">Recibe recomendaciones</h3>
        <p className="text-gray-600">
          Nuestra IA te mostrará las mejores tiendas de Tulcán donde comprar, con precios y ubicaciones.
        </p>
      </div>

      <div className="text-center group">
        <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
          <ShoppingBag className="h-10 w-10" />
        </div>
        <div className="relative">
          <div
            className="bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-light"
            style={{ animationDelay: "1s" }}
          >
            3
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">Compra inteligentemente</h3>
        <p className="text-gray-600">
          Visita la tienda local en Tulcán o contacta directamente para adquirir tu producto al mejor precio.
        </p>
      </div>
    </div>
  )
}

