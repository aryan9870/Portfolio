import React, { useState } from 'react'
import hireme from '../assets/hireme.png';
import { useForm } from 'react-hook-form';


const Home = () => {

    const [showhireme, setshowhireme] = useState(false)

    function handleshowhireme() {
        setshowhireme(!showhireme)
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className='bg-black'>
                <section className="home bg-[url('https://w0.peakpx.com/wallpaper/138/154/HD-wallpaper-developer-coding-programming-science-tech-technology-thumbnail.jpg')]  md:bg-[url('https://st.depositphotos.com/30440304/54538/i/450/depositphotos_545386382-stock-photo-style-black-background-geometric-layers.jpg')] h-screen bg-cover bg-center rounded-b-3xl">
                    <div className="content text-white h-full w-4/5 flex justify-center xl:justify-end items-center">
                        <div className=' w-5/6 flex flex-col gap-6 md:gap-8 pt-10'>
                            <p className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>Hello,</p>
                            <div className="heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold">
                                <h1>I'am<span className='text-yellow-300'> Aryan</span></h1>
                                <h1>Website Designer</h1>
                            </div>
                            <p className='text-lg lg:text-xl xl:text-2xl'>I am a Skilled and passionate web designer with experience in creating visually appealing and user-friendly websites</p>
                            <div className="hhh sm:flex gap-3">
                                <button onClick={handleshowhireme} className='border-2 mb-3 sm:mb-0 hover:invert border-transparent hover:border-gray-900 hover:bg-transparent bg-slate-200 text-black flex py-2 px-6 rounded-3xl items-center gap-3 w-fit'><img className='h-5' src={hireme} alt="" />Hire me</button>
                                <form onSubmit= {handleSubmit(onSubmit)} action="">
                                    <div className={showhireme ? "" : "hidden"}>
                                        <div className="hireMe rounded-xl absolute bg-slate-200 bg-opacity-20 py-6 px-3 flex flex-col gap-5">

                                            <div className="inputs flex flex-col gap-3">
                                                <input {...register("Name")} className='bg-transparent outline-none border-b-2 mx-2 placeholder:text-yellow-300 placeholder:opacity-80 px-2 py-1 text-yellow-300' placeholder='Your Name' type="text" />
                                                <input {...register("Number")} className='bg-transparent outline-none border-b-2 mx-2 placeholder:text-yellow-300 placeholder:opacity-80 px-2 py-1 text-yellow-300' placeholder='Your Number' type="text" />
                                            </div>
                                            <input className="sendhire bg-slate-200 text-black mx-1 rounded-3xl py-1 px-6 border-2 mb-3 sm:mb-0 hover:invert border-transparent hover:border-gray-900 hover:bg-transparent" type="submit" value="Send" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home