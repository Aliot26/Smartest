package com.codecool.smartest.jwt;

import com.codecool.smartest.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class JwtUserDetails implements UserDetails {

    private static final long serialVersionUID = 5155720064139820502L;

    private final int id;
    private final String username;
    private final String password;
    private final Collection<? extends GrantedAuthority> authorities;

    public JwtUserDetails(User user) {
        id = user.getUserId();
        username = user.getUsername();
        password = user.getPassword();

        String role = user.getUserRole().getRole();

        List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(role));

        this.authorities = authorities;
    }

    @JsonIgnore
    public int getId() {
        return id;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
