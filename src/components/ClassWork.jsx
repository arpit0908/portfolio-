import React from 'react'
import Iframe from 'react-iframe'

const Week = ()=>{
  return (
    <div className=''>
     <p className="text-3xl font-bold inline border-b-4 border-gray-500 ">
      Week
     </p>
     <div className='my-5 flex flex-col gap-4 '>
      <div> 
        <h1 className='font-bold'>Week 1</h1>
        <div>In first class our career teacher Mr. VISHAL CHABBRA sir tell about Simple Introduction. In which we have to tell our name , hobby  , why btech cse ? and our aim .</div>
      </div>
      <div> 
        <h1 className='font-bold'>Week 2</h1>
        <div>In the second class we were taught about the two forms of introduction that we can give in our placement interviews depending upon the amount of time that is being given to every candidate for their personal interview process and also whether the interview is purely technical or a mixture of technical and hr.
First form of introduction is the one where we give the interviewer a brief idea about ourself such as name,hobbies,objective,projects etc 

Second form of introduction is the one where we have to give our detailed information to the interviewer with name,objective,projects,skills,research papers,internships etc.

At last we were asked to preapare our introductions as an assignment for next week</div>
      </div>
     </div>

  </div>
  )
}


const Blog = ({ title, description }) => {

  return (
    <div className="  " >
      {/* <div className='font-semibold'>{title}</div>
      <div className='font-medium'>{description} </div> */}
      {/* <Iframe url="https://www.youtube.com/embed/Cx11IUh1JNA"
        width="540px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative" /> */}


    </div>
  )
}



const Assignment = () => {
  return (
    <div className=''>
    <p className="text-3xl font-bold inline border-b-4 border-gray-500 ">
      Assignment
    </p>

    <div className='my-3 flex gap-4  flex-col '>
      <div>
        <div className='font-bold'>Movie Review</div>
        <div className='font-bold'>Movie title : The Pursuit of Happyness</div>
        <div className='font-bold'>My Favourite dialogue and why? </div>
        <div className=''>

          "The world is your Oyster.It is upto you to find your pearls"

          The reason why I liked this dialouge is because it is relatable in a number of ways.Everyone can be successfull in their life and acheive their dream we might have to deal with hardships,failures and sadness in our journey to reach our goal but if we don't stop trying one day we will surely get the result of our efforts.We are responsible for our actions the decisions that we make and these decisions and choices lead us to what we end up achieving.Everything that we do has an impact on our future.
        </div>
        </div>
        <div>


          <div>
            <div className='font-bold'> My personal Review </div>


            I don't usually watch this kind of movie but it definately made a place in my heart.It taught me about how you look at things can change your life.In todays time when we get stressed out by even the little things that we can't figure out this movie delivered a story to it's audience which inspired them to change their perspective of dealing with problems and being gratefull for what we have.When you watch this movie you relate it with yourself, the efforts our parents make to provide us with the best that they could and how they never show their sadness to us no matter what problems they are facing.



            I don't usually watch this kind of movie but it definately made a place in my heart.It taught me about how you look at things can change your life.In todays time when we get stressed out by even the little things that we can't figure out this movie delivered a story to it's audience which inspired them to change their perspective of dealing with problems and being gratefull for what we have.When you watch this movie you relate it with yourself, the efforts our parents make to provide us with the best that they could and how they never show their sadness to us no matter what problems they are facing.
          </div>
        </div>
        <div>
          <div className='font-bold'>
            Learning to take away from the movie </div>
          <div>
            Always have a positive approach towards every situation that you face. No  matter how bad things turn out we should never give up on the things and people we love.

            Finding happiness in the little things of our life is important and we should be grateful for what we have. We might have to face some extremly bad conditions in our life but we should be prepared mentally to overcome that situation and move forward and make our best efforts to make situation better for us and our loves ones.
          </div>
        </div>

      </div>



   </div>
  )
}

const ClassWork = () => {
  return (

    <div
      name="ClassWork"
      className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white py-10"
    >
      <div className="flex flex-col p-4 justify-center gap-8  max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            ClassWork
          </p>
          <p className="py-6"></p>
        </div>
           <Week/>
           <Assignment/>
          <div className=''>
            <p className="text-3xl font-bold inline border-b-4 border-gray-500">
              Blogs
            </p>
            <div>
              <Blog title="Introduction" description="my nme is Arpit" />
            </div>
          </div>

        </div>

      </div>
  

      )
}

 export default ClassWork;

{/* 
// <Blog week="1"  title="Introduction" description="My introduction"  />
// <Blog week="1"  title="Introduction" description="My introduction"  />
// <Blog week="1"  title="Introduction" description="My introduction"  />


// Assignment(Movie Review)
// Movie Title:
// The Pursuit of Happyness */}
