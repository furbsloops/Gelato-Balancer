'use client'

import Image from 'next/image'
import RecipeBalancer from '@/components/recipes/RecipeBalancer'

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-10">
      {/* Icona cono gelato */}
      <div className="flex justify-center mt-4">
        <Image
          src="/ice-cream-cone.png"
          alt="Gelato Icon"
          width={100}
          height={100}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Sezione bilanciamento */}
      <section>
        <h1 className="text-3xl font-bold mb-4 text-center">Bilanciamento Ricetta Gelato</h1>
        <RecipeBalancer />
      </section>
    </main>
  )
}
