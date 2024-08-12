import Image from "next/image"
import React from "react"

export default function ServiceCard({ service }) {
    const {title, img, price} = service || {};
    return (

        <>
            <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200" >
                {/*  <!-- Image --> */}
                <figure figure className="p-6 pb-0" >
                    <span className="relative inline-flex items-center justify-center  text-white">
                        <Image
                            src={img}
                            alt={title}
                            title="user name"
                            width={430}
                            height={120}
                            className="max-w-full"
                        />
                    </span>
                </figure >
                {/*  <!-- Body--> */}
                <div div className="p-6" >
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                        {title}
                        </h3>
                        <p className=" text-slate-400">Senior Designer</p>
                    </header>
                </div >
                {/*  <!-- Action base sized with lead icon buttons  --> */}
                <div div className="flex justify-end gap-2 p-6 pt-0" >
                    <span className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
                        <span className="order-2">Price: {price}</span>
                    
                    </span>
                    <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span className="order-2">Buy Now</span>
                      
                    </button>
                </div >
            </div >
        </>
    )
}
