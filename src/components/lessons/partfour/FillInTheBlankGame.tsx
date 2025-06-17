"use client"
import { useState } from "react"
import { Question } from "@/app/types/Types"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DndContext } from "@dnd-kit/core"



const questions: Question[] = [
  {
    id: "1",
    lesson_id: "1",
    question: "The capital of France is ________.",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: ["Paris"]
  },
  {
    id: "2",
    lesson_id: "1",
    question: "Water freezes at ________ degrees Celsius.",
    options: ["0", "100", "32", "50"],
    answer: ["0"]
  }
]


export default function FillInTheBlankGame() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [blanks, setBlanks] = useState<(string | null)[]>([""])
  const [options, setOptions] = useState<string[]>(questions[0].options)

  const currentQuestion = questions[currentIndex]

  // Resets state when question changes
  const resetState = (index: number) => {
    const answerCount = (questions[index].question.match(/____+/g) || []).length
    setBlanks(new Array(answerCount).fill(null))
    setOptions([...questions[index].options])
  }

  const handleDrop = (index: number, word: string) => {
    const newBlanks = [...blanks]
    newBlanks[index] = word
    setBlanks(newBlanks)
    setOptions(options.filter(o => o !== word))
  }

  const handleCheck = () => {
    const isCorrect = JSON.stringify(blanks) === JSON.stringify(currentQuestion.answer)
    if (isCorrect) {
      toast("✅ Correct!", { description: "Great job!" })
      if (currentIndex < questions.length - 1) {
        const next = currentIndex + 1
        setCurrentIndex(next)
        resetState(next)
      } else {
        toast("🎉 All Done!", { description: "You've completed all questions!" })
      }
    } else {
      toast("❌ Try Again", { description: "Some answers are incorrect." })
    }
  }

  return (
    <DndContext>
    <div className="space-y-8 p-4 max-w-xl mx-auto text-center">
      <h3 className="text-lg font-semibold">Fill in the blank:</h3>
      <p className="text-xl">
        {
          currentQuestion.question.split("____").map((text, i) => (
            <span key={i}>
              {text}
              {i < blanks.length && (
                <span
                  className={cn("inline-block min-w-[80px] mx-1 p-2 border rounded cursor-pointer bg-white",
                    !blanks[i] ? "border-dashed border-gray-400" : "border-green-500"
                  )}
                >
                  {blanks[i] || "____"}
                </span>
              )}
            </span>
          ))
        }
      </p>

      {/* Options */}
      <div className="flex flex-wrap justify-center gap-3">
        {options.map((word, idx) => (
          <button
            key={idx}
            onClick={() => {
              const firstEmptyIndex = blanks.findIndex(b => b === null)
              if (firstEmptyIndex !== -1) handleDrop(firstEmptyIndex, word)
            }}
            className="bg-blue-100 rounded px-4 py-2 text-sm shadow hover:bg-blue-200"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Check button */}
      <Button className="mt-4" onClick={handleCheck}>
        Check
      </Button>
    </div>
    </DndContext>
  )
}