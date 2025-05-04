import React from 'react'


const Portfolio = () => {
    return (
        <section className="portfolio  bg-black text-white pb-5 pt-14 flex flex-col gap-10 flex-">
            <div className="text flex flex-col gap-10 text-center xl:px-60 md:px-20 sm:px-10 px-5 ">
                <h2 className='text-3xl font-semibold'>My portfolio</h2>
                <p className='text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit similique consectetur possimus ad. Non sint, at asperiores illum cumque hic doloremque, qui veritatis quia voluptates placeat deserunt fugiat. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="cards flex gap-20 px-20 justify-center flex-wrap py-5">
                <div className="card w-52 bg-slate-900 py-3 flex gap-6 items-center h-72 rounded-2xl">

                </div>
                <div className="card w-52 bg-slate-900 px-3 py-3 flex gap-6 items-center h-72 rounded-2xl">

                </div>
                <div className="card w-52 bg-slate-900 px-3 py-3 flex h-72 gap-6 items-center rounded-2xl">

                </div>
                <div className="card w-52 bg-slate-900 px-3 py-3 flex h-72 gap-6 items-center rounded-2xl">

                </div>
                <div className="card w-52 bg-slate-900 px-3 py-3 flex h-72 gap-6 items-center rounded-2xl">

                </div>
                <div className="card w-52 bg-slate-900 px-3 py-3 flex h-72 gap-6 items-center rounded-2xl">

                </div>
            </div>

            <button className='bg-slate-200 text-black flex py-2 px-6 rounded-3xl items-center gap-3 w-fit mx-auto border-2 mb-3 sm:mb-0 hover:invert border-transparent hover:border-gray-900 hover:bg-transparent'>See More</button>

        </section>
    )
}

export default Portfolio