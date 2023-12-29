import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TableData from '../components/Table';
import { CgMenuLeft } from 'react-icons/cg';
import { IoClose } from "react-icons/io5";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [small, setSmall] = useState(true)

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setVisible(true);
        setSmall(false) // Show sidebar if the window width is larger than 768px (adjust this breakpoint as needed)
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Check initial window size
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex h-screen w-full">
        <div className="md:w-[20%] w-[50%] absolute md:relative">
          <div className="md:hidden block">
            <CgMenuLeft onClick={handleToggle} className="absolute z-50 w-12 h-12" />

          </div>
          <div className={`${visible ? 'block ' : 'hidden absolute'} `}>
            <Sidebar />
          </div>
        </div>
        <div className="md:w-[80%] w-[97%]">
          <div className="my-4">
            <h1 className="text-5xl font-bold text-center">DashBoard</h1>
          </div>
          <TableData />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
