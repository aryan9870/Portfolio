import React from 'react'
import web from '../assets/website-design.png';
import ui from '../assets/ui-design.png';
import app from '../assets/app-design.png';


const About = () => {
    return (
        <section className="about xl:px-60 md:px-20 sm:px-10 pb-5 pt-14 bg-black text-white flex flex-col gap-10">
            <div className="text flex flex-col gap-10 text-center ">
                <h2 className='text-3xl font-semibold'>What I do</h2>
                <p className='text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit similique consectetur possimus ad. Non sint, at asperiores illum cumque hic doloremque, qui veritatis quia voluptates placeat deserunt fugiat, ea voluptas error velit! Adipisci pariatur!</p>
            </div>
            <div className="cards flex flex-col lg:gap-5 gap-8">
                <div className="card w-3/4 bg-slate-900 mx-auto px-3 py-3 flex gap-6 items-center h-28">
                    <div className="image h-full">
                        <img className='h-full' src={ui} alt="" />
                    </div>
                    <div className="contant">
                        <h3 className='text-2xl font-semibold'>UI/UX design</h3>
                        <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card w-3/4 bg-slate-900 mx-auto px-3 py-3 flex h-28 gap-6 items-center">
                    <div className="image h-full">
                        <img className='h-full' src={web} alt="" />
                    </div>
                    <div className="contant">
                        <h3 className='text-2xl font-semibold'>Website design</h3>
                        <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card w-3/4 bg-slate-900 mx-auto px-3 pb-3 flex h-28 gap-6 items-center">
                    <div className="image h-full">
                        <img className='h-full' src={app} alt="" />
                    </div>
                    <div className="contant">
                        <h3 className='text-2xl font-semibold'>App design</h3>
                        <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About