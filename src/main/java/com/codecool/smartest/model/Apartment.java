package com.codecool.smartest.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "apartments", schema = "public")
public class Apartment {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int apId;

    @Column
    private int apNumber;

    @OneToOne(fetch = FetchType.LAZY,
    cascade = CascadeType.ALL)
    @JoinColumn(name = "userId", nullable = false)
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    @JsonIgnore
    private User user;
}
