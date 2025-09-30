import React from 'react';

const IELTSInstituteHome = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-blue-600 text-xl font-bold">IELTS Institute</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </div>
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Improved Hero Section */}
      <section id="home" className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[60vh]">
            {/* Left: Text Content */}
            <div className="flex-1 text-white text-center lg:text-left max-w-lg lg:max-w-md">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ace Your IELTS with <span className="text-yellow-300">Expert Guidance</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
                Join thousands of students who have achieved their dream band scores. Get personalized coaching, realistic mock tests, and AI-powered feedback tailored just for you.
              </p>
              <button className="bg-yellow-300 text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey Now
              </button>
            </div>

            {/* Right: Image/Banner */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Placeholder Image - Replace with your own (e.g., local import or URL) */}
                <img 
                  src="https://images.shiksha.com/mediadata/images/articles/1740652825phpXTw0HH.jpeg" 
                  alt="Students preparing for IELTS exam"
                  className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover border-4 border-white/20"
                />
                {/* Optional: Decorative badge on image */}
                <div className="absolute -top-4 -right-4 bg-yellow-300 text-blue-800 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  100% Success Rate
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Subtle wave divider at bottom for modern feel */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white opacity-20">
            <svg viewBox="0 0 1440 320" className="w-full h-full fill-current text-white">
              <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section (unchanged for brevity) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Speaking Practice</h3>
              <p className="text-gray-600">Interactive sessions with certified trainers to boost your fluency and confidence.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mock Tests</h3>
              <p className="text-gray-600">Realistic IELTS simulations with detailed analysis to track your progress.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">AI Band Score</h3>
              <p className="text-gray-600">Instant feedback from our advanced AI to predict and improve your band score.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (unchanged) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">“It would be great if the institute could include more interactive teaching methods, such as group projects or case studies.”</p>
              <p className="font-bold text-blue-600">- Sarah L., UK</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">“The institute provides a supportive learning environment where teachers are approachable and dedicated to student success.”</p>
              <p className="font-bold text-blue-600">- Raj K., India</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">“The institute regularly conducts workshops and seminars that keep students updated with industry trends.”</p>
              <p className="font-bold text-blue-600">- Emily T., USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (unchanged) */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">IELTS Pro</h4>
              <p className="text-gray-300">Your pathway to IELTS success. Expert coaching for Academic and General Training.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-300 hover:text-white">Home</a>
                <a href="#courses" className="block text-gray-300 hover:text-white">Courses</a>
                <a href="#about" className="block text-gray-300 hover:text-white">About</a>
                <a href="#contact" className="block text-gray-300 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>Email: info@ieltspro.com</p>
                <p>Phone: +1-234-567-8900</p>
                <p>Address: 123 IELTS St, Edu City</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-300">
            <p>&copy; 2023 IELTS Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IELTSInstituteHome;
