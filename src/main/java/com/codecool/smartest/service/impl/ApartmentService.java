package com.codecool.smartest.service.impl;

import com.codecool.smartest.model.Apartment;
import com.codecool.smartest.repository.ApartmentRepository;
import com.codecool.smartest.service.IApartmentService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ApartmentService implements IApartmentService {

    private final ApartmentRepository apartmentRepository;

    @Autowired
    public ApartmentService(ApartmentRepository apartmentRepository) {
        this.apartmentRepository = apartmentRepository;
    }

    @Override
    public List<Apartment> findAll() {
        return apartmentRepository.findAll();
    }
}
