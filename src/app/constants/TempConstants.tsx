import { Flashcard, Lesson } from "../types/Types";

export const TEMP_LESSONS: Lesson[] = [
    {
        id: '1',
        title: 'Photosynthesis',
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        content: 'This is the content.',
        date_created: '2025-06-17'
    },
    {
        id: '2',
        title: 'The Great World War II',
        summary: 'This is a summary.',
        content: 'This is the content.',
        date_created: '2025-06-17'
    },
    {
        id: '3',
        title: 'Photosynthesis',
        summary: 'This is a summary.',
        content: 'This is the content.',
        date_created: '2025-06-17'
    },
    {
        id: '4',
        title: 'Photosynthesis',
        summary: 'This is a summary.',
        content: 'This is the content.',
        date_created: '2025-06-17'
    },
    {
        id: '5',
        title: 'Photosynthesis',
        summary: 'This is a summary.',
        content: 'This is the content.',
        date_created: '2025-06-17'
    }
]


export const TEMP_FLASH_CARDS: Flashcard[] = [
    {
        id: '1',
        lesson_id: '1',
        front_content: "This is a front flashcard statement. Just an example",
        back_content: "This is a back flashcard statement.",
    },
    {
        id: '2',
        lesson_id: '1',
        front_content: "This is a front flashcard statement. Just an example",
        back_content: "This is a back flashcard statement.",
    },
    {
        id: '3',
        lesson_id: '1',
        front_content: "This is a front flashcard statement. Just an example",
        back_content: "This is a back flashcard statement.",
    }
]