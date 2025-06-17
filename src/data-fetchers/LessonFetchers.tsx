"use server"


import { Lesson } from "@/app/types/Types"
import { API_BASE_URL, LESSONS_GET_MANY_ENDPOINT } from "@/app/constants/ApiEndRoutes"
import axios from "axios"
import { convertLessonDocumentsToObjects } from "@/app/utils/Helpers"




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
