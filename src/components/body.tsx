

import React from 'react';
import { Checkbox, Table } from "flowbite-react";
import bell from '../assets/bell.svg';
import clip from '../assets/clip.svg';
import mamoh from '../assets/mamoh.svg';
import Dhl from '../assets/Dhl.svg';
import FedEx from '../assets/FedEx.svg';
import Paginate from './paginate';
import { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";


function Body() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };



  return (
    <div className="flex flex-col">

    <div className="ml-4 w-screen">
      <Table hoverable>
       
        <Table.Head className="h-16 bg-gray-100">
  <Table.HeadCell className="p-2 w-auto">
    <Checkbox />
  </Table.HeadCell>
  <Table.HeadCell className="text-blue-900 px-4 w-1/5">COMPANY</Table.HeadCell>
  <Table.HeadCell className="text-blue-900 px-4 w-1/5">LOCATION</Table.HeadCell>
  <Table.HeadCell className="text-blue-900 px-4 w-1/5">NUMBER WORKING</Table.HeadCell>
  <Table.HeadCell className="text-blue-900 px-4 w-1/5">Status</Table.HeadCell>
  <Table.HeadCell className="text-blue-900 px-4 w-1/5">Actions</Table.HeadCell>
  <Table.HeadCell className="px-4 w-auto">
    <span className="sr-only">Edit</span>
  </Table.HeadCell>
      </Table.Head>

        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 h-16 ">
            <Table.Cell className="p-2 w-auto">
              <Checkbox />
            </Table.Cell>
            <div className="flex flex-row w-1/5">
            <div className="w-10 h-10 mt-4 rounded-lg border border-stone-200  flex">
              <a href="Message" className=" items-center "></a>
            <img className="w-screen " src={mamoh} />
                </div>
            <Table.Cell className="whitespace-nowrap font-medium text-blue-900 pr-20">
              {'Momoh Delivery'}
             <p className="text-cyan-400 text-xs"> {'super admin'}</p>
            </Table.Cell> 
            </div>
            
            <Table.Cell className= " text-white px-4 w-w/5">
            <button className="px-2 py-2 bg-blue-900 text-white rounded-md flex flex-row gap-2 ">
              <div className="text-[10px]">
            View on Google Maps
            </div>
            <img className="w-5  rounded-md  " src={clip} />
           </button>
              </Table.Cell>
            <Table.Cell className= " text-blue-900 px-20">3936</Table.Cell>
            <Table.Cell className= " text-blue-900 px-20">
              <button className="px-4 py-2 bg-green-100 text-green-900 rounded-full">Active
                </button>
                </Table.Cell>
            <Table.Cell>
              <div className=" px-20  ">
                 <BsThreeDotsVertical />
              </div>
            
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-300  ">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <div className="flex flex-row">
            <div className="w-10 h-10  mt-4 rounded-lg border border-stone-200  flex">
              <a href="Message" className=" items-center "></a>
            <img className="w-screen  " src={Dhl} />
                </div>
            <Table.Cell className="whitespace-nowrap font-medium text-blue-900 pr-20">
              Dhl Delivery
              <p className="text-cyan-400 text-xs"> {'company owner'}</p>
            </Table.Cell>
            </div>
            <Table.Cell className= " text-blue-900 px-12"> 
            <button className="px-2 py-2 bg-blue-900 text-white rounded-md flex flex-row gap-2 ">
              <div className="text-[10px]">
            View on Google Maps
            </div>
            <img className="w-5  rounded-md  " src={clip} />
           </button>
         </Table.Cell>
            <Table.Cell className= " text-blue-900 px-20">3936</Table.Cell>
            <Table.Cell className= " text-blue-900 px-20">
              <button className="px-4 py-2 bg-green-100 text-green-900 rounded-full">Active
                </button></Table.Cell>
            <Table.Cell>
            <div className=" px-20  ">
                 <BsThreeDotsVertical />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-300 h-16 ">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
             <div className="flex flex-row">
             <div className="w-10 h-10 mt-4 rounded-lg border border-stone-200  flex">
              <a href="Message" className=" items-center "></a>
            <img className="w-screen  " src={FedEx} />
                </div>
            <Table.Cell className="whitespace-nowrap font-medium text-blue-900 pr-20">Fedex Delivery
            <p className="text-cyan-400 text-xs"> {'manager'}</p>
            </Table.Cell>
            </div>
            <Table.Cell className= " text-blue-900 px-12"> 
            <button className="px-2 py-2 bg-blue-900 text-white rounded-md flex flex-row gap-2 ">
              <div className="text-[10px]">
            View on Google Maps
            </div>
            <img className="w-5  rounded-md  " src={clip} />
           </button>
         </Table.Cell>
            <Table.Cell className= " text-blue-900 px-20">3936</Table.Cell>
            <Table.Cell className= " text-blue-900 px-20">
              <button className="px-4 py-2 bg-green-100 text-green-900 rounded-full">Active
                </button></Table.Cell>
            <Table.Cell>
            <div className=" px-20  ">
                 <BsThreeDotsVertical />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-300  h-16">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <div className="flex flex-row">
            <div className="w-10 h-10  mt-4 rounded-lg border border-stone-200  flex">
              <a href="Message" className=" items-center "></a>
            <img className="w-screen  " src={mamoh} />
                </div>
            <Table.Cell className="whitespace-nowrap font-medium text-blue-900 pr-20">Momoh Delivery
            <p className="text-cyan-400 text-xs"> {'super admin'}</p>
            </Table.Cell>
            </div>
            <Table.Cell className= " text-blue-900 px-12">  
            <button className="px-2 py-2 bg-blue-900 text-white rounded-md flex flex-row gap-2 ">
              <div className="text-[10px]">
            View on Google Maps
            </div>
            <img className="w-5  rounded-md  " src={clip} />
           </button>
         </Table.Cell>
            <Table.Cell className= " text-blue-900 px-20">3936</Table.Cell>
            <Table.Cell className= " text-blue-900 px-20">
              <button className="px-4 py-2 bg-green-100 text-green-900 rounded-full">Active
                </button></Table.Cell>
            <Table.Cell>
            <div className=" px-20  ">
                 <BsThreeDotsVertical />
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>

    

     <div>
      {/* Your content here */}
      <Paginate
        currentPage={currentPage}
        totalPages={4}
        onPageChange={handlePageChange}
      />
    </div>

    </div>
  );
}

export default Body;





