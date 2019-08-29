package com.codecool.smartest.repository;

import com.codecool.smartest.model.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * JpaRepository for working with apartments table
 */
public interface ApartmentRepository extends JpaRepository<Apartment, Integer> {

}
