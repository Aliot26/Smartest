package com.codecool.smartest.model;

import javax.persistence.*;

@Entity
@Table(name = "apartments", schema = "public")
public class Apartment {
    @Id
    @GeneratedValue(generator = "apartmentId_generator")
    @SequenceGenerator(
            name = "apartmentId_generator",
            sequenceName = "apartment_sequence"
    )
    private Long id;

    @Column(name = "number")
    private int apNumber;

    @Column(name = "userId")
    private int userId;
}
