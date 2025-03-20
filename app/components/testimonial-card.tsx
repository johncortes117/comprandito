import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
  delay?: number
}

export default function TestimonialCard({ name, role, image, quote, delay = 0 }: TestimonialCardProps) {
  return (
    <Card
      className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-secondary">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <p className="text-gray-600 italic">"{quote}"</p>
        <div className="mt-4 flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

