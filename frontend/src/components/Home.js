import { Link } from "react-router-dom";


const Home = () => {
    return(
        <>
        <div className="w-11/12 mx-auto">
            <table className="table-auto w-full mt-4 overflow-x-scroll">
                <thead className="bg-black text-white">
                    <tr>
                        <th className="py-2 px-2">id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="border border-b-slate-300 text-center bg-gray-50 mt-3">
                        <td>1</td>
                        <td>Vishal</td>
                        <td>vs@1123</td>
                        <td>Vishal@gmail.com</td>
                        <td>9111363002</td>
                        <td>
                            <Link to="/edituser/2">
                                <button className="my-1 bg-stone-500 hover:bg-stone-700 text-gray-50 font-bold px-4 py-1 rounded">Edit</button>
                            </Link>
                            <button className="ml-2 bg-red-500 hover:bg-red-700 text-gray-50 font-bold px-3 py-1 rounded cursor-pointer">Delete</button>
                        </td>
                    </tr>
                    <tr className="text-center bg-gray-50 mt-3">
                        <td>1</td>
                        <td>Vishal</td>
                        <td>vs@1123</td>
                        <td>Vishal@gmail.com</td>
                        <td>9111363002</td>
                        <td>
                            <button className="my-1 bg-stone-500 hover:bg-stone-700 text-gray-50 font-bold px-4 py-1 rounded">Edit</button>
                            <button className="ml-2 bg-red-500 hover:bg-red-700 text-gray-50 font-bold px-3 py-1 rounded cursor-pointer">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Home;