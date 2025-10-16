package com.example.backend.controller

import com.example.backend.model.Question
import com.example.backend.model.QuizResult
import com.example.backend.model.QuizSubmission
import com.example.backend.repository.QuestionRepository
import com.example.backend.service.QuizService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = ["http://localhost:5173"])
class QuestionController(
    private val quizService: QuizService
){
    @GetMapping("/questions")
    fun getQuestions(): List<Question> = quizService.getQuestions()

    @PostMapping("/submit")
    fun submit(@RequestBody body: QuizSubmission): QuizResult =
        quizService.grade(body)
}


//@RestController
//@CrossOrigin(origins = ["http://localhost:5173"])
//@RequestMapping("/api/questions")
//class QuestionController(private val repo: QuestionRepository) {
//
//    @GetMapping
//    fun getAll(): List<Question> = repo.findAll()
//
//    @PostMapping
//    fun add(@RequestBody question: Question): Question = repo.save(question)
//
//}