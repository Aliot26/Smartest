package com.codecool.smartest.model;

import javax.persistence.*;

@Entity
@Table(name = "users", schema = "public")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column
    private String username;

    @Column
    private String password;

    @ManyToOne()
    @JoinColumn(name = "roleId", referencedColumnName = "roleId", insertable = false, updatable = false)
    private UserRole userRole;
}
