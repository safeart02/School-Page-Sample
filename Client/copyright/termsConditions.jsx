import React from 'react'

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 sm:px-16">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Terms and Conditions
        </h1>
        
        {/* Terms and Conditions Content */}
        <div className="space-y-8">
          {[ 
            { title: "1. Introduction", content: "Welcome to [School Name]’s official website. By accessing and using our website, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using the site." },
            { title: "2. Use of Website", content: "This website is intended for students, parents, staff, and visitors seeking information about [School Name]. You agree to use the website lawfully and refrain from any actions that may disrupt its functionality." },
            { title: "3. Intellectual Property", content: "All content, including text, images, logos, and documents, is the property of [School Name] unless otherwise stated. Unauthorized use, reproduction, or distribution of content is prohibited." },
            { title: "4. User Conduct", content: "Users must not engage in activities that:\n\n- Violate any applicable laws or regulations.\n- Disrupt website services or security.\n- Post offensive, misleading, or harmful content." },
            { title: "5. Privacy Policy", content: "Our website follows a Privacy Policy outlining how personal data is collected, used, and protected. By using this site, you agree to our data practices." },
            { title: "6. External Links", content: "This website may contain links to third-party sites. [School Name] is not responsible for the content or policies of external websites." },
            { title: "7. Disclaimer", content: "The information on this website is provided for general purposes only. While we strive for accuracy, [School Name] does not guarantee that all information is up-to-date or error-free." },
            { title: "8. Limitation of Liability", content: "[School Name] shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of this website." },
            { title: "9. Changes to Terms", content: "[School Name] reserves the right to update these Terms and Conditions at any time. Continued use of the website constitutes acceptance of any changes." },
            { title: "10. Contact Information", content: "For questions regarding these Terms and Conditions, please contact us at [School Contact Email or Address]." }
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

export default TermsConditions
