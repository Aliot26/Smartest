package com.codecool.smartest.jwt;

import com.codecool.smartest.model.User;
import com.codecool.smartest.services.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtDatabaseUserDetailsService implements UserDetailsService {

    public JwtDatabaseUserDetailsService(UserService userService) {
        this.userService = userService;
    }

    private final UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userService.findByUsername(username);
        return new JwtUserDetails(user);
    }
}
