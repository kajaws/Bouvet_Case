import type { UseMutationResult } from '@tanstack/react-query'
import type {QuizResult, QuizSubmission} from "../../types/types.ts";
import './Result.css'

type Props =  { submit: UseMutationResult<QuizResult, Error, QuizSubmission> }

export function Result ({submit} : Props) {
    if (submit.isPending) return null
    if (submit.error)
        return <p className="result-message-error">Noe gikk galt: {submit.error.message}</p>

    if (!submit.data) return null

    return (
        <p className="result-message">
            Du fikk {submit.data.correct} av {submit.data.total} riktige!
        </p>
    )
}