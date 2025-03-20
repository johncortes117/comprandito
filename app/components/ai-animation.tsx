"use client"

import { useEffect, useState } from "react"
import { Bot, Sparkles } from "lucide-react"

export default function AiAnimation() {
  const [dots, setDots] = useState<Array<{ x: number; y: number; size: number; speed: number; color: string }>>([])

  useEffect(() => {
    // Create random dots for the animation
    const newDots = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 6,
      speed: 0.5 + Math.random() * 1.5,
      color: Math.random() > 0.5 ? "#2E8B57" : "#FFD700", // Green or Yellow
    }))

    setDots(newDots)

    // Animation loop
    const interval = setInterval(() => {
      setDots((prevDots) =>
        prevDots.map((dot) => ({
          ...dot,
          x: (dot.x + dot.speed * 0.2) % 100,
          y: (dot.y + dot.speed * 0.1) % 100,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] rounded-xl bg-gray-50 overflow-hidden">
      {/* Background dots */}
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-pulse-light"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            animationDelay: `${index * 100}ms`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Central AI element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Outer ring */}
          <div className="absolute -inset-8 rounded-full border-4 border-dashed border-primary/30 animate-rotate-slow"></div>

          {/* Middle ring */}
          <div
            className="absolute -inset-4 rounded-full border-2 border-secondary/40 animate-rotate-slow"
            style={{ animationDirection: "reverse", animationDuration: "12s" }}
          ></div>

          {/* Center circle */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center">
            <Bot className="h-12 w-12 text-primary" />
          </div>

          {/* Sparkles */}
          <div className="absolute -top-4 -right-4 animate-float">
            <Sparkles className="h-6 w-6 text-secondary" />
          </div>
          <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: "1s" }}>
            <Sparkles className="h-6 w-6 text-secondary" />
          </div>
        </div>
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="30%"
          stroke="#2E8B57"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse-light"
        />
        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="40%"
          stroke="#FFD700"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse-light"
          style={{ animationDelay: "0.5s" }}
        />
        <line
          x1="50%"
          y1="50%"
          x2="30%"
          y2="70%"
          stroke="#FFD700"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse-light"
          style={{ animationDelay: "1s" }}
        />
        <line
          x1="50%"
          y1="50%"
          x2="70%"
          y2="75%"
          stroke="#2E8B57"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse-light"
          style={{ animationDelay: "1.5s" }}
        />
      </svg>

      {/* Labels */}
      <div className="absolute top-[25%] left-[15%] bg-white px-2 py-1 rounded-md shadow-md text-xs font-medium text-primary animate-float">
        Tiendas locales
      </div>
      <div
        className="absolute top-[35%] left-[75%] bg-white px-2 py-1 rounded-md shadow-md text-xs font-medium text-primary animate-float"
        style={{ animationDelay: "0.7s" }}
      >
        Precios
      </div>
      <div
        className="absolute top-[65%] left-[25%] bg-white px-2 py-1 rounded-md shadow-md text-xs font-medium text-primary animate-float"
        style={{ animationDelay: "1.4s" }}
      >
        Productos
      </div>
      <div
        className="absolute top-[70%] left-[65%] bg-white px-2 py-1 rounded-md shadow-md text-xs font-medium text-primary animate-float"
        style={{ animationDelay: "2.1s" }}
      >
        Ubicaciones
      </div>
    </div>
  )
}

