
export type Choice = { id: number; text: string }
export type Question = { id: number; text: string, choices: Choice[] }
export type QuizSubmission = { answers: Record<number, number> }
export type QuizResult = { total: number; correct: number }