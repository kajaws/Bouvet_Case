import './App.css'
import {useQuestions, useSubmitQuiz} from "./queries/quizQueries.ts";
import {useState} from "react";
import {QuestionGroup} from "./components/questionGroup/QuestionGroup.tsx";
import {NextButton} from "./components/nextButton/NextButton.tsx";
import {Result} from "./components/result/Result.tsx";

function App() {
    const { data, isLoading, error } = useQuestions()
    const submit = useSubmitQuiz()

    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({})

    if (isLoading) return <p>Laster spørsmål...</p>
    if (error) return <p>Feil: {(error as Error).message}</p>
    if (!data || data.length === 0) return <p>Fant ingen spørsmål.</p>

    const question = data[index]
    const selected = answers[question.id]
    const isLast = index === data.length - 1

    const handleSelect = (choiceId: number) => {
        setAnswers(prev => ({...prev, [question.id]: choiceId }))
    }

    const handleNextOrSubmit = () => {
        if (!selected) return
        if (isLast) submit.mutate({ answers })
        else setIndex(i => i + 1)
    }

  return (
    <div className="quiz-container">
        <h1>Quiz!</h1>
        <QuestionGroup
            question={question}
            selectedChoiceId={selected}
            onSelect={handleSelect}
        />

        <NextButton
            index={index}
            total={data.length}
            canProceed={!!selected}
            isLast={isLast}
            isSubmitting={submit.isPending}
            onClick={handleNextOrSubmit}
        />

        <Result submit={submit}/>
    </div>
  )
}

export default App
