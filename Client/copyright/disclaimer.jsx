import React from 'react'

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 sm:px-16">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Disclaimer
        </h1>
        
        {/* Disclaimer content */}
        <div className="space-y-8">
          {[
            { title: "General Information", content: "The information provided on the [School Name] website is for general informational purposes only. While we strive for accuracy, we do not guarantee the completeness, reliability, or timeliness of the content. Please verify any details before relying on it." },
            { title: "No Warranties", content: "All information, services, and materials are provided 'as is' without warranties of any kind, either express or implied. [School Name] does not warrant that the website will be uninterrupted, error-free, or free from harmful components." },
            { title: "Limitation of Liability", content: "[School Name] shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, including but not limited to damages for loss of data or profit." },
            { title: "External Links", content: "This website may contain links to third-party websites. These links are provided for convenience only, and [School Name] does not endorse or assume responsibility for the content, accuracy, or privacy practices of external sites." },
            { title: "Personal Responsibility", content: "Users agree that their use of this website is at their own risk. It is their responsibility to verify any information before relying on it." },
            { title: "Changes to This Disclaimer", content: "[School Name] reserves the right to update or modify this Disclaimer at any time without prior notice. Continued use of the website constitutes acceptance of any changes." },
            { title: "Contact Us", content: "If you have any questions regarding this Disclaimer, please contact us at [School Contact Email or Address]." }
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 mb-6 p-8 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h2>
              <p className="text-base text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Disclaimer
