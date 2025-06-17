"use server"


import { Flashcard, Gamecard, Question } from "@/app/types/Types"
import { API_BASE_URL, GET_ALL_FLASHCARDS_BY_LESSON_ID_ENDPOINT, GET_ALL_GAMECARDS_BY_LESSON_ID_ENDPOINT, GET_ALL_QUESTIONS_BY_LESSON_ID_ENDPOINT } from "@/app/constants/ApiEndRoutes"
import axios from "axios"
import { convertFlashcardDocumentsToObjects, convertGamecardDocumentsToObjects, convertQuestionDocumentsToObjects } from "@/app/utils/Helpers"


//Function to fetch flash cards by lesson id
export const fetchFlashCardsByLessonId = async (lessonId: string) : Promise<Flashcard[]> => {
    try {
        const getFlashCardsByLessonIdEndpoint = API_BASE_URL  + GET_ALL_FLASHCARDS_BY_LESSON_ID_ENDPOINT + `/${ lessonId }`
        const flashCardsData = await axios.get(getFlashCardsByLessonIdEndpoint)
        const flashcards = convertFlashcardDocumentsToObjects(flashCardsData.data)
        return flashcards
    } catch (error) {
        return []
    }
}


//Function to fetch game cards by lesson id
export const fetchGameCardsByLessonId = async (lessonId: string) : Promise<Gamecard[]> => {
    try {
        const getGameCardsByLessonIdEndpoint = API_BASE_URL  + GET_ALL_GAMECARDS_BY_LESSON_ID_ENDPOINT + `/${ lessonId }`
        const gameCardsData = await axios.get(getGameCardsByLessonIdEndpoint)
        console.log(gameCardsData.data)
        const gamecards = convertGamecardDocumentsToObjects(gameCardsData.data)
        return gamecards
    } catch (error) {
        return []
    }
}


//Function to fetch questions by lesson id
export const fetchQuestionsByLessonId = async (lessonId: string) : Promise<Question[]> => {
    try {
        const getQuestionsByLessonIdEndpoint = API_BASE_URL  + GET_ALL_QUESTIONS_BY_LESSON_ID_ENDPOINT + `/${ lessonId }`
        const questionsData = await axios.get(getQuestionsByLessonIdEndpoint)
        const questions = convertQuestionDocumentsToObjects(questionsData.data)
        return questions
    } catch (error) {
        return []
    }
}