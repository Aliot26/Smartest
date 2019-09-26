package com.codecool.smartest.security;

import com.codecool.smartest.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class UserPrincipal implements UserDetails {

    public UserPrincipal(User user) {
        this.user = user;
    }

    private User user;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        try {
            return user.getPassword();
        } catch (NullPointerException err) {
            //TODO redirect:
            return null;
        }
    }

    @Override
    public String getUsername() {
        try {
            return user.getUsername();
        } catch (NullPointerException err) {
            //TODO redirect:
            return null;
        }
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}