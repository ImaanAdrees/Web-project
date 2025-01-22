import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  return (
    <>
      

      <div className="bg-orange-500 py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl">About Us</h1>
          <p className="mt-6 text-xl text-black">
            We are a passionate team dedicated to providing the best solutions to our clients.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-black">Our Mission</h2>
          <p className="mt-4 text-lg text-black">
            Our mission is to create innovative and efficient solutions that empower businesses and individuals.
          </p>
        </div>

        <div className="mt-16 bg-softcream shadow-lg rounded-lg px-8 py-12 sm:px-16">
          <h3 className="text-2xl font-bold text-black text-center">Meet the Team</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Image width={100} height={100}
                src="/images/team-member-1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-black">Imaan Adrees</h4>
              
            </div>
            <div className="flex flex-col items-center">
              <Image width={100} height={100}
                src="/images/team-member-2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-black">Maria Zaman</h4>
              
            </div>
            <div className="flex flex-col items-center">
              <Image width={100} height={100}
                src="/images/team-member-3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-black">Ayesha Afzal</h4>
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

