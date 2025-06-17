import { Lesson } from "../types/Types"



export const convertLessonDocumentsToObjects = (lessonDocuments: any[]) : Lesson[] => {
    return lessonDocuments.map(lesson => ({
        id: lesson.id,
        title: lesson.title,
        summary: lesson.summary,
        content: lesson.content,
        date_created: lesson.date_created
    }))
}
