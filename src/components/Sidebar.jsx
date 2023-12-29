import React from 'react'
import person from '../assets/person.avif'
import { FaHome } from "react-icons/fa";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";
import { AiFillSchedule } from "react-icons/ai";
import { TbLogout2 } from "react-icons/tb";


const Sidebar = () => {
    return (
        <>
            <div className='w-full h-full bg-[#EBE8F9] py-12' >
                <div className='flex flex-col gap-2 items-center'>
                    <img src={person} className='w-16 h-16 object-cover rounded-full' alt="" />
                    <h1 className='font-extrabold text-2xl'>John Doe</h1>
                </div>
                <div className='flex flex-col justify-between h-[78vh] items-center pt-16 pb-4'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-3 items-center'>
                            <FaHome className='text-2xl' />
                            <h1 className='text-2xl font-bold font-mono'>Overview</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <PiStudentBold className='text-2xl' />
                            <h1 className='text-2xl font-bold font-mono'>Students</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <PiChalkboardTeacherFill className='text-2xl' />
                            <h1 className='text-2xl font-bold font-mono'>Teachers</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <AiFillSchedule className='text-2xl' />
                            <h1 className='text-2xl font-bold font-mono'>Schedule</h1>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center bg-gray-400 p-3 rounded-lg'>
                        <TbLogout2 className='text-2xl' />
                        <h1 className='text-2xl font-bold font-mono'>LogOut</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
