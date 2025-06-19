'use client'

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { preloadedFlavors } from "@/lib/preloadedList"
import { exportRecipeJSON, importRecipeJSON } from "@/lib/recipesIO"
import { Ingredients } from "@/lib/ingredientsData"

export default function RecipeBalancer() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [recipe, setRecipe] = useState<Record<string, number>>({})
  const [results, setResults] = useState({ solids: 0, pac: 0, pod: 0 })
  const [recipeName, setRecipeName] = useState("")
  const [savedRecipes, setSavedRecipes] = useState<Record<string, typeof recipe>>({})
  const [selectedQty, setSelectedQty] = useState(1000)
  const [ingredientToAdd, setIngredientToAdd] = useState("")
  const [servingTemp, setServingTemp] = useState(-14)

  useEffect(() => {
    const stored = localStorage.getItem("gelato-recipes")
    if (stored) setSavedRecipes(JSON.parse(stored))
  }, [])

  const scaleToTotal = (base: typeof recipe, targetTotal: number) => {
    const currentTotal = Object.values(base).reduce((a, b) => a + b, 0)
    if (currentTotal === 0) return
    const factor = targetTotal / currentTotal
    const scaled = Object.fromEntries(
      Object.entries(base).map(([k, v]) => [k, Math.round(v * factor)])
    ) as typeof recipe
    setRecipe(scaled)
  }

  const saveRecipe = () => {
    if (!recipeName) return
    const updated = { ...savedRecipes, [recipeName]: recipe }
    setSavedRecipes(updated)
    localStorage.setItem("gelato-recipes", JSON.stringify(updated))
    toast.success("Ricetta salvata con successo!")
    setRecipeName("")
  }

  const calculate = () => {
    let solids = 0, pacValue = 0, podValue = 0, totalWeight = 0

    for (const key in recipe) {
      const qty = recipe[key]
      const ing = Ingredients[key]
      if (!ing) continue

      solids += (qty * (ing.Solids || 0)) / 100
      pacValue += qty * (ing.PAC || 0)
      podValue += qty * (ing.POD || 0)
      totalWeight += qty
    }

    const solidsPct = (solids / totalWeight) * 100
    const pacPct = (pacValue / totalWeight) * 100
    const podPct = (podValue / totalWeight) * 100

    setResults({
      solids: parseFloat(solidsPct.toFixed(2)),
      pac: parseFloat(pacPct.toFixed(2)),
      pod: parseFloat(podPct.toFixed(2)),
    })
  }

  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQty = parseInt(e.target.value || '1000')
    setSelectedQty(newQty)
    scaleToTotal(recipe, newQty)
  }

  const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipe({ ...recipe, [e.target.name]: parseFloat(e.target.value || "0") })
  }

  const handleAddIngredient = () => {
    if (!ingredientToAdd || selectedIngredients.includes(ingredientToAdd)) return
    setSelectedIngredients([...selectedIngredients, ingredientToAdd])
    setRecipe({ ...recipe, [ingredientToAdd]: 0 })
    setIngredientToAdd("")
  }

  const handleRemoveIngredient = (name: string) => {
    const updated = { ...recipe }
    delete updated[name]
    setRecipe(updated)
    setSelectedIngredients(selectedIngredients.filter(i => i !== name))
  }

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto">
      <Card className="shadow-md">
        <CardContent className="space-y-6 pt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gusto predefinito</label>
            <select
              onChange={(e) => {
                const allFlavors = preloadedFlavors.flatMap(c => c.flavors)
                const selected = allFlavors.find(r => r.name === e.target.value)
                if (selected) {
                  setRecipe(selected.ingredients)
                  setSelectedIngredients(Object.keys(selected.ingredients))
                }
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              defaultValue=""
            >
              <option value="" disabled>Seleziona un gusto</option>
              {preloadedFlavors.map((group) => (
                <optgroup key={group.category} label={group.category}>
                  {group.flavors.map((flavor) => (
                    <option key={flavor.name} value={flavor.name}>
                      {flavor.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantità totale (g)</label>
            <Input type="number" value={selectedQty} onChange={handleQtyChange} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Temperatura di servizio (°C)</label>
            <Input type="number" value={servingTemp} onChange={(e) => setServingTemp(parseFloat(e.target.value))} />
          </div>

          <div className="flex gap-2">
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={ingredientToAdd}
              onChange={(e) => setIngredientToAdd(e.target.value)}
            >
              <option value="">Aggiungi ingrediente</option>
              {Object.keys(Ingredients)
                .filter(key => !selectedIngredients.includes(key))
                .map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
            </select>
            <Button onClick={handleAddIngredient}>➕</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selectedIngredients.map((key) => (
              <div key={key} className="relative">
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  {key} <button type="button" className="text-red-600 ml-1" onClick={() => handleRemoveIngredient(key)}>✖</button>
                </label>
                <Input
                  type="number"
                  name={key}
                  value={recipe[key] || 0}
                  onChange={handleIngredientChange}
                />
              </div>
            ))}
          </div>

          <Button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={calculate}>
            Calcola
          </Button>

          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <p><strong>Solidi Totali:</strong> {results.solids}%</p>
            <p><strong>PAC:</strong> {results.pac}</p>
            <p><strong>POD:</strong> {results.pod}</p>
            <p><strong>Temp. stimata in base al PAC:</strong> {(-results.pac / 2).toFixed(1)}°C</p>
            <p><strong>Temp. di servizio scelta:</strong> {servingTemp}°C</p>

            {results.pac > 0 && (
              <div className="text-sm text-gray-800 mt-2">
                <p><strong>PAC ideale per {servingTemp}°C:</strong> {(Math.abs(servingTemp) * 2).toFixed(1)}</p>
                {Math.abs(results.pac - Math.abs(servingTemp) * 2) > 4 && (
                  <p className="text-yellow-700">
                    ⚠️ Il PAC attuale ({results.pac}) non è allineato con la temperatura di servizio ({servingTemp}°C).
                  </p>
                )}
              </div>
            )}

            {results.pod > 0 && (
              <div className="text-sm text-gray-800 mt-2">
                <p><strong>Range consigliato di POD:</strong> {recipe.milk || recipe.cream ? '130–195 (gelato)' : '200–260 (sorbetto)'}</p>
                {(recipe.milk || recipe.cream)
                  ? (results.pod < 130 || results.pod > 195) && (
                      <p className="text-yellow-700">
                        ⚠️ Il POD non è ideale per un gelato (130–195).
                      </p>
                    )
                  : (results.pod < 200 || results.pod > 260) && (
                      <p className="text-yellow-700">
                        ⚠️ Il POD non è ideale per un sorbetto (200–260).
                      </p>
                    )
                }
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Input placeholder="Nome ricetta" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
            <Button className="bg-green-600 text-white px-4 py-2 rounded-md" onClick={saveRecipe}>
              💾 Salva ricetta
            </Button>
            <Button
              className="bg-indigo-600 text-white px-4 py-2 rounded-md"
              onClick={() => exportRecipeJSON({
                name: recipeName || "ricetta",
                ingredients: recipe,
                total: selectedQty,
                createdAt: new Date().toISOString(),
                version: 1,
              })}
            >
              📤 Esporta .gelato.json
            </Button>
            <label htmlFor="importJson">
              <input
                type="file"
                accept=".json"
                id="importJson"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    importRecipeJSON(file)
                      .then((loaded) => {
                        setRecipe(loaded.ingredients)
                        setSelectedIngredients(Object.keys(loaded.ingredients))
                        setSelectedQty(loaded.total)
                        toast.success(`Importato: ${loaded.name}`)
                      })
                      .catch(() => toast.error("Errore nell'importazione"))
                  }
                }}
              />
              <Button className="bg-purple-600 text-white px-4 py-2 rounded-md">
                📥 Import .json
              </Button>
            </label>
          </div>

          {Object.keys(savedRecipes).length > 0 && (
            <div className="pt-6">
              <h2 className="font-semibold text-lg mb-3">Ricette salvate</h2>
              <ul className="space-y-2">
                {Object.entries(savedRecipes).map(([name, values]) => (
                  <li key={name} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span onClick={() => {
                      setRecipe(values)
                      setSelectedIngredients(Object.keys(values))
                    }} className="text-blue-600 underline cursor-pointer">
                      {name}
                    </span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        const updated = { ...savedRecipes }
                        delete updated[name]
                        setSavedRecipes(updated)
                        localStorage.setItem("gelato-recipes", JSON.stringify(updated))
                        toast.success(`Ricetta "${name}" eliminata`)
                      }}
                    >
                      Elimina
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
