package com.example.backend.config

import com.example.backend.model.Choice
import com.example.backend.model.Question
import com.example.backend.repository.ChoiceRepository
import com.example.backend.repository.QuestionRepository
import jakarta.transaction.Transactional
import org.springframework.boot.CommandLineRunner
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Component

private data class C(val text: String, val correct: Boolean)
private data class Q(val text: String, val choices: List<C>)

@Component
class DataSeeder(
    private val questionRepo: QuestionRepository,
    private val choiceRepo: ChoiceRepository,
) : CommandLineRunner {

    @Transactional
    override fun run(vararg args: String?) {
        if(questionRepo.count() > 0) return

        val seed = listOf(
            Q("Hva er hovedstaden i Sverige?", listOf(
                C("Oslo", true), C("Bergen", false), C("Trondheim", false), C("Stavanger", false)
            )),
            Q("Hvor mange bein har en edderkopp?", listOf(
                C("6", false), C("8", true), C("10", false), C("12", false)
            )),
            Q("Hvilken planet er nærmest solen?", listOf(
                C("Venus", false), C("Merkur", true), C("Mars", false), C("Jupiter", false)
            )),
            Q("Hvem skrev «Harry Potter»-bøkene?", listOf(
                C("Suzanne Collins", false), C("Rick Riordan", false), C("Stephen King", false), C("J.K. Rowling", true)
            )),
            Q("Hvor mange farger er det i det norske flagget?", listOf(
                C("2", false), C("3", true), C("4", false), C("5", false)
            )),
            Q("Hva heter verdens største hav?", listOf(
                C("Atlanterhavet", false), C("Det indiske hav", false), C("Stillehavet", true), C("Nordishavet", false)
            )),
            Q("Hvilket dyr kalles «skogens konge» i Norge?", listOf(
                C("Elg", true), C("Ulv", false), C("Bjørn", false), C("Rev", false)
            )),
            Q("Hvor mange minutter er det i én time?", listOf(
                C("50", false), C("60", true), C("70", false), C("100", false)
            )),
            Q("Hvilket språk snakker man i Spania?", listOf(
                C("Italiensk", false), C("Portugisisk", false), C("Spansk", true), C("Fransk", false)
            )),
            Q("Hva heter den største planeten i solsystemet?", listOf(
                C("Saturn", false), C("Neptun", false), C("Jupiter", true), C("Uranus", false)
            ))
        )

        seed.forEach { q ->
            val savedQ = questionRepo.save(Question(text = q.text))
            val choices = q.choices.map { c ->
                Choice(text = c.text, correct = c.correct, question = savedQ)
            }
            choiceRepo.saveAll(choices)
        }
    }
}