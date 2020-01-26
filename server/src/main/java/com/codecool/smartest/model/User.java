package com.codecool.smartest.model;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
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
    @JoinColumn(name = "roleId", foreignKey = @ForeignKey(name = "users_fk_1"), referencedColumnName = "roleId", insertable = true, updatable = true)
    private UserRole userRole;

}
