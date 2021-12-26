import React from 'react'
import axios from 'axios';

function LoginForm(props) {

    let userName = ''
    let password = ''
    const baseUrl ='http://127.0.0.1:8000/';
    const tokenUrl = baseUrl+'api/token/';

    let userNameHndler = (e) => {
        userName = e.target.value  
    }
    let passwordNameHndler = (e) => {
        password = e.target.value
    }
    let submitHandler =async (e) => {
        e.preventDefault()
        await axios.post(tokenUrl, ({'username': userName, 'password': password})).then(data =>{
            props.setlogin(data.data.access)
        })
    }

    return (
       
        <form className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 text-center bg-gray-200 border-2 border-gray-400 rounded-lg text-md" method='post' onSubmit={submitHandler}>
            <div className="flex flex-col ">
                <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="username">User Name</label>
                <input className="px-3 py-2 border text-grey-darkest" type="text" name="username" id="username" placeholder="User Name" onChange = {userNameHndler} />
            </div>

            <div className="flex flex-col ">
                <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="password">Password</label>
                <input className="px-3 py-2 border text-grey-darkest" type="password" name="password" id="password" placeholder="password" onChange={passwordNameHndler} />
            </div>

            <button className="px-3 py-4 mt-8 uppercase bg-gray-500 rounded text-green hover:bg-gray-600 text-gray-50" type="submit">Sign In</button>

        </form>
    )
}

export default LoginForm