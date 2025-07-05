import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

const Header = () => {
    const [expand, setExpand] = useState(false);
    
    const toggleExpand = () => {
        setExpand(!expand);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640) {
                setExpand(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${expand ? "h-48 border-t-4 border-black" : ""} fixed bottom-0 sm:top-0 sm:flex sm:justify-between z-50 w-full h-16 bg-[#D7D7D7] backdrop-filter backdrop-blur-lg bg-opacity-90`}>
            <div className='flex justify-between capitalize text-lg font-semibold py-4 sm:px-10 md:px-16 px-5'>
                <span className={`${expand ? "hidden" : ""} hover:cursor-pointer text-black`}>Utsav</span>
                <button className={`${expand ? "fixed bottom-2 right-2 p-[12px]" : ""} sm:hidden items-center justify-center pt-2 text-black`} onClick={toggleExpand}><IoMenu /></button>
            </div>
            <div className={`sm:flex md:gap-6 sm:gap-4 py-4 text-center md:pr-56 sm:px-16 ${expand ? "grid grid-cols-2" : "hidden"}`}>
                {["Home", "about", "Skill","Experiences", "Projects", "Contact"].map((item, index) => (
                    <div className={`${expand ? "pb-2" : ""} capitalize text-lg font-semibold hover:cursor-pointer text-black hover:text-gray-700`} key={index}>
                        <Link spy={true} smooth={true} offset={0} duration={500} to={`${item.toLowerCase()}`}>{item}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Header;