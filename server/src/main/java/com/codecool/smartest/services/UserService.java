package com.codecool.smartest.services;

import com.codecool.smartest.model.User;

import java.util.List;

/*
 *Created by olga on 27.01.20
 */
public interface UserService {

    User findByUsername(String username);
}
