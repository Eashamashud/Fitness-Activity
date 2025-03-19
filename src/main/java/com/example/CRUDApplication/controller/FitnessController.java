package com.example.CRUDApplication.controller;

import com.example.CRUDApplication.model.Fitness;
import com.example.CRUDApplication.repo.FitnessRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
//@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "https://fitness-activity-bnwi.vercel.app")
@CrossOrigin(origins = "*")
public class FitnessController {

    @Autowired
    private FitnessRepo fitnessRepo;

    @GetMapping("/getAllFitness")
    public ResponseEntity<List<Fitness>> getAllFitness(){
        try{
            List<Fitness> fitnessList = new ArrayList();
            fitnessRepo.findAll().forEach(fitnessList::add);

            if(fitnessList.isEmpty()){
//                return new ResponseEntity<>( HttpStatus.NO_CONTENT);
                return new ResponseEntity<>(new ArrayList<>(), HttpStatus.OK);
            }
            return new ResponseEntity<>(fitnessList, HttpStatus.OK);
        } catch(Exception ex){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/getFitnessById/{id}")
    public ResponseEntity<Fitness> getFitnessById(@PathVariable Long id){
        Optional<Fitness> fitnessData = fitnessRepo.findById(id);
        if(fitnessData.isPresent()){
            return new ResponseEntity<>(fitnessData.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
//    @PostMapping("/addFitness")
//    public ResponseEntity<Fitness> addFitness(@RequestBody Fitness fitness){
//        Fitness fitnessObj = fitnessRepo.save(fitness);
//        return new ResponseEntity<>(fitnessObj, HttpStatus.OK);
//    }

    @PostMapping("/addFitness")
    public ResponseEntity<Fitness> addFitness(@RequestBody Fitness fitness){
        System.out.println("POST /addFitness called with: " + fitness);
        Fitness fitnessObj = fitnessRepo.save(fitness);
        return new ResponseEntity<>(fitnessObj, HttpStatus.CREATED);
    }

    @PutMapping("/updateFitnessById/{id}")
    public ResponseEntity<Fitness> updateFitnessById(@PathVariable Long id, @RequestBody Fitness newFitnessData){
        Optional<Fitness> oldFitnessData = fitnessRepo.findById(id);

        if(oldFitnessData.isPresent()){
            Fitness updateFitnessData = oldFitnessData.get();
            updateFitnessData.setExerciseName(newFitnessData.getExerciseName());
            updateFitnessData.setDate(newFitnessData.getDate());
            updateFitnessData.setDurationInMinutes(newFitnessData.getDurationInMinutes());
            updateFitnessData.setCaloriesBurned(newFitnessData.getCaloriesBurned());
            updateFitnessData.setNotes(newFitnessData.getNotes());

            Fitness fitnessObj = fitnessRepo.save(updateFitnessData);
            return new ResponseEntity<>(fitnessObj, HttpStatus.OK);
        }
        return new ResponseEntity<>( HttpStatus.OK);

    }

    @DeleteMapping("/deleteFitnessById/{id}")
    public ResponseEntity<Fitness> deleteitnessById(@PathVariable Long id){
        fitnessRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/getUserFitness/{userId}")
    public ResponseEntity<List<Fitness>> getUserFitness(@PathVariable String userId) {
        List<Fitness> userFitnessList = fitnessRepo.findByUserId(userId);
        return ResponseEntity.ok(userFitnessList);
    }

}
