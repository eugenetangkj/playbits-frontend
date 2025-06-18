import LessonCards from "@/components/lessons/LessonCards";
import Image from "next/image";

/**
This component represents the lessons page.
*/
export const metadata = {
    title: "Playbits - View All Lessons",
    description: "View all lessons",
    
};



export default function ViewAllLessons() {
    return (
        <div className='flex flex-col space-y-16 pt-28 md:pt-36 custom-padding'>
            {/* Heading and subheading */}
            <div className='flex flex-col'>
                <div className='flex flex-row items-center space-x-4'>
                    <h2 className='text-h2-heading !font-alkalmi'>Lessons</h2>
                    <Image src='/assets/lessons/orange-shape.svg' className='w-[60] sm:w-[60] md:w-[80] pb-8' alt='Orange Shape' width={ 170 } height={ 491 } />
                </div>
                <h6 className='text-h6-heading'>Explore our lessons, each packed with interactive flashcards, flip-and-match games, and fill-in-the-blank challenges designed to make learning fun and effective.</h6>
            </div>

            {/* Lesson cards */}
            <LessonCards />


            {/* Image */}
            {/* <Image src='/assets/lessons/orange-shape.svg' className='px-8 w-[200px] sm:w-[240px] md:w-[300px] self-end' alt='Brown Shape' width={ 43 } height={ 32 } /> */}


        </div>
    )
}
