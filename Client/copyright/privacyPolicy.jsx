import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 sm:px-16">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Privacy Policy
        </h1>
        
        {/* Privacy Policy Content */}
        <div className="space-y-8">
          {[ 
            { title: "1. Introduction", content: "[School Name] is committed to protecting the privacy of students, parents, staff, and visitors. This Privacy Policy outlines how we collect, use, and protect personal information on our website." },
            { title: "2. Information We Collect", content: "We may collect the following information when you visit our website:\n\n- Personal details (e.g., name, email, phone number) provided through forms.\n- Browsing data, including IP addresses and cookies.\n- Any other information submitted voluntarily." },
            { title: "3. How We Use Your Information", content: "We use collected information to:\n\n- Provide and improve our services.\n- Respond to inquiries and provide support.\n- Ensure website security and prevent misuse.\n- Comply with legal obligations." },
            { title: "4. Data Protection", content: "We implement security measures to safeguard your personal data. However, we cannot guarantee absolute security due to the nature of online communications." },
            { title: "5. Sharing of Information", content: "We do not sell or share personal information with third parties except:\n\n- When required by law.\n- To trusted service providers assisting in website operations, under strict confidentiality agreements." },
            { title: "6. Cookies and Tracking Technologies", content: "Our website may use cookies to enhance user experience. You can modify your browser settings to decline cookies, though some features may be affected." },
            { title: "7. Third-Party Links", content: "Our website may contain links to external websites. We are not responsible for their content or privacy policies." },
            { title: "8. Children's Privacy", content: "We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have, please contact us for removal." },
            { title: "9. Changes to This Policy", content: "[School Name] reserves the right to update this Privacy Policy at any time. Continued use of the website implies acceptance of any changes." },
            { title: "10. Contact Us", content: "For any privacy-related inquiries, please contact us at [School Contact Email or Address]." }
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

export default PrivacyPolicy
