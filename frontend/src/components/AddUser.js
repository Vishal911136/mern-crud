import { useState } from "react";

const AddUser = () =>{

    const [userInfo,setUserInfo] = useState({
        name:'',
        username:'',
        email:'',
        mobile:''
    });

    const {name,username,email,mobile} = userInfo;

    const setInput = (e) =>{
        setUserInfo({...userInfo,[e.target.name]: e.target.value})

    }
    return(
        <>
            <div className="container mx-auto">
                <h1 className="text-center text-3xl font-bold">Add user</h1>
                <form className=" max-w-sm mx-auto bg-slate-200 p-4 shadow-md rounded">
                    <input name="name" placeholder="Name" type="text" value={name}  onChange={(e) =>setInput(e)}/>
                    <input name="username" placeholder="Username" type="text" value={username} onChange={(e) =>setInput(e)}/>
                    <input name="email" placeholder="Email" type="text" value={email} onChange={(e) =>setInput(e)}/>
                    <input name="mobile" placeholder="Mobile" type="Phone" value={mobile} onChange={(e) =>setInput(e)}/>
                    <button className="bg-slate-800 text-white hover:bg-gray-900 font-bold w-full py-1 rounded mt-2">Save</button>
                </form>
            </div>
        </>
    )
}

export default AddUser;