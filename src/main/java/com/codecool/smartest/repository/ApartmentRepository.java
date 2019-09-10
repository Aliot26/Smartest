package com.codecool.smartest.repository;

import com.codecool.smartest.model.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * JpaRepository for working with apartments table
 */
@Repository
public interface ApartmentRepository extends JpaRepository<Apartment, Integer> {

}
