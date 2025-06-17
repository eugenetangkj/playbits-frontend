"use server"


import { Lesson } from "@/app/types/Types"
import { API_BASE_URL, CREATE_LESSON_ENDPOINT, LESSONS_GET_MANY_ENDPOINT } from "@/app/constants/ApiEndRoutes"
import axios from "axios"
import { convertLessonDocumentsToObjects } from "@/app/utils/Helpers"
import { create } from "domain"




//Function to fetch many polls
export const lessonsGetMany = async () : Promise<Lesson[]> => {
    try {
        const getLessonsEndpoint = API_BASE_URL  + LESSONS_GET_MANY_ENDPOINT
        const lessonsData = await axios.get(getLessonsEndpoint)
        const ongoingPolls = convertLessonDocumentsToObjects(lessonsData.data)
        return ongoingPolls
    } catch (error) {
        return []
    }
}


//Function to create poll
export const lessonCreate = async(content: string): Promise<string> => {
    try {
        const createLessonEndpoint = API_BASE_URL + CREATE_LESSON_ENDPOINT
        const lessonData = await axios.post(createLessonEndpoint, {
            "content": content
        })
        return lessonData.data.lesson_title
    } catch (error) {
        console.log(error)
        return ''
    }
}