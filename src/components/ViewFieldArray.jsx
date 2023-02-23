export const ViewFieldArray = ({ title, items }) => {
  return (
    <div>
      <div className="font-bold">{title}:</div>
      <ul>
        {items.map((item, id) => (
          <li key={id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
