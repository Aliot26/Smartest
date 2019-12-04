package com.codecool.smartest.model;

import javax.persistence.*;
import java.util.Objects;

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

    public int getApId() {
        return apId;
    }

    public int getNumber() {
        return number;
    }

    public void setApId(int apId) {
        this.apId = apId;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Apartment)) return false;
        Apartment apartment = (Apartment) o;
        return apId == apartment.apId &&
                number == apartment.number;
    }

    @Override
    public int hashCode() {
        return Objects.hash(apId, number);
    }
}
