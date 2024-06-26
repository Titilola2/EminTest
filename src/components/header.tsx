
import React, {useState} from 'react';
import search from '../assets/search.svg';

interface Tab {
  label: string;
  content: React.ReactNode;
}


 


const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const tabs: Tab[] = [
    { label: 'All', content: <div> </div> },
    { label: 'Today companies', content: <div> </div> },
    { label: 'Done ', content: <div> </div> },
    { label: 'Pending', content: <div> </div> },
    { label: 'Paid', content: <div> </div> },
    { label: 'Waiting', content: <div> </div> },
    { label: 'Canceled', content: <div> </div> },
    { label: 'Delivered', content: <div> </div> },
    { label: 'Returned', content: <div> </div> },
    { label: 'Branch', content: <div> </div> },
    { label: 'Companies on the way', content: <div> </div> },
  ];


 


  const handleClick = (label: string) => {
    setActiveTab(label);
  };





  return (
    <div className="flex flex-col w-screen  ">
 
  
    <div className="top flex flex-col w-full">
  <div className="flex items-center border-b border-gray-200 justify-around">
    {tabs.map((tab) => (
      <button
        key={tab.label}
        className={`px-3 pt-2 text-gray-400 hover:text-gray-900 mt-2 ${
          activeTab === tab.label ? 'border-b-2 border-black font-bold text-gray-900' : ''
        }`}
        onClick={() => handleClick(tab.label)}
      >
        {tab.label}
      </button>
    ))}
  </div>
  <div className="p-4">
    {tabs.find((tab) => tab.label === activeTab)?.content}
  </div>
</div>


    <header className=" bottom py-2 text-white -mt-4">

    <div className="flex flex-row justify-between items-center px-6 py-4  text-white h-16">
      <div className="flex  flex-row items-center space-x-4 w-1/2">
           
        <input
          type="text"
          placeholder= " Search By Company Number..."
          className="px-4 py-2 border text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-1/2 h-12"
        />
      
        

       
        <div className="flex items-center ">
       <label className="text-xs text-white mr-2 ">Sort By</label>
        <select className="px-2 py-1 bg-blue-900 border items-center rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs h-12 w-24 lg:32 ">
         <option value="all">Sort By</option>
        </select>
       </div>

      </div>
 
      <button className="px-3 py-2 bg-blue-900 text-white rounded-md text-sm h-14 mr-4 w-48">
        + Add Company
      </button>
    </div>
      </header>
   
  </div>
  );
};

export default Header;
