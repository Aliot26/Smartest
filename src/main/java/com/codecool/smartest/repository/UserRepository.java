package com.codecool.smartest.repository;

import com.codecool.smartest.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>  {

    @Query("select u from users u where u.username = :username")
    User findByUsername(@Param("username") String username);
}
