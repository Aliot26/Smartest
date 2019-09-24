package com.codecool.smartest.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU2ODI5NDkxNCwiaWF0IjoxNTY3NjkwMTE0fQ.oftg_DEAXeszXGV5-jbDKcdzWPKNm8ud9w7w8VSjyKDQb9uwvM038UEVJ3SBDA_2IZ8IshdC74HlIP_TL875DQ"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
