'use client'
import { PencilLine, } from 'lucide-react'
import { useState } from 'react';

export default function ProfilePage() {

  const Personal_Details = [
    { Full_Name: 'Priya Sharma' },
    { Date_Of_Birth: '14 March 2004' },
    { Gender: 'Female' },
    { Blood_Group: 'B+' },
    { Email_Address: 'priya.sharma@college.edu' },
    { Phone_Number: '+919876543210' },
    { Address: '123 Green Park, New Delhi, 110016' },
    { Nationality: 'Indian' }
  ]

  const Academic_Details = [
    { Course: "B.Tech in Computer Science" },
    { Student_ID: "2023CS1042" },
    { University: "Delhi University" },
    { College_Name: "ABC Institute of Technology" },
    { Current_Year: "2nd Year" },
    { Semester: "4th Semester" },
    { Admission_Year: "2023" },
    { Enrollment_Status: "Active" }
  ];
  const Contact_Information = [
    { Email_Address: "priya.sharma@college.edu" },
    { Phone_Number: "+91 98765 43210" },
    { Address: "123 Green Park, New Delhi, 110016" },
    { City: "New Delhi" },
    { State: "Delhi" },
    { Country: "India" },
    { Emergency_Contact: "+91 98765 43211" },
    { Guardian_Name: "Rajesh Sharma" }
  ];
  const filters = ['Personal Details', 'Academic Details', 'Contact Information']
  const [activeTab, setActiveTab] = useState('Personal Details')

  return (
    <div className="min-h-screen bg-[#f3f5f1] flex flex-col gap-5 w-full shrink-0 px-4 pt-7 pb-20 sm:px-6 lg:px-8 lg:py-7 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="shrink-0">
          <h1 className="text-2xl font-bold text-[#111c16] sm:text-2xl">
            My Profile
          </h1>

          <p className="mt-1 text-sm text-[#849088]">
            Your personal and academic details
          </p>
        </div>
      </div>
      <div className='bg-white shadow-xl rounded-xl p-5 flex flex-col items-end'>
        <div className="flex items-center bg-white rounded-lg p-1 gap-2 text-[11px] shrink-0 border-2 text-[#111c16] border-gray-300 font-semibold md:text-xs">
          <PencilLine className='size-3 md:size-4' />Edit Profile
        </div>
        <div className='w-full flex flex-col gap-5 md:flex-row md:justify-between md:mt-5'>
          <div className='flex flex-col gap-5 items-center justify-center md:flex-row  '>
            <div className="shadow-xl flex size-25 items-center justify-center rounded-full bg-[#d7e8dc] text-[30px] font-bold tracking-wide text-[#47765c] md:size-25 md:text-4xl">
              PS
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg font-bold leading-tight text-[#111c16] md:text-xl">
                Priya Sharma
              </p>
              <p className="text-xs leading-5 text-[#77847d] md:text-[13px]">
                B.Tech in Computer Science
              </p>
              <p className="text-xs leading-5 text-[#77847d] md:text-[13px]">
                Student ID: 2023CS1042 · 2nd Year
              </p>
              <div className='p-1 px-2 shadow-xl font-semibold text-[10px] text-[#347653] bg-[#d7e8dc] rounded-2xl mt-2 flex items-center gap-1'>
                <p className='p-1 rounded-full bg-[#0afa76]' />Active
              </div>
            </div>

          </div>
          <div className='shadow-xl flex-col pt-5 pl-5 pb-10 gap-15 hidden bg-[#d7e8dc] rounded-xl md:flex md:w-70 lg:w-85'>
            <p className='font-semibold leading-6 text-[#111c16] text-base'>“Curious mind,<br />
              brighter future.”</p>
            <p className='border-2 w-10 border-[#A8C2B3]'></p>
          </div>
        </div>
      </div>
      <div className='flex gap-3 sm:gap-4 md:gap-5'>{filters.map((item, index) => {
        return (
          <div key={index} className=''>
            <p onClick={() => { setActiveTab(item) }} className={`${(activeTab == item) ? 'border-b-2 border-[#A8C2B3] bg-[#d4e7db] shadow-xl text-[#17231b]' : 'border-b-2 border-white bg-white text-[#77847d] hover:border-b-[#A8C2B3]'} rounded-t-xl p-2 px-1.5 shrink-0 hover:border-b-2 hover:border-b-[#A8C2B3] cursor-pointer text-xs font-semibold md:text-[13px] md:font-medium`}>{item}</p>
          </div>
        )
      })}
      </div>
      <div className='bg-white rounded-xl p-5 shadow-xl'>
        <div className='grid grid-cols-1 md:gap-x-5 grid-rows-8 md:grid-cols-2 md:grid-rows-4 '>
          {(activeTab === 'Personal_Details'
            ? Personal_Details
            : activeTab === 'Academic_Details'
              ? Academic_Details
              : Contact_Information).map((item, index) => {
                return (
                  <div key={index} className='border-b-2 border-b-[#9fae95] flex justify-between items-center h-13'>
                    <p className='text-[#77847d] text-xs font-medium md:text-[13px]'>{Object.keys(item)}</p>
                    <p className='w-50 flex justify-start text-[13px] font-medium text-[#111c16]'>{Object.values(item)}</p>
                  </div>
                )
              })}
        </div>
      </div>
    </div>
  );
}
