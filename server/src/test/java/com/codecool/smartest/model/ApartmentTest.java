package com.codecool.smartest.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ApartmentTest {

    Apartment apartment;

    @BeforeEach
    void setUp() {
        apartment = new Apartment();
    }

    @Test
    void getApId() {
        Integer idValue = 999;
        apartment.setApId(idValue);
        assertEquals(idValue, apartment.getApId());
    }

    @Test
    void getNumber() {
        Integer numberValue = 999;
        apartment.setNumber(numberValue);
        assertEquals(numberValue, apartment.getNumber());
    }
}
