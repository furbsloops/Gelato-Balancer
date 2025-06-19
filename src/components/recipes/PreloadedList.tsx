// src/components/recipes/PreloadedList.tsx

'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Ingredients } from "@/lib/ingredientsData"

const alias: Record<string, string> = {
  milk: "Whole Milk 3.5%",
  cream: "Cream, heavy",
  sugar: "Sucrose",
  dextrose: "Dextrose",
  stabilizer: "Locust Bean Gum",
  paste: "Pistachio Paste (pure)",
  fruit: "Mango",
  lemonJuice: "Lemon Juice",
  water: "Water",
  yogurt: "Yogurt 3.5%",
}

const scannedFlavors = [
  {
    name: "Caffè Base Gialla",
    ingredients: {
      [alias.milk]: 0,
      [alias.cream]: 0,
      [alias.sugar]: 60,
      [alias.dextrose]: 0,
      [alias.stabilizer]: 0,
      [alias.paste]: 120,
    },
  },
  {
    name: "Sorbetto Limone",
    ingredients: {
      [alias.milk]: 0,
      [alias.cream]: 0,
      [alias.sugar]: 204,
      [alias.dextrose]: 58,
      [alias.stabilizer]: 0,
      [alias.paste]: 0,
      [alias.fruit]: 250,
      [alias.lemonJuice]: 10,
      [alias.water]: 453,
    },
  },
  {
    name: "Base Bianca",
    ingredients: {
      [alias.milk]: 1030,
      [alias.cream]: 450,
      [alias.sugar]: 260,
      [alias.dextrose]: 0,
      [alias.stabilizer]: 50,
    },
  },
  {
    name: "Yogurt Frozen",
    ingredients: {
      [alias.milk]: 0,
      [alias.cream]: 0,
      [alias.sugar]: 210,
      [alias.dextrose]: 45,
      [alias.stabilizer]: 4,
      [alias.yogurt]: 1000,
    },
  },
  {
    name: "Ricetta Moderna",
    ingredients: {
      [alias.milk]: 930,
      [alias.cream]: 160,
      [alias.sugar]: 210,
      [alias.dextrose]: 0,
      [alias.stabilizer]: 50,
    },
  },
]

export const preloadedFlavors = [
  {
    category: "Predefiniti",
    flavors: scannedFlavors,
  },
]

export default function PreloadedList() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {scannedFlavors.map((flavor) => (
        <Card key={flavor.name}>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-3">{flavor.name}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {Object.entries(flavor.ingredients).map(([key, value]) => (
                <li key={key}>
                  {formatLabel(key)}: <span className="font-medium text-black">{value} g</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function formatLabel(key: string): string {
  const labels: Record<string, string> = {
    "Whole Milk 3.5%": "Latte",
    "Cream, heavy": "Panna",
    "Sucrose": "Zucchero",
    "Dextrose": "Destrosio",
    "Glucose": "Glucosio",
    "Fructose": "Fruttosio",
    "Locust Bean Gum": "Stabilizzante",
    "Pistachio Paste (pure)": "Pasta aromatica",
    "Mango": "Frutta",
    "Lemon Juice": "Succo di limone",
    "Water": "Acqua",
    "Yogurt 3.5%": "Yogurt",
  }
  return labels[key] || key
}
