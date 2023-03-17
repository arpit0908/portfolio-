import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-10"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl sm:mt-20 mt-10">
        I am arpit chauhan ,I belong to new delhi .i am pursuing my graduation in computer science engineering from graphic era hill university,dehradun .
        and i have completed my schooling from Babu bodhraj senoir secondary school delhi.
        talking about my skills i have a good command in c,c++ and web development.
        Currently,I'm working on a project based on web development.some other projects that i have worked on 
        SOCIAL MEDIA SENTIMENTAL ANALYSIS which was based on Machine learning  and HOSTEL MESS MANAGEMENT which 
        was based on full stack development. My carrer objective is to be a web developer.
        my hobbies are cooking , travelling and playing badminton.    </p>

        <br />
      </div>
    </div>
  );
};

export default About;
