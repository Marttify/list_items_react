import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`
export interface Item {
  id: ItemId
  timestamp: number
  text: string
}

function App() {
  const { items, addItem, removeItem } = useItems() // uso del hook personalizado (custom hook) y lo desestructuro en sus props

  console.log(items)
  useSEO({
    title: `[${items.length}] Prueba técnica de React`,
    description: 'Añadir y eliminar elementos de una lista'
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // e.target.value -> para escuchar el onChange de un INPUT
    const { elements } = event.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement // JavaScript puro
    if (!isInput || input == null) return

    addItem(input.value)

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main className="app-main">
      <aside>
        <h1 className="app-h1">Prueba técnica de React</h1>
        <h2 className="app-h2">Añadir y eliminar elementos de una lista</h2>

        <form onSubmit={handleSubmit} className="app-form" aria-label='Añadir elementos a la lista'>
          <label className="app-label">
            Elemento a introducir:
            <input
              name="item"
              required
              type="text"
              placeholder="Escribe el texto del elemento"
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>

      <section>
        <h2 className="app-h2">Lista de elementos ({items.length})</h2>
        {items.length === 0 ? (
          <p><strong>No hay elementos en la lista.</strong></p>
        ) : (
          <ul className="apps-list">
            {items.map(item => (
              <Item
                {...item}
                handleClick={createHandleRemoveItem(item.id)}
                key={item.id}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
