package com.codecool.smartest.controller;

import com.codecool.smartest.model.Apartment;
import com.codecool.smartest.repository.ApartmentRepository;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ApartmentControllerTest {


    @Test
    void getAllApartments() {

    }

    @Test
    void getApartment() {
        Apartment apartment = new Apartment();
        apartment.setApId(1);
        apartment.setNumber(101);

        ApartmentRepository apartmentRepository = mock(ApartmentRepository.class);
        when(apartmentRepository.findById(1)).thenReturn(java.util.Optional.of(apartment));

    }

    @Test
    void updateApartment() {
    }
}
