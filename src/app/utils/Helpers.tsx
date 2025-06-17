import { Lesson, Flashcard, Gamecard, Question } from "../types/Types"


//Convert one lesson document to one Lesson object
export const convertLessonDocumentToObject = (lessonDocument: any) : Lesson => {
    return {
        id: lessonDocument.id,
        title: lessonDocument.title,
        summary: lessonDocument.summary,
        content: lessonDocument.content,
        date_created: lessonDocument.date_created
    }
}


//Convert lesson documents to Lesson objects
export const convertLessonDocumentsToObjects = (lessonDocuments: any[]) : Lesson[] => {
    return lessonDocuments.map(lesson => ({
        id: lesson.id,
        title: lesson.title,
        summary: lesson.summary,
        content: lesson.content,
        date_created: lesson.date_created
    }))
}


//Convert flashcard documents to Flashcard objects
export const convertFlashcardDocumentsToObjects = (flashcardDocuments: any[]) : Flashcard[] => {
    return flashcardDocuments.map(flashcard => ({
        id: flashcard.id,
        lesson_id: flashcard.lesson_id,
        front_content: flashcard.question,
        back_content: flashcard.answer,
    }))
}


//Convert gamecard documents to Gamecard objects
export const convertGamecardDocumentsToObjects = (gamecardDocuments: any[]) : Gamecard[] => {
    return gamecardDocuments.map(gamecard => ({
        id: gamecard.id,
        lesson_id: gamecard.lesson_id,
        content: gamecard.content,
        pair_number: gamecard.pair_number,
    }))
}


//Convert question documents to Question objects
export const convertQuestionDocumentsToObjects = (questionDocuments: any[]) : Question[] => {
    return questionDocuments.map(question => ({
        id: question.id,
        lesson_id: question.lesson_id,
        question: question.question,
        options: question.options,
        answer: question.answer
    }))
}


//Randomly shuffle an array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
