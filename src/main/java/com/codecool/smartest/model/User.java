package com.codecool.smartest.model;

import javax.persistence.*;

@Entity
@Table(name = "users", schema = "public")
public class User {
    @Id
    @GeneratedValue(generator = "userId_generator")
    @SequenceGenerator(
            name = "userId_generator",
            sequenceName = "user_sequence"
    )
    private int userId;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private UserRole role;
}
