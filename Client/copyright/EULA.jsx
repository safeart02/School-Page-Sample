import React from 'react'

const EULA = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 sm:px-16">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          End User License Agreement (EULA)
        </h1>
        
        {/* EULA Content */}
        <div className="space-y-8">
          {[ 
            { title: "1. Introduction", content: "This End User License Agreement ('Agreement') is a legal agreement between you ('User') and [School Name] governing the use of our website, software, and any associated services. By accessing or using our platform, you agree to the terms of this Agreement." },
            { title: "2. License Grant", content: "[School Name] grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the website and its content for personal, educational, or non-commercial purposes." },
            { title: "3. Restrictions", content: "You agree not to:\n\n- Modify, distribute, or create derivative works based on the website’s content.\n- Use the website for unlawful activities or in violation of any applicable laws.\n- Attempt to gain unauthorized access to any part of the system.\n- Reverse-engineer, decompile, or disassemble any portion of the website or software." },
            { title: "4. Ownership and Intellectual Property", content: "All content, including text, graphics, logos, and software, is the property of [School Name] or its licensors and is protected by copyright and intellectual property laws." },
            { title: "5. Updates and Modifications", content: "[School Name] reserves the right to update or modify the website, software, and this Agreement at any time. Continued use of the website after modifications constitutes acceptance of the new terms." },
            { title: "6. Termination", content: "[School Name] may terminate this license at any time if the User violates any terms of this Agreement. Upon termination, you must cease all use of the website and its content." },
            { title: "7. Disclaimer of Warranties", content: "The website and associated services are provided 'as is' without warranties of any kind, express or implied. [School Name] does not guarantee uninterrupted access, error-free functionality, or security from potential threats." },
            { title: "8. Limitation of Liability", content: "[School Name] shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or software." },
            { title: "9. Governing Law", content: "This Agreement shall be governed by and interpreted under the laws of [Jurisdiction]. Any disputes arising from this Agreement shall be resolved in the appropriate courts of [Jurisdiction]." },
            { title: "10. Contact Information", content: "For any questions regarding this Agreement, please contact us at [School Contact Email or Address]." }
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h2>
              <p className="text-base text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EULA
