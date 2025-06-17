"use client"

import { TEMP_LESSONS } from "@/app/constants/TempConstants";
import { Lesson } from "@/app/types/Types";
import Link from "next/link";
import useSWR from 'swr'
import { GET_ALL_LESSONS_SWR_HOOK } from "@/app/constants/SwrHooks";
import { lessonsGetMany } from "@/data-fetchers/LessonFetchers";
import { Skeleton } from "../ui/skeleton";

/**
This component represents the list of lessons displayed in the lessons page
 */
export default function LessonCards() {

    const { data, error, isLoading } = useSWR<Lesson[]>(GET_ALL_LESSONS_SWR_HOOK, () => lessonsGetMany());

    return (
                isLoading
                ? <div className='flex flex-row space-x-8 items-center'>
                    <Skeleton className='h-[150px] w-[250px] self-center' />
                    <Skeleton className='h-[150px] w-[250px] self-center' />
                </div>
                : error
                ? <div className='text-paragraph'>Oops! Something went wrong, please try again later.</div>
                : (data?.length === 0)
                ? <div className='text-paragraph'>There is no lesson. Feel free to create one. 😊</div>
                : <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-8 mb-8'>
                    {
                        data?.map((lesson, index) => (
                            <Link className='flex flex-col space-y-2 items-center text-center white-card justify-center' key={ index } href={`lessons/${ lesson.id }`}>
                                <h5 className='text-h5-heading !font-alkalmi'>{ lesson.title }</h5>
                                <p className='text-paragraph'>Created: { lesson.date_created }</p>
                            </Link>
                        ))
                    }
                </div>

    )
}
