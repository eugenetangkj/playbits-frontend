import Image from "next/image";


/**
This component represents the hero in the home landing page.
*/

export default function Hero() {
    return (
        <div className='relative flex flex-col justify-end items-center space-y-28 md:space-y-40 overflow-x-hidden pt-36 md:pt-48 min-h-screen'>
            {/* Text */}
            <div className='flex flex-col items-center justify-center space-y-8 text-center px-8'>
                <h1 className='text-h1-heading'>Learning through Playful Chunks</h1>
                <h4 className='text-h5-heading w-full sm:w-3/4 2xl:w-1/2'>We turn traditional content into interactive, bite-sized flashcards, games, and quizzes — designed to make learning easier and more engaging for students who struggle with focus or reading long content.</h4>

            </div>

            {/* Image */}
            <Image src='/assets/homepage/phone.svg' className='mb-0 px-8 w-[520px] md:w-[736px]' alt='Playbits' width={ 736 } height={ 513 } />


            {/* Decorative Images */}
            <Image
                src="/assets/homepage/green-shape.svg"
                alt="Green Shape"
                aria-hidden="true"
                className="block absolute top-[55%] md:top-[40%] left-[-3%] xl:left-[-1.5%] w-[80px] md:w-[120px] xl:w-[140px] pointer-events-none z-0"
                width={ 140 }
                height={ 140 }
            />
            <Image
                src="/assets/homepage/pink-shape.svg"
                alt="Pink Shape"
                aria-hidden="true"
                className="block absolute top-[50%] md:top-[30%] right-[-5%] md:right-[-4%] w-[140px] md:w-[180px] xl:w-[200px] pointer-events-none z-0"
                width={ 200 }
                height={ 200 }
            />
        </div>
    )
}
