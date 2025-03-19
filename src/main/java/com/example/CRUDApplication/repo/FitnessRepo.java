package com.example.CRUDApplication.repo;

import com.example.CRUDApplication.model.Fitness;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FitnessRepo extends JpaRepository<Fitness, Long> {
    List<Fitness> findByUserId(String userId); // Fetch workouts for a specific user
}
