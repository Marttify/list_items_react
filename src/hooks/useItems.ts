/* 
  Que es un hook? 
  
  Un hook es una función especial que permite usar el estado y otras características de React en componentes
  funcionales. Antes, para manejar estado o ciclo de vida, solo se podían usar componentes de clase, 
  pero los hooks permiten hacer todo esto sin clases.

  Por ejemplo:
  useState → permite tener estado local dentro de un componente.
  useEffect → permite manejar efectos secundarios (como llamadas a APIs).

*/
import { useState } from "react"
import { type Item } from "../App"

export const useItems = () => { // es un hook personalizado (custom hook)
  const [items, setItems] = useState<Item[]>([])

  const addItem = (text: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now()
    }

    setItems((prevItems) => {
      return [...prevItems, newItem]
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
  }

  return {
    items,
    addItem,
    removeItem
  }
}