'use client';

import { lessonCreate } from '@/data-fetchers/LessonFetchers';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CreateLessonForm() {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const maxChars = 2000;

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();

    //Set state
    setIsSubmitting(true)

    if (text.trim() == '') {
        //Check for empty
         toast("Did you forget something? 🫤", {
                description: "The input field cannot be left blank.",
                descriptionClassName: "text-paragraph",
                position: 'top-center',
        });
        setIsSubmitting(false)
        return
    }

    try {
        setIsSubmitting(true)
        const lessonTitle = await lessonCreate(text)

   
        if (lessonTitle.length !== 0) {
            //Successful
            toast("Successful! 😊", {
                description: `You can view your lesson now: ${lessonTitle}`,
                descriptionClassName: "text-paragraph",
                position: "top-center",
            })

            //Reset
            setText('')
        }
        else {
            // Something went wrong
            toast("Something went wrong. 😥", {
                    description: "Please try again later",
                    descriptionClassName: "text-paragraph",
                    position: 'top-center',
            })
        }
    } catch {
        // Something went wrong
        toast("Something went wrong. 😥", {
                description: "Please try again later",
                descriptionClassName: "text-paragraph",
                position: 'top-center',
        })
    } finally {
        setIsSubmitting(false)
    }
    

    
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-8">
    

      <textarea
        id="feedback"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxChars}
        rows={8}
        className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-playbits-blue-900 text-paragraph"
        placeholder="Type your response here..."
      />

      <div className="text-sm text-gray-500">{text.length} / {maxChars}</div>

      <button
        type="submit"
        className="!w-full green-button !py-1 md:!py-2"
        disabled={ isSubmitting }
      >
        <p className='text-h4-heading pt-2 md:pt-4 !font-alkalmi'>{isSubmitting ? 'Creating...' : 'Create!'}</p>
      </button>
    </form>
  );
}
