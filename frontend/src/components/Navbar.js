import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <> 
            <div className="flex justify-between items-center bg-gray-900 px-8 py-2">
                <div className="flex items-center ">
                    <h2 className="text-white text-3xl font-bold">CRUD APP</h2>
                    <Link className="text-blue-400 font-bold ml-4" to="/">Home</Link>
                </div>
                <div className="flex">
                    <Link to='/adduser'>
                        <button className="bg-blue-500 hover:bg-blue-700 px-4 py-1 text-white rounded">Add User</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar