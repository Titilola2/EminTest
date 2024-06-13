
import React from 'react';
import message from '../assets/message.svg';
import mark from '../assets/mark.svg';
import bell from '../assets/bell.svg';
import User from '../assets/User.svg';
import green from '../assets/green.svg';
import smalldown from '../assets/smalldown.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="  w-screen ">
     


  
  <div className="">
   
  <div className="flex flex-row justify-between items-center mt-4">
  <div className="left">
    <a href="companies" className="text-blue-900 ml-8 text-2xl font-semibold font-['Poppins']">Companies</a>
  </div>

  <div className="right flex flex-row space-x-6">
    <div className="w-12 h-10 p-2 rounded-lg border border-stone-200 flex items-center justify-center">
      <a href="Message" className="items-center"></a>
      <img className="w-4 ml-2" src={message} />
    </div>
    <div className="w-12 h-10 rounded-lg border border-stone-200 flex items-center justify-center">
      <a href="bell" className="flex items-center">
        <img className="w-4 ml-2" src={bell} />
        <img className="w-8 -mt-2" src={mark} />
      </a>
    </div>

    <div className="w-40 p-2 h-16 flex items-center mr-4 -mt-4">
      <div className="relative">
        <img className="w-16" src={User} />
        <img className="w-4 ml-12 -mt-6 absolute bottom-0 right-0" src={green} />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex items-center space-x-2">
          <a href="E" className="text-stone-600 text-sm font-semibold font-['Inter']">Djawad.T</a>
          <img className="w-4" src={smalldown} />
        </div>
        <a href="E" className="text-center text-stone-300 text-sm font-semibold font-['Inter']">Admin</a>
      </div>
    </div>
  </div>
</div>


  </div>
     
    </nav>
  );
};

export default Navbar;
