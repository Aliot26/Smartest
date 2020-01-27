package com.codecool.smartest.services.impl;

import com.codecool.smartest.model.User;
import com.codecool.smartest.model.UserRole;
import com.codecool.smartest.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserServiceImplTest {

    private UserServiceImpl userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        userService = new UserServiceImpl(userRepository);
    }

    @Test
    public void findByUsername() {
        UserRole userRole = new UserRole();
        User userData = new User(999, "Username", "FirstName",
                "LastName", "1234", userRole);
        String username = "Username";

        when(userService.findByUsername(username)).thenReturn(userData);

        assertEquals(userData, userService.findByUsername(username));
        verify(userRepository, times(1)).findByUsername(username);
    }
}
