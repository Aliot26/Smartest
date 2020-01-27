package com.codecool.smartest.services.impl;

import com.codecool.smartest.model.User;
import com.codecool.smartest.repository.UserRepository;
import com.codecool.smartest.services.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/*
 *Created by olga on 27.01.20
 */
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getUsers() {
        List<User> userList = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(userList::add);
        return  userList;
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username).orElse(null);
    }
}
