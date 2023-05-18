import React from 'react';
import axios from "axios";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
class Row extends React.Component{
    constructor() {
        super();
        this.state = {movies :[],select : ''}
        const movie = axios.get('https://moviesapi.ir/api/v1/movies')
        movie.then((e) => this.setState({movies:e.data.data,select :e.data.data[Math.floor(Math.random() * 10)]},
            () =>  this.test = this.state.movies.find((e) => e.id === 1).poster))
        this.sliderright = () =>{
            const slider = document.getElementById('slider' + this.props.rowID)
            slider.scrollLeft += 500
        }
        this.sliderleft = () =>{
            const slider = document.getElementById('slider' + this.props.rowID)
            slider.scrollLeft -= 500
        }
    }
    render() {
        return(
            <>
                <h2 className='text-white font-bold md:font-xl p-4'>{this.props.title}</h2>
                <div className='relative flex items-center group'>
                    <MdChevronLeft  size={40} onClick={this.sliderleft}  className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' />
                    <div id={'slider' + this.props.rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {this.state.movies.map((items,index) => (
                            <div className='w-[120px] sm:w-[140px] md:w-[180px] lg:w-[220px] inline-block cursor-pointer relative p-2'>
                                <img src={items.poster} className='rounded-md ' alt={items.title}/>
                                <div className='absolute duration-[1000ms] rounded-md top-0 left-0 w-full h-full hover:bg-black/80  hover:opacity-100 hover:duration-[500ms] opacity-0 text-white'>
                                    <p className='white-space-normal text-2xs font-bold flex justify-center items-center h-full text-center'>{items.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <MdChevronRight size={40} onClick={this.sliderright}   className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' />
                </div>
            </>
        )
    }
}
export default Row