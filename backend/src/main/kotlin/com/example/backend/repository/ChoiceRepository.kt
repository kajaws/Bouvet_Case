package com.example.backend.repository

import com.example.backend.model.Choice
import org.springframework.data.jpa.repository.JpaRepository

interface ChoiceRepository: JpaRepository<Choice, Int>