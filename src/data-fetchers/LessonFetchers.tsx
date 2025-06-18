"use server"


import { Lesson } from "@/app/types/Types"
import { API_BASE_URL, CREATE_LESSON_ENDPOINT, LESSONS_GET_MANY_ENDPOINT } from "@/app/constants/ApiEndRoutes"
import axios from "axios"
import { convertLessonDocumentsToObjects, convertLessonDocumentToObject } from "@/app/utils/Helpers"


//Function to fetch many lessons
export const lessonsGetMany = async () : Promise<Lesson[]> => {
    try {
        const getLessonsEndpoint = API_BASE_URL  + LESSONS_GET_MANY_ENDPOINT
        const lessonsData = await axios.get(getLessonsEndpoint)
        const lessons = convertLessonDocumentsToObjects(lessonsData.data)
        return lessons
    } catch (error) {
        console.log(error)
        return []
    }
}


//Function to create lesson
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


//Function to fetch lesson by id
export const lessonGetById = async(lessonId: string): Promise<Lesson> => {
    try {
        const getLessonEndpoint = API_BASE_URL  + LESSONS_GET_MANY_ENDPOINT + `/${ lessonId }`
        const lessonData = await axios.get(getLessonEndpoint)
        const lesson = convertLessonDocumentToObject(lessonData.data)
        return lesson
    } catch (error) {
        console.log(error)
        return {
            id: '',
            title: '',
            summary: '',
            content: '',
            date_created: ''
        }
    }
}