import React from 'react'

type Props = {}

const EndSection = (props: Props) => {
    return (
        <div>
            <div style={{background: "linear-gradient(90deg, rgba(33,37,41,1) 0%, rgba(0,0,0,1) 100%)"}} className="h-screen w-full"></div>
            <div className='bg-white py-32'>
                <p className='text-[#2A266A] text-center max-w-[750px] mx-auto text-lg'>
                Together, let’s create something extraordinary. Your vision, our expertise—bound by innovation and passion. Let’s bring your ideas to life and make an impact that lasts.
                </p>
            </div>
        </div>
    )
}

export default EndSection