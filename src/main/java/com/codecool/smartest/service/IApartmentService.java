package com.codecool.smartest.service;

import com.codecool.smartest.model.Apartment;

import java.util.List;

/**
 * Find all {@link Apartment} from database
 */
public interface IApartmentService {

    List<Apartment> findAll();
}
