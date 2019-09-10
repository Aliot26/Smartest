package com.codecool.smartest.controller;

import com.codecool.smartest.model.User;
import com.codecool.smartest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    @GetMapping("/user/{userId}")
    public Optional<User> getUser(@PathVariable int userId) {
        return userRepository.findById(userId);
    }

    @PutMapping("/user/{userId}")
    public ResponseEntity<User> updateUser(
            @PathVariable int userId,
            @RequestBody User user) {
        User userUpdated = userRepository.save(user);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<Void> deleteUser(
            @PathVariable int userId) {
        userRepository.deleteById(userId);
        return ResponseEntity.noContent().build();
    }


}
