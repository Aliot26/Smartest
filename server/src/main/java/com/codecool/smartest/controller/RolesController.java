package com.codecool.smartest.controller;

import com.codecool.smartest.model.UserRole;
import com.codecool.smartest.repository.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RolesController {
    private final RolesRepository rolesRepository;

    @Autowired
    public RolesController(RolesRepository rolesRepository) {
        this.rolesRepository = rolesRepository;
    }

    @GetMapping("/roles")
    public List<UserRole> getAllRoles() {
        return rolesRepository.findAll();
    }

//    @GetMapping("/roles{role}")
//    public UserRole getRoleByName(@PathVariable String role) {
//        return rolesRepository.findByRole(role);
//    }
}
