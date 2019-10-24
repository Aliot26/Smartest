package com.codecool.smartest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

// (exclude = {DataSourceAutoConfiguration.class})
@SpringBootApplication
public class SmartestApplication {

    public static void main(String[] args) {

        SpringApplication.run(SmartestApplication.class, args);
    }

}
