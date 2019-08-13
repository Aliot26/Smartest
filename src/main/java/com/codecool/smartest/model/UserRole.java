package com.codecool.smartest.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="userRole", schema = "public")
public class UserRole {
    private int roleId;
    private String role;

    @OneToMany(targetEntity=User.class, mappedBy="userRole",cascade= CascadeType.ALL, fetch = FetchType.LAZY)
    private List<User> user = new ArrayList<>();
}
