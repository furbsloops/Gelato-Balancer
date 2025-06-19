export interface SavedRecipe {
    name: string
    total: number
    ingredients: Record<string, number>
    createdAt: string
    version: number
  }
  
  export function exportRecipeJSON(recipe: SavedRecipe) {
    const blob = new Blob([JSON.stringify(recipe, null, 2)], {
      type: "application/json",
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${recipe.name || "ricetta"}.gelato.json`
    a.click()
    URL.revokeObjectURL(url)
  }
  
  export function importRecipeJSON(file: File): Promise<SavedRecipe> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result as string)
          // Validazione semplice
          if (parsed.name && parsed.ingredients && parsed.total) {
            resolve(parsed as SavedRecipe)
          } else {
            reject("Formato non valido")
          }
        } catch (err) {
          reject(err)
        }
      }
      reader.readAsText(file)
    })
  }
  