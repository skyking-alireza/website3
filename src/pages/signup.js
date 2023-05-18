import React from 'react';
import {Link} from "react-router-dom";

class Signup extends React.Component {
    render() {
        return (
            <>
                <div className='w-full h-screen'>
                    <img className={'hidden sm:block absolute  object-cover w-full h-screen'} src={require('../image/login-bg.webp')} alt='bg'/>
                    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                    <div className='fixed w-full px-4 py-24 z-50'>
                        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-xl'>
                            <div className='max-w-[320px] mx-auto py-16'>
                                <h1 className='text-3xl font-bold'>Sign Up</h1>
                                <form className={'w-full flex flex-col py-4'}>
                                    <input className={'p-3 my-4 rounded bg-gray-600 focus:outline-none focus:ring focus:ring-red-600'} type={"email"} name={'email'} placeholder={'Email'} autoComplete={'email'} />
                                    <input className={'p-3 my-4 rounded bg-gray-600 focus:outline-none focus:ring focus:ring-red-600'} type={"password"} name={'password'} placeholder={'Password'} autoComplete={'current-password'} />
                                    <button className={'bg-red-600 py-3 my-6 rounded font-bold'}>Sign up</button>
                                    <div className={'flex justify-between items-center text-sm text-gray-600'}>
                                        <p><input type={"checkbox"} className={'mr-2'} />Remember me</p>
                                        <p>Need Help?</p>
                                    </div>
                                    <p className={'py-4'}>
                                        <span className={'text-gray-600'}>
                                            Already subscribed to Netflix?
                                        </span>
                                        {'  '}<Link to={'/signin'}>Sign In</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Signup