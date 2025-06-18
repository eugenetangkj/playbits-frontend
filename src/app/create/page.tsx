import CreateLessonForm from "@/components/create/CreateLessonForm";
import Image from "next/image";

/**
This component represents the create lesson page
*/
export const metadata = {
    title: "Playbits - Create a Lesson",
    description: "Create a Lesson",
    
};


export default function CreateLesson() {
    return (
        <div className='flex flex-col space-y-16 pt-28 md:pt-36 custom-padding'>
            {/* Heading and subheading */}
            <div className='flex flex-col'>
                <div className='flex flex-row items-center space-x-4'>
                    <h2 className='text-h2-heading !font-alkalmi'>Make it fun to learn!</h2>
                    <Image src='/assets/lessons/blue-shape.svg' className='w-[60] sm:w-[60] md:w-[80] pb-8' alt='Blue Shape with Flashcards' width={ 135 } height={ 102 } />
                </div>
               
                <h6 className='text-h6-heading'>Paste your educational content and we&apos;ll turn it into a fun learning flow with interactive flashcards, flip-and-match games, and fill-in-the-blank challenges — perfect for short attention spans!</h6>
            </div>

            {/* Create form */}
            <CreateLessonForm />

        </div>
    )
}
