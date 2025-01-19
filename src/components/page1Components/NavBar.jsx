import React from 'react';
import { BsArrowRight } from "react-icons/bs";




const NavBar = () => {
    return (

        <nav className="bg-blue-400 p-4">
            
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-bold">AIDEA</div>
                <ul className="flex space-x-4">
                    <li><a href = "/carriculum" id='carriculum' className="text-white tracking-tighter text-xl hover:text-gray-300">Carriculum</a></li>
                    <li><a href="/reviews" id='' className="text-white tracking-tighter text-xl hover:text-gray-300">Reviews</a></li>
                    <li><a href="#" id='' className="text-white tracking-tighter text-xl hover:text-gray-300">Fee</a></li>
                    <li><a href="/faq" id='' className="text-white tracking-tighter text-xl hover:text-gray-300">FAQs</a></li>
                    <li><a href="#" id='' className="text-white tracking-tighter text-xl hover:text-gray-300"><div className='flex gap-1 text-slate-600 font-sans'>Login <div className='py-1.5' ><BsArrowRight /></div></div></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;