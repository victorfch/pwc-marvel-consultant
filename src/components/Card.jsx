import { Link } from "react-router-dom"

export const Card = ({ url, imageSrc, title, description }) => {
  return (
    <Link to={url}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageSrc} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-gray-700 text-base">{description}</div>
        </div>
      </div>
    </Link>
  )
}
