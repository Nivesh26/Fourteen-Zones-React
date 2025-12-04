import Navbar from '../Components/Navbar'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="ml-64 p-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Welcome to My Dashboard</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              I am a <span className="font-semibold">UI/UX Designer</span> and <span className="font-semibold">Frontend Developer</span> with a passion for creating intuitive, user-centered digital experiences. Over the years, I have honed my skills in designing web prototypes, interfaces, logos, and complete visual designs that not only look aesthetically pleasing but also drive meaningful user engagement. My work focuses on combining creative design thinking with practical functionality to ensure every digital product is both visually compelling and highly usable.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              In addition to my design expertise, I have developed strong technical skills in the <span className="font-semibold">MERN Stack</span> (MongoDB, Express.js, ReactJS, Node.js) through my training at Codeed Inc. This enables me to bridge the gap between design and development, turning creative concepts into fully functional web applications. I am proficient in creating responsive and interactive interfaces, implementing modern frontend practices, and ensuring seamless user experiences across devices.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              My goal is to leverage my combined design and development capabilities to build digital products that are not only visually stunning but also technically robust, delivering value to both users and businesses. I thrive in environments where I can collaborate, iterate, and continuously learn to produce solutions that enhance user experience, solve real-world problems, and meet business objectives.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard