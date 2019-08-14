package com.codecool.smartest.repository;

import com.codecool.smartest.model.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApartmentRepository extends JpaRepository<Apartment, Integer> {

}
