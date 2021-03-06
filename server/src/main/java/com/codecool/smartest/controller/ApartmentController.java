package com.codecool.smartest.controller;

import com.codecool.smartest.model.Apartment;
import com.codecool.smartest.repository.ApartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ApartmentController {

    private final ApartmentRepository apartmentRepository;

    @Autowired
    public ApartmentController(ApartmentRepository apartmentRepository) {
        this.apartmentRepository = apartmentRepository;
    }

    /**
     * Take data of apartments from database
     *
     * @return List of all apartments
     */
    @GetMapping("/apartments")
    public List<Apartment> getAllApartments() {
        return apartmentRepository.findAll();
    }

    @GetMapping("/apartment/{apId}")
    public Optional<Apartment> getApartment(
            @PathVariable int apId) {
        return apartmentRepository.findById(apId);
    }

    @PutMapping("/apartment/{apId}")
    public ResponseEntity<Apartment> updateApartment(
            @PathVariable int apId,
            @RequestBody Apartment apartment){

        Apartment apartmentUpdated = apartmentRepository.save(apartment);
        return new ResponseEntity<>(apartment, HttpStatus.OK);
    }
}
