package com.codecool.smartest.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    User user;

    @BeforeEach
    void setUp() {
        user = new User();
    }

    @Test
    void getUserId() {
        Integer idValue = 999;
        user.setUserId(idValue);

        assertEquals(idValue, user.getUserId());
    }

    @Test
    void getUsername() {
        String nameValue = "Username";
        user.setUsername(nameValue);

        assertEquals(nameValue, user.getUsername());
    }

    @Test
    void getFirstName() {
        String firstNameValue = "firstName";
        user.setFirstName(firstNameValue);

        assertEquals(firstNameValue, user.getFirstName());
     }

    @Test
    void getLastName() {
        String lastNameValue = "lastName";
        user.setLastName(lastNameValue);

        assertEquals(lastNameValue, user.getLastName());
    }

    @Test
    void getPassword() {
        String passwordValue = "1234";
        user.setPassword(passwordValue);

        assertEquals(passwordValue, user.getPassword());
    }

}
