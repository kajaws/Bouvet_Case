import { useQuery, useMutation } from '@tanstack/react-query'
import type {Question, QuizResult, QuizSubmission} from "../types/types.ts";

export function useQuestions() {
    return useQuery({
        queryKey: ['questions'],
        queryFn: async (): Promise<Question[]> => {
            const response = await fetch('/api/questions')
            if(!response.ok) throw new Error(`HTTP ${response.status}`)
            return response.json()
        }
    })
}

export function useSubmitQuiz(){
    return useMutation({
        mutationKey: ['submitQuiz'],
        mutationFn: async (payload: QuizSubmission): Promise<QuizResult> => {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
            if(!response.ok) throw new Error(`HTTP ${response.status}`)
            return response.json()
        }
    })
}