package com.codecool.smartest.model;

import javax.persistence.*;

@Entity(name = "users")
@Table(name = "users", schema = "public")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column
    private String username;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String password;

    @ManyToOne()
    @JoinColumn(name = "roleId", foreignKey = @ForeignKey(name = "users_fk_1"), referencedColumnName = "roleId", insertable = false, updatable = false)
    private UserRole userRole;


    public long getUserId() {
        return userId;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
