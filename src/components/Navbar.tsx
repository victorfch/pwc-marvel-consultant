import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex w-full p-2">
        <li className="p-3"><Link to="/characters" className="text-blue-500 hover:text-blue-800">Characters</Link></li>
        <li className="p-3"><Link to="/series" className="text-blue-500 hover:text-blue-800">Series</Link></li>
        <li className="p-3"><Link to="/comics" className="text-blue-500 hover:text-blue-800">Comics</Link></li>
      </ul>
    </nav>
  )
}