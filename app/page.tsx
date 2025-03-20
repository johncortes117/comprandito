import { Button } from "@/components/ui/button"
import { Search, ShoppingBag, MapPin, Tag, Store, Phone, Sparkles, Bot } from "lucide-react"
import Link from "next/link"
import ProductDemo from "./components/product-demo"
import FeatureCard from "./components/feature-card"
import TestimonialCard from "./components/testimonial-card"
import HowItWorks from "./components/how-it-works"
import AiAnimation from "./components/ai-animation"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Comprandito</span>
        </div>
        <div className="hidden md:flex gap-6">
          <Link href="#caracteristicas" className="hover:text-primary transition-colors">
            Características
          </Link>
          <Link href="#como-funciona" className="hover:text-primary transition-colors">
            Cómo Funciona
          </Link>
          <Link href="#testimonios" className="hover:text-primary transition-colors">
            Testimonios
          </Link>
        </div>
        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Descargar App</Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 animate-pulse-light">
            <Sparkles className="h-4 w-4" />
            <span>Impulsado por Inteligencia Artificial</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Encuentra productos en <span className="text-primary">Tulcán</span> al mejor precio
          </h1>
          <p className="text-lg text-gray-600">
            Comprandito usa inteligencia artificial para recomendarte las mejores tiendas locales en Tulcán donde
            comprar lo que necesitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 group">
              <Search className="h-5 w-5 group-hover:animate-wave" />
              Probar Ahora
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-primary hover:bg-secondary/10">
              Ver Demo
            </Button>
          </div>
          <div className="pt-4 flex items-center gap-2 text-sm text-gray-500">
            <span className="bg-secondary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">LOCAL</span>
            Más de 200 tiendas conectadas en Tulcán
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-gray-200 animate-float">
            <ProductDemo />
          </div>
          <div className="absolute -z-10 top-10 right-10 w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl blur-3xl"></div>
          <div className="absolute -z-20 -bottom-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse-light"></div>
        </div>
      </section>

      {/* AI Feature Section */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 relative">
              <AiAnimation />
            </div>
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-primary text-sm font-medium">
                <Bot className="h-4 w-4" />
                <span>Tecnología Avanzada</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Inteligencia Artificial adaptada a Tulcán</h2>
              <p className="text-lg text-gray-600">
                Nuestra IA está entrenada con datos locales para entender las particularidades del comercio en Tulcán y
                la provincia de Carchi, ofreciéndote recomendaciones precisas y relevantes.
              </p>
              <ul className="space-y-3">
                {[
                  "Conoce los precios locales y temporadas de ofertas",
                  "Identifica productos típicos de la región",
                  "Entiende la ubicación de los comercios en Tulcán",
                  "Aprende continuamente de las búsquedas de usuarios locales",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Descubrir Más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Características Únicas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Todo lo que necesitas para comprar inteligentemente en Tulcán
            </h2>
            <p className="text-gray-600">
              Comprandito utiliza inteligencia artificial avanzada para ofrecerte las mejores recomendaciones de compra
              en tu ciudad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Tag className="h-6 w-6" />}
              title="Comparación de Precios Locales"
              description="Compara precios en tiempo real entre diferentes tiendas de Tulcán para encontrar la mejor oferta."
              delay={0}
            />
            <FeatureCard
              icon={<MapPin className="h-6 w-6" />}
              title="Ubicación en Tulcán"
              description="Encuentra tiendas cercanas a tu ubicación en Tulcán para ahorrar tiempo en desplazamientos."
              delay={100}
            />
            <FeatureCard
              icon={<Store className="h-6 w-6" />}
              title="Información de Tiendas Locales"
              description="Accede a información detallada sobre las tiendas de Tulcán, incluyendo horarios y valoraciones."
              delay={200}
            />
            <FeatureCard
              icon={<Phone className="h-6 w-6" />}
              title="Contacto Directo"
              description="Contacta directamente con las tiendas de Tulcán para consultar disponibilidad o reservar productos."
              delay={300}
            />
            <FeatureCard
              icon={<Search className="h-6 w-6" />}
              title="Búsqueda Inteligente"
              description="Nuestra IA entiende lo que buscas incluso con descripciones imprecisas o términos locales de Carchi."
              delay={400}
            />
            <FeatureCard
              icon={<ShoppingBag className="h-6 w-6" />}
              title="Ofertas Exclusivas"
              description="Recibe notificaciones sobre ofertas exclusivas y promociones en tiendas de Tulcán."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-primary text-sm font-medium mb-4">
              <Bot className="h-4 w-4" />
              <span>Proceso Simple</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo funciona Comprandito</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En solo tres sencillos pasos, encuentra exactamente dónde comprar lo que necesitas en Tulcán.
            </p>
          </div>

          <HowItWorks />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Experiencias Reales</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen los tulcaneños</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cientos de personas en Tulcán ya han descubierto la forma más inteligente de comprar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="María Rosero"
              role="Ama de casa, Tulcán"
              image="/placeholder.svg?height=80&width=80"
              quote="Gracias a Comprandito encontré una tienda cerca de mi casa en el barrio San Vicente que vendía los útiles escolares que necesitaba a mitad de precio."
              delay={0}
            />
            <TestimonialCard
              name="Carlos Paspuel"
              role="Estudiante universitario, Tulcán"
              image="/placeholder.svg?height=80&width=80"
              quote="La precisión de las recomendaciones es impresionante. La app me ha ahorrado mucho tiempo y dinero en mis compras de componentes electrónicos en el centro de Tulcán."
              delay={200}
            />
            <TestimonialCard
              name="Laura Tapia"
              role="Comerciante, Tulcán"
              image="/placeholder.svg?height=80&width=80"
              quote="Como dueña de una tienda, estar en Comprandito ha aumentado mis ventas en un 30%. Los clientes valoran encontrar productos locales sin tener que ir a Ipiales."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-primary text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              <span>Cobertura Local</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Descubre tiendas en todo Tulcán</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprandito cubre toda la ciudad de Tulcán y sus alrededores, conectándote con cientos de comercios
              locales.
            </p>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-gray-200 animate-slide-up">
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-semibold mb-2">Mapa de Tulcán</h3>
                <p className="text-gray-600 mb-4">
                  Aquí se mostraría un mapa interactivo de Tulcán con las tiendas disponibles
                </p>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Ver tiendas cercanas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-16 text-white text-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute top-[10%] left-[10%] w-40 h-40 rounded-full bg-white animate-float"></div>
              <div
                className="absolute top-[40%] left-[60%] w-32 h-32 rounded-full bg-secondary animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-[70%] left-[30%] w-24 h-24 rounded-full bg-white animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-[20%] left-[80%] w-16 h-16 rounded-full bg-secondary animate-float"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Únete a la comunidad de Tulcán</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Empieza a comprar de forma inteligente en Tulcán</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Únete a cientos de tulcaneños que ya están ahorrando tiempo y dinero con Comprandito. Descarga la app
                ahora y descubre una nueva forma de comprar en tu ciudad.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 group">
                  <Search className="h-5 w-5 group-hover:animate-wave" />
                  Probar Ahora
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
                  Saber Más
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag className="h-6 w-6 text-secondary" />
                <span className="font-bold text-xl">Comprandito</span>
              </div>
              <p className="text-gray-400">La forma más inteligente de encontrar dónde comprar en Tulcán.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Compañía</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Comprandito. Todos los derechos reservados. Hecho con ❤️ en Tulcán, Carchi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

