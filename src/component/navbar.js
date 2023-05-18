import React from 'react';
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    render() {
        return(
            <div className='text-white flex items-center justify-between p-4 z-[1000] w-full absolute'>
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer '><Link to='/'>NETFLIX</Link></h1>
                <div>
                    <Link to='signin' className='text-white pr-4'>Sign In</Link>
                    <Link to='signup' className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</Link>
                </div>
            </div>
        )
    }
}
export default Navbar