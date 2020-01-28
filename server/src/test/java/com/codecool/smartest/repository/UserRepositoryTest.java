package com.codecool.smartest.repository;

import com.codecool.smartest.model.User;
import com.codecool.smartest.model.UserRole;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestPropertySource(locations="classpath:application.properties")
@DataJpaTest
class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @BeforeEach
    void setUp() {
        UserRole roleData = new UserRole();
        User userData = new User(1, "admin", "first", "last", "admin", roleData);
        userRepository.save(userData);
    }

    @Test
    public void findByUsername() throws Exception{

        User userOptional = userRepository.findByUsername("admin");

        assertEquals("admin", userOptional.getUsername());
    }
}
