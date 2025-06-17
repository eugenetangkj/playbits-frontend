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
                <h2 className='text-h2-heading !font-alkalmi'>Lessons</h2>
                <h6 className='text-h6-heading'>Browse through the lessons created with flashcards, games, and a quiz.</h6>
            </div>

            {/* Lesson cards */}
            <LessonCards />


            {/* Image */}
             <Image src='/assets/lessons/orange-shape.svg' className='px-8 w-[200px] sm:w-[240px] md:w-[300px] -mb-10 self-end' alt='Brown Shape' width={ 43 } height={ 32 } />


        </div>
    )
}
