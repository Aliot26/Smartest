package com.codecool.smartest.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class UserRoleTest {

    UserRole userRole;

    @BeforeEach
    void setUp() {
        userRole = new UserRole();
    }

    @Test
    void getRoleId() {
        Integer idValue = 999;
        userRole.setRoleId(idValue);
        assertEquals(idValue, userRole.getRoleId());
    }

    @Test
    void getRole() {
        String roleValue = "TestRole";
        userRole.setRole(roleValue);
        assertEquals(roleValue, userRole.getRole());
    }

    @Test
    void getUsers() {
        User user = new User();
        List<User> users = new ArrayList<>();
        users.add(user);
        userRole.setUsers(users);

        assertEquals(1, userRole.getUsers().size());
    }
}
