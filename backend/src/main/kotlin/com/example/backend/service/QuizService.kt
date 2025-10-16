package com.example.backend.service

import com.example.backend.model.Question
import com.example.backend.model.QuizResult
import com.example.backend.model.QuizSubmission
import com.example.backend.repository.QuestionRepository
import org.springframework.stereotype.Service

@Service
class QuizService(private val repo: QuestionRepository) {

    fun getQuestions(): List<Question> = repo.findAll()

    fun grade(submission: QuizSubmission): QuizResult {
        val questions = getQuestions()

        val correct = questions.count{q ->
            val chosen = submission.answers[q.id]
            chosen != null && q.choices.any { it.id == chosen && it.correct }
        }
        return QuizResult(total = questions.size, correct = correct)
    }


}
