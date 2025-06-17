import { TEMP_LESSONS } from "@/app/constants/TempConstants";
import Link from "next/link";

/**
This component represents the list of lessons displayed in the lessons page
 */
export default function LessonCards() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-8'>
            {
                TEMP_LESSONS.map((lesson, index) => (
                    <Link className='flex flex-col space-y-2 items-center text-center white-card justify-center' key={ index } href={`lessons/${ lesson.id }`}>
                        <h5 className='text-h5-heading !font-alkalmi'>{ lesson.title }</h5>
                        <p className='text-paragraph'>Created: { lesson.date_created }</p>
                    </Link>
                ))
            }
        </div>
    )
}
