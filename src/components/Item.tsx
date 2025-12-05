export function Item (
  { text, handleClick }: { text: string, handleClick: () => void }
) {
  return (
    <li className="apps-item">
      {text}
      <button onClick={handleClick}>
        Eliminar elemento
      </button>
    </li>
  )
}