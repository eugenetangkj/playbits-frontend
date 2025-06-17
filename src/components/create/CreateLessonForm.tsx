'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function CreateLessonForm() {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const maxChars = 10000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim() == '') {
        //Check for empty
         toast("Did you forget something? 🫤", {
                description: "The input field cannot be left blank.",
                descriptionClassName: "text-paragraph",
                position: 'top-center',
        });
        return
    }

    try {
        //Set state
        setIsSubmitting(true)

        //TODO, Make API call
        console.log('Submitted:', text);



        //Successful
         toast("Successful! 😊", {
                description: "You can view your lesson now.",
                descriptionClassName: "text-paragraph",
                position: 'top-center',
        });

        //Reset
        setText('')
    } catch {
        // Something went wrong
        toast("Something went wrong. 😥", {
                description: "Please try again later",
                descriptionClassName: "text-paragraph",
                position: 'top-center',
        });


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
        className="!w-full green-button !py-2"
        disabled={ isSubmitting }
      >
        <p className='text-h4-heading pt-4 !font-alkalmi'>Submit</p>
      </button>
    </form>
  );
}
