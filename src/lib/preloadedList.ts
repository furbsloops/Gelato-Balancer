// src/lib/preloadedList.ts

import { Ingredients } from "@/lib/ingredientsData"

type Flavor = {
  name: string,
  ingredients: Record<keyof typeof Ingredients, number>
}

type Category = {
  category: string,
  flavors: Flavor[]
}

export const preloadedFlavors: Category[] = [
  {
    category: "Classici",
    flavors: [
      {
        name: "Fiordilatte",
        ingredients: {
          "Whole Milk 3.5%": 600,
          "Cream 30%": 100,
          "Sucrose": 150,
          "Dextrose": 50,
          "Locust Bean Gum": 5,
        },
      },
      {
        name: "Nocciola",
        ingredients: {
          "Whole Milk 3.5%": 500,
          "Cream 30%": 100,
          "Sucrose": 120,
          "Dextrose": 40,
          "Locust Bean Gum": 5,
          "Hazelnut Paste (pure)": 80,
        },
      },
      {
        name: "Pistacchio",
        ingredients: {
          "Whole Milk 3.5%": 520,
          "Cream 30%": 80,
          "Sucrose": 130,
          "Dextrose": 40,
          "Locust Bean Gum": 5,
          "Pistachio Paste (pure)": 100,
        },
      },
      {
        name: "Stracciatella",
        ingredients: {
          "Whole Milk 3.5%": 600,
          "Cream 30%": 120,
          "Sucrose": 140,
          "Dextrose": 40,
          "Locust Bean Gum": 5,
          "Chocolate, dark": 0,
        },
      },
      {
        name: "Zabaione",
        ingredients: {
          "Whole Milk 3.5%": 550,
          "Cream 30%": 100,
          "Sucrose": 130,
          "Dextrose": 40,
          "Locust Bean Gum": 5,
          "Egg Yolk": 90,
        },
      },
      {
        name: "Amarena",
        ingredients: {
          "Whole Milk 3.5%": 580,
          "Cream 30%": 100,
          "Sucrose": 140,
          "Dextrose": 40,
          "Locust Bean Gum": 5,
          "Cherry Paste": 100,
        },
      },
      {
        name: "Cioccolato",
        ingredients: {
          "Whole Milk 3.5%": 400,
          "Cream 30%": 100,
          "Sucrose": 140,
          "Dextrose": 60,
          "Locust Bean Gum": 5,
          "Chocolate, dark": 100,
        },
      },
    ],
  },
  {
    category: "Sorbetti",
    flavors: [
      {
        name: "Sorbetto Limone",
        ingredients: {
          "Sucrose": 204,
          "Dextrose": 58,
          "Lemon": 250,
          "Lemon Juice": 10,
          "Water": 453,
        },
      },
      {
        name: "Sorbetto Fragola",
        ingredients: {
          "Sucrose": 190,
          "Dextrose": 60,
          "Strawberries": 300,
          "Water": 450,
        },
      },
      {
        name: "Sorbetto Mango",
        ingredients: {
          "Sucrose": 180,
          "Dextrose": 50,
          "Mango": 300,
          "Water": 470,
        },
      },
      {
        name: "Sorbetto Ananas",
        ingredients: {
          "Sucrose": 185,
          "Dextrose": 55,
          "Pineapple": 280,
          "Water": 480,
        },
      },
      {
        name: "Sorbetto Lampone",
        ingredients: {
          "Sucrose": 200,
          "Dextrose": 50,
          "Raspberries": 300,
          "Water": 450,
        },
      },
      {
        name: "Sorbetto Pesca",
        ingredients: {
          "Sucrose": 175,
          "Dextrose": 50,
          "Peach": 310,
          "Water": 465,
        },
      },
    ],
  },
  {
    category: "Specialità",
    flavors: [
      {
        name: "Caffè Base Gialla",
        ingredients: {
          "Sucrose": 60,
          "Coffee Beans": 120,
        },
      },
      {
        name: "Yogurt Frozen",
        ingredients: {
          "Sucrose": 210,
          "Dextrose": 45,
          "Locust Bean Gum": 4,
          "Yogurt 3.5%": 80,
          "Whole Milk 3.5%": 0,
          "Cream 30%": 0,
        },
      },
      {
        name: "Crema al Mascarpone",
        ingredients: {
          "Whole Milk 3.5%": 500,
          "Cream 30%": 300,
          "Sucrose": 150,
          "Dextrose": 50,
          "Mascarpone": 100,
          "Locust Bean Gum": 5,
        },
      },
      {
        name: "Bacio",
        ingredients: {
          "Whole Milk 3.5%": 500,
          "Cream 30%": 100,
          "Sucrose": 120,
          "Dextrose": 50,
          "Hazelnut Paste (pure)": 60,
          "Chocolate, dark": 40,
          "Locust Bean Gum": 5,
        },
      },
      {
        name: "Cassata Siciliana",
        ingredients: {
          "Whole Milk 3.5%": 600,
          "Cream 30%": 150,
          "Sucrose": 140,
          "Dextrose": 50,
          "Ricotta": 80,
          "Locust Bean Gum": 5,
        },
      },
      {
        name: "Zabaione",
        ingredients: {
          "Whole Milk 3.5%": 550,
          "Cream 30%": 150,
          "Sucrose": 150,
          "Dextrose": 40,
          "Egg Yolk": 100,
          "Locust Bean Gum": 5,
        },
      },
      {
        name: "Liquirizia",
        ingredients: {
          "Whole Milk 3.5%": 550,
          "Cream 30%": 100,
          "Sucrose": 140,
          "Dextrose": 40,
          "Licorice Paste": 90,
          "Locust Bean Gum": 5,
        },
      },
    ],
  },
  {
    category: "Basi",
    flavors: [
      {
        name: "Ricetta Moderna",
        ingredients: {
          "Whole Milk 3.5%": 930,
          "Cream 30%": 160,
          "Sucrose": 210,
          "Locust Bean Gum": 50,
        },
      },
      {
        name: "Base Gialla 1",
        ingredients: {
          "Whole Milk 3.5%": 1000,
          "Cream 30%": 250,
          "Sucrose": 250,
          "Dextrose": 0,
          "Locust Bean Gum": 50,
        },
      },
      {
        name: "Base Gialla 2",
        ingredients: {
          "Whole Milk 3.5%": 1000,
          "Cream 30%": 250,
          "Sucrose": 250,
          "Locust Bean Gum": 50,
        },
      },
      {
        name: "Base Bianca 1",
        ingredients: {
          "Whole Milk 3.5%": 930,
          "Cream 30%": 160,
          "Sucrose": 210,
          "Locust Bean Gum": 50,
        },
      },
      {
        name: "Base Bianca 2",
        ingredients: {
          "Whole Milk 3.5%": 1030,
          "Cream 30%": 450,
          "Sucrose": 260,
          "Locust Bean Gum": 50,
        },
      },
      {
        name: "Base Bianca 3",
        ingredients: {
          "Whole Milk 3.5%": 900,
          "Cream 30%": 200,
          "Sucrose": 200,
          "Dextrose": 50,
          "Locust Bean Gum": 40,
        },
      },
      {
        name: "Base Sorbetto",
        ingredients: {
          "Sucrose": 200,
          "Dextrose": 50,
          "Water": 650,
          "Locust Bean Gum": 15,
        },
      },
    ],
  },
]