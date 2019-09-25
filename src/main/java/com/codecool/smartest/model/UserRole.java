package com.codecool.smartest.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "userRole", schema = "public")
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int roleId;

    @Column
    private String role;

    @OneToMany(targetEntity = User.class, mappedBy = "userRole", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonIgnore
    private List<User> users = new ArrayList<>();

    public int getRoleId() {
        return roleId;
    }

    public String getRole() {
        return role;
    }

    public List<User> getUsers() {
        return users;
    }
}
