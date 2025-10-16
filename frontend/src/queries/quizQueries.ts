import { useQuery, useMutation } from '@tanstack/react-query'
import {get, post} from "../api/api.ts";
import type {Question, QuizResult, QuizSubmission} from "../types/types.ts";

export function useQuestions() {
    return useQuery({
        queryKey: ['questions'],
        queryFn: () => get<Question[]>('/api/questions')
    })
}

export function useSubmitQuiz() {
    return useMutation({
        mutationKey: ['submitQuiz'],
        mutationFn: (payload: QuizSubmission) => post<QuizResult>('/api/submit', payload)
    })
}