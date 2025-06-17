export interface Lesson {
    id: string,
    title: string,
    summary: string,
    content: string,
    date_created: string
}


export interface Flashcard {
    id: string,
    lesson_id: string,
    front_content: string,
    back_content: string,
}

export interface Gamecard {
    id: string,
    lesson_id: string,
    content: string,
    pair_number: string,
}

export interface Question {
    id: string,
    lesson_id: string,
    question: string,
    options: string[],
    answer: string[]
}