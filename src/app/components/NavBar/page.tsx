import Link from "next/link"
import CarIcon from '@mui/icons-material/DirectionsCar';
const NavBar:React.FC = () =>{
    return (
        <div className="bg-gray-400 flex flex-col items-center justify-center">
        <nav className="fixed top-0 w-full p-4 bg-gray-800 text-white flex mt-1 justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <CarIcon style={{ fontSize: 30 }} />
          </Link>
         <div className="flex justify-between gap-7">
         <Link href= "/"  className="hover:bg-gray-500 px-3 py-2 rounded-md" >Home</Link>
          <Link href= "#" className="hover:bg-gray-500 px-3 py-2 rounded-md">About</Link>
          <Link href= "#" className="hover:bg-gray-500 px-3 py-2 rounded-md">Contact</Link>
         </div>
        </nav>
        </div>
    )
}
export default NavBar;