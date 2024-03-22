package com.example.CRUDApplication.repo;

import com.example.CRUDApplication.model.Fitness;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FitnessRepo extends JpaRepository<Fitness, Long> {
}
