import React from 'react'

const Newslatter = () => {
    return (
        <>
            <section className="bg-gray-50 mt-20">
                <div className="container mx-auto md:px-20 py-16 text-center">
                    <h1 className='font-semibold text-3xl'>Subscribe Newslatter</h1>
                    <div className="py-4">
                        <input type="text" className="shadow border rounded w-9/12 p-3 text-gray-700 focus:outline-none focus:shadow-md" placeholder="Enter your email" />
                    </div>
                    <button className="bg-orange-400 px-20 py-4 rounded-full text-gray-50 text-xl">Subscribe</button>
                </div>
            </section>
        </>
    )
}

export default Newslatter