package com.codecool.smartest.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "apartments", schema = "public")
public class Apartment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int apId;

    @Column
    private int number;


    @ManyToMany(targetEntity = User.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(
            name = "owner",
            joinColumns = {@JoinColumn(name = "userId")},
            inverseJoinColumns = {@JoinColumn(name = "apId")}
    )
    public List<User> users = new ArrayList<>();

    public int getApId() {
        return apId;
    }

    public int getNumber() {
        return number;
    }
}
