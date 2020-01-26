package com.codecool.smartest.model;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "apartments", schema = "public")
public class Apartment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int apId;

    @Column(name = "number")
    private int number;

//    @ManyToMany(targetEntity = User.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinTable(
//            name = "owner",
//            joinColumns = {@JoinColumn(name = "userId", foreignKey = @ForeignKey(name = "apartment_fk_1"))},
//            inverseJoinColumns = {@JoinColumn(name = "apId", foreignKey = @ForeignKey(name = "user_fk_1"))}
//    )
//    public List<User> users = new ArrayList<>();



}
