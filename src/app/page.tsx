import Image from "next/image";


/**
This component represents the home landing page. 
 */
export default function Home() {
    return (
        <main className='relative mt-36 pt-8 px-36 flex flex-col justify-end items-center space-y-40 overflow-x-hidden'>
            {/* Text */}
            <div className='flex flex-col items-center justify-center space-y-8 text-center'>
                <h1 className='text-6xl font-alkalmi'>Learning through Playful Chunks</h1>
                <h2 className='text-2xl font-inter leading-loose w-3/4'>We turn traditional content into interactive, bite-sized flashcards, games, and quizzes — designed to make learning easier and more engaging for students who struggle with focus or reading long content.</h2>

            </div>

            {/* Image */}
            <Image src='/assets/homepage/phone.svg' className='mb-0' alt='Playbits' width={ 720 } height={ 506 } />


            {/* Decorative Images */}
            <Image
                src="/assets/homepage/green-shape.svg"
                alt="Green Shape"
                aria-hidden="true"
                className="block absolute top-[40%] left-[-1.5%] pointer-events-none z-0"
                width={ 140 }
                height={ 140 }
            />
            <Image
                src="/assets/homepage/pink-shape.svg"
                alt="Pink Shape"
                aria-hidden="true"
                className="block absolute top-[30%] right-[-2%] pointer-events-none z-0"
                width={ 200 }
                height={ 200 }
            />


           



        </main>

    )
}
