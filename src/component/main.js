import React from 'react'

class Main extends React.Component{

    render() {
        return(
            <div className='w-full sm:h-[1080px] md:h-[768px] text-white'>
                <div className='w-full h-full'>
                    <div className='absolute w-full sm:h-[550px] md:h-[768px] z-[999] bg-gradient-to-t from-black '></div>
                    <img className='w-full h-full object-cover object-center brightness-50' src={require('../image/ezgif.com-gif-maker.jpg')} alt='aa' />
                    <div className='absolute w-full md:top-[40%] p-4 top-[10%] md:p-8 z-[1000]'>
                        <h1 className='text-xl md:text-5xl font-bold'>Spider-Man: No Way Home 2021</h1>
                        <div className='my-4'>
                            <button className='border rounded-md bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                            <button className='border rounded-md text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                        </div>
                        <p className='text-gray-400 text-sm' >2021 Decembre 17</p>
                        <p className='hidden md:block md:max-w-[70%] xl:max-w-[50%] 2xl:max-w-[35%] '>With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p>
                    </div>
                </div>

            </div>
        )
    }

}
export default Main