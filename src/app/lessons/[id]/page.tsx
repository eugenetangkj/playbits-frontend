import ViewLessonFlowBody from "@/components/lessons/ViewLessonFlowBody";

/**
This component represents the dynamic page for showing a lesson
*/
export const metadata = {
    title: "Playbits - View Lesson",
    description: "View Lesson",
    
};

export default async function ViewLessonFlow({ params }: any) {
    //Determine which lesson is the user trying to view
    const { id } = await params

    return (
        <ViewLessonFlowBody lessonId={id} />
    );
}