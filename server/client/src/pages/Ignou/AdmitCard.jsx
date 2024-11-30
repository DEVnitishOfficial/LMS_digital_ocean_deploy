// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import dnkn from '../../assets/Images/dnkn real.jpg'
import ignou_logo from '../../assets/Images/ignou_logo.png'
import naac_logo from '../../assets/Images/naac_logo.png'
import HomeLayout from '../../Layout/HomeLayout'

const AdmitCard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector((state) => state?.auth?.data)
  return (
    <HomeLayout>
 <div className="p-8 max-w-4xl mx-auto border border-gray-300 bg-white text-black">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        {/* Left Logo */}
        <img
          src={ignou_logo}alt="IGNOU Logo"
          className="w-40 h-40"
        />
        {/* Center Text */}
        <div className="text-center">
          <h1 className="text-xl font-semibold">इंदिरा गांधी राष्ट्रीय मुक्त विश्वविद्यालय</h1>
          <h2 className="text-lg font-semibold">Indira Gandhi National Open University</h2>
          <p className="text-sm">A Central University</p>
          <p className="text-sm">December-2023, Term End Examination (TEE)</p>
          <p className="text-sm">14/11/2023 08:47:44</p>
        </div>
        {/* Right Logo */}
        <img
          src={naac_logo}alt="IGNOU Logo"
          className="w-24 h-24"
        />
      </div>

      {/* Single Table Layout */}
      <div className="w-full overflow-hidden">
        <table className="table-auto w-full border-collapse border border-black mb-4">
          <tbody>
            {/* Row 1: Header (Hall Ticket) */}
            <tr>
              <td colSpan="3" className="text-center border border-black px-4 py-2 font-bold text-lg">
                हॉल टिकट / प्रवेश पत्र / Hall Ticket / Admit Card
              </td>
            </tr>

            {/* Row 2: Enrollment Number and Program Details */}
            <tr>
              <td className="border border-black px-4 py-2 font-semibold">अनुक्रमांक / Enrollment Number:</td>
              <td className="border border-black px-4 py-2">2001147495</td>
              <td rowSpan="6" className="border border-black px-4 py-2 text-center align-top">
                {/* Placeholder for Image */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="border border-black p-2">
                    <img
                      src={userData?.avatar?.secure_url}
                      alt="Student Photograph"
                      className="w-32 h-40"
                    />
                    <p className="text-center text-sm mt-2">Photograph</p>
                  </div>
                  <div className="border border-black p-2">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="QR Code"
                      className="w-20 h-20"
                    />
                    <p className="text-center text-sm mt-2">QR Code</p>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border border-black px-4 py-2 font-semibold">प्रोग्राम कोड / Programme Code:</td>
              <td className="border border-black px-4 py-2">MCOM</td>
            </tr>

            <tr>
              <td className="border border-black px-4 py-2 font-semibold">प्रोग्राम नाम / Programme Name:</td>
              <td className="border border-black px-4 py-2">MCOM</td>
            </tr>

            <tr>
              <td className="border border-black px-4 py-2 font-semibold">परीक्षार्थी का नाम / Name of the Student:</td>
              <td className="border border-black px-4 py-2">{userData?.fullName}</td>
            </tr>

            <tr>
              <td className="border border-black px-4 py-2 font-semibold">परीक्षा केंद्र कोड / Exam Centre Code:</td>
              <td className="border border-black px-4 py-2">32034</td>
            </tr>

            <tr>
              <td className="border border-black px-4 py-2 font-semibold">परीक्षा का प्रकार / Exam Type:</td>
              <td className="border border-black px-4 py-2">Pen and Paper Test</td>
            </tr>

            {/* Row 3: Exam Centre Address */}
            <tr>
              <td colSpan="3" className="border border-black px-4 py-4">
                <div className="font-semibold mb-2">परीक्षा केंद्र का पता / Exam Centre Address:</div>
                <p>IGNOU STUDY CENTRE</p>
                <p>K B WOMEN'S COLLEGE</p>
                <p>HAZARIBAGH, JHARKHAND-825301</p>
              </td>
            </tr>

            {/* Row 4: Exam Time Table */}
            <tr>
              <td colSpan="3" className="border border-black p-4">
                <h4 className="font-semibold mb-2">परिक्षा समय तालिका / Exam Time Table</h4>
                <table className="w-full table-auto border-collapse  ">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Date of Exam</th>
                      <th className="border px-4 py-2">Session</th>
                      <th className="border px-4 py-2">Course Code</th>
                      <th className="border px-4 py-2">Time*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">13/12/2023</td>
                      <td className="border px-4 py-2">Morning</td>
                      <td className="border px-4 py-2">IBO006</td>
                      <td className="border px-4 py-2">10:00 AM - 01:00 PM</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">14/12/2023</td>
                      <td className="border px-4 py-2">Morning</td>
                      <td className="border px-4 py-2">MCO001</td>
                      <td className="border px-4 py-2">10:00 AM - 01:00 PM</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">23/12/2023</td>
                      <td className="border px-4 py-2">Morning</td>
                      <td className="border px-4 py-2">MCO003</td>
                      <td className="border px-4 py-2">10:00 AM - 01:00 PM</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">26/12/2023</td>
                      <td className="border px-4 py-2">Morning</td>
                      <td className="border px-4 py-2">MCO004</td>
                      <td className="border px-4 py-2">10:00 AM - 01:00 PM</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">27/12/2023</td>
                      <td className="border px-4 py-2">Morning</td>
                      <td className="border px-4 py-2">MCO005</td>
                      <td className="border px-4 py-2">10:00 AM - 01:00 PM</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">28/12/2023</td>
                      <td className="border px-4 py-2">Morning</td>
                      <td className="border px-4 py-2">MCO006</td>
                      <td className="border px-4 py-2">10:00 AM - 01:00 PM</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">29/12/2023</td>
                      <td className="border px-4 py-2">Afternoon</td>
                      <td className="border px-4 py-2">MCO007</td>
                      <td className="border px-4 py-2">02:00 PM - 05:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Row 5: Important Notes */}
            <tr>
              <td colSpan="3" className="border border-black p-4">
                <h4 className="font-semibold mb-2">महत्वपूर्ण निर्देश / Important Instructions:</h4>
                <p className="text-sm">1. The candidates must report 30 minutes before the commencement of the exam.</p>
                <p className="text-sm">2. Carry a valid ID proof and this admit card to the exam center.</p>
                <p className="text-sm">3. Use of electronic devices such as calculators, mobile phones is prohibited.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </HomeLayout>
  )
}

export default AdmitCard