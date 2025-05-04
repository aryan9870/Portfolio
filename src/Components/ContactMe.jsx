import React from 'react'
import facebook from '../assets/facebook-icon.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import { useForm } from 'react-hook-form';


const ContactMe = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data)
    
    return (
        <section className="contact  bg-black text-white pb-5 pt-14 flex flex-col gap-10">
            <div className="text flex flex-col gap-10 text-center xl:px-60 md:px-20 sm:px-10 px-5 ">
                <h2 className='text-3xl font-semibold'>Contact Me</h2>
                <p className='text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="form w-full">
                <div className="inputs flex flex-col w-2/5 m-auto gap-5">
                    <input {...register("name")} className='bg-slate-800 py-2 px-4' type="text" placeholder='Your Name'/>
                    <input {...register("email")} className='bg-slate-800 py-2 px-4' type="email" placeholder='Your Email' />
                    <textarea {...register("Message")} className='bg-slate-800 py-2 px-4' type="text" placeholder='Your Message' rows={5}></textarea>
                </div>
                <input className='mt-5 bg-slate-200 text-black flex py-3 px-12 rounded-xl items-center gap-3 w-fit mx-auto border-2 hover:invert border-transparent hover:border-gray-900 hover:bg-transparent' type="submit" value="submit" />
            </form>

            <div className="icons  flex justify-center gap-5">
                <div className="image">
                    <img className='h-16' src={facebook} alt="" />
                </div>
                <div className="image">
                    <img className='h-16' src={instagram} alt="" />
                </div>
                <div className="image">
                    <img className='h-16' src={twitter} alt="" />
                </div>
                <div className="image">
                    <img className='h-16' src={youtube} alt="" />
                </div>
            </div>

        </section>
    )
}

export default ContactMe