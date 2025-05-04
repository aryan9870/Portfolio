import React from 'react'

const Clint = () => {
  return (
    <section className="clint  bg-black text-white pb-5 pt-14 flex flex-col gap-10">
            <div className="text flex flex-col gap-10 text-center xl:px-60 md:px-20 sm:px-10 px-5 ">
                <h2 className='text-3xl font-semibold'>My clients</h2>
                <p className='text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit similique consectetur possimus ad. Non sint, at asperiores illum cumque hic doloremque.</p>
            </div>
            <div className="cards flex gap-10 px-20 justify-center flex-wrap py-5">
                <div className="card w-52 bg-slate-900 py-3 flex gap-6 items-center h-20 rounded-md border-gray-500 border">

                </div>
                <div className="card w-52 bg-slate-900 px-3 py-3 flex gap-6 items-center h-20 rounded-md border-gray-500 border">

                </div>
                <div className="card w-52 bg-slate-900 px-3 py-3 flex h-20 gap-6 items-center rounded-md border-gray-500 border">

                </div>
                <div className="card w-52 bg-slate-900 px-3 py-3 flex h-20 gap-6 items-center rounded-md border-gray-500 border">

                </div>
            </div>
        </section>
  )
}

export default Clint