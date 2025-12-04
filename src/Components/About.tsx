import Navbar from './Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="ml-64 p-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Hello, my name is Nivesh Shrestha</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              This project is my submission for the FZTPL Junior Frontend Developer (ReactJS) Technical/Domain Round. For this assignment, I built a React application that fetches user data from the public API <span className="font-semibold">"https://jsonplaceholder.typicode.com/users"</span> and displays it in a clean, structured, and responsive interface.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              I implemented a real-time search/filter feature to instantly update the results, and the project demonstrates key React concepts such as useState, useEffect, proper component organization, and reusable UI elements. I also added a loading indicator and error handling to ensure a smooth user experience.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              The application runs without issues in both the local environment and CodeSandbox. All required files, links, and the README have been included as instructed.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About