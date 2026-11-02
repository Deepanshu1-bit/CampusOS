import { PencilLine, } from 'lucide-react'

export default function ProfilePage() {

  // const StudentData = {
  //   Full_Name: 'Priya Sharma',
  //   Date_Of_Birth: '14 March 2004',
  //   Gender: 'Female',
  //   Blood_Group: 'B+',
  //   Email_Address: 'priya.sharma@college.edu',
  //   Phone_Number: '+919876543210',
  //   Address: '123 Green Park, New Delhi, 110016',
  //   Nationality: 'Indian'
  // }

  const StudentData = [
    { Full_Name: 'Priya Sharma' },
    { Date_Of_Birth: '14 March 2004' },
    { Gender: 'Female' },
    { Blood_Group: 'B+' },
    { Email_Address: 'priya.sharma@college.edu' },
    { Phone_Number: '+919876543210' },
    { Address: '123 Green Park, New Delhi, 110016' },
    { Nationality: 'Indian' }
  ]

  const AcademicDetails = [
    { Course: "B.Tech in Computer Science" },
    { Student_ID: "2023CS1042" },
    { Current_Year: "2nd Year" },
    { Semester: "4th Semester" }
  ];

  const ContactInformation = [
    { Email_Address: "priya.sharma@college.edu" },
    { Phone_Number: "+91 98765 43210" },
    { Address: "123 Green Park, New Delhi, 110016" },
    { Emergency_Contact: "+91 98765 43211" }
  ];
  return ( 
    <div className="borde min-h-screen bg-[#f3f5f1] flex flex-col gap-5 w-full shrink-0 px-4 pt-7 pb-20 sm:px-6 lg:px-8 lg:py-7 overflow-hidden">
      <div className="borde flex justify-between items-center">
        <div className="borde shrink-0">
          <h1 className="borde text-2xl font-bold text-[#111c16] sm:text-2xl">
            Profile
          </h1>

          <p className="borde mt-1 text-sm text-[#849088]">
            Your personal and academic details.
          </p>
        </div>
      </div>
      <div className='borde border-red-500 bg-white rounded-xl p-5 flex flex-col  items-end'>
        <div className="flex items-center bg-white rounded-lg p-1 gap-2 text-[10px] shrink-0 border-2 text-gray-400 border-gray-300 md:text-[12px] md:font-semibold">
          <PencilLine className='size-3 md:size-4' />Edit Profile
        </div>
        <div className='borde border-blue-600 w-full  flex flex-col gap-5 md:flex-row md:justify-between md:mt-5'>
          <div className='borde  flex flex-col gap-5 items-center justify-center md:flex-row  '>
            <div className="flex size-25 items-center justify-center rounded-full bg-[#d7e8dc] text-[30px] font-bold text-[#47765c] md:size-25 md:text-4xl">
              PS
            </div>

            <div className="borde border-green-500 flex flex-col  items-center md:items-start">
              <p className="text-[20px] font-bold">
                Priya Sharma
              </p>
              <p className="text-[12px] md:text-[14px] text-[#5c6a66]">
                B.Tech in Computer Science
              </p>
              <p className="text-[12px] md:text-[14px] text-[#5c6a66]">
                Student ID: 2023CS1042 · 2nd Year
              </p>
              <div className=' p-1 px-2 font-semibold text-[10px] text-[#47765c] bg-[#d7e8dc] rounded-2xl mt-2 flex items-center gap-1'><p className=' p-1 rounded-full bg-[#0afa76]' />Active</div>
            </div>

          </div>
          <div className='borde flex-col  pt-5 pl-5 pb-10 gap-15 hidden bg-[#d7e8dc] rounded-xl md:flex md:w-70 lg:w-85'>
            <p className='font-bold text-[#0e1a14] text-xl'>“Curious mind,<br />
              brighter future.”</p>
            <p className='border-2 w-10 border-[#A8C2B3]'></p>
          </div>
        </div>
      </div>
      <div className='borde flex gap-3 sm:gap-4 md:gap-5 '>
        <p className='rounded-t-xl p-2 px-1.5 shrink-0 bg-[#d4e7db] text-[#7c8a85] hover:border-b-2 hover:border-b-[#A8C2B3] text-xs font-semibold md:text-base  md:font-medium'>Personal Details</p>
        <p className='rounded-t-xl p-2 px-1.5 shrink-0 bg-[#d4e7db] text-[#7c8a85] hover:border-b-2 hover:border-b-[#A8C2B3] text-xs font-semibold md:text-base  md:font-medium'>Academic Details</p>
        <p className='rounded-t-xl p-2 px-1.5 shrink-0 bg-[#d4e7db] text-[#7c8a85] hover:border-b-2 hover:border-b-[#A8C2B3] text-xs font-semibold md:text-base  md:font-medium'>Contact Information</p>
      </div>
      <div className='borde bg-white rounded-xl p-5'>
        <div className='borde border-blue-400 grid grid-cols-1 md:gap-x-5 grid-rows-8 md:grid-cols-2 md:grid-rows-4 '>
          {StudentData.map((item, index) => {
            return (<div key={index} className='border-b-2 border-b-[#9fae95] flex justify-between items-center md:gap-10'><p className='text-[#7c8a85] borde font-medium'>{Object.keys(item)}</p><p className='borde w-50 flex justify-start font-medium'>{Object.values(item)}</p></div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
