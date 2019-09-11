package com.codecool.smartest.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.HttpURLConnection;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class WeatherController {

    private String url = "https://api.darksky.net/forecast/f0b3ed063ce518080be896ce5d4f9111/37.8267,-122.4233";
    private RestTemplate restTemplate = new RestTemplate();


    @GetMapping("/weather")
    public ResponseEntity<String> getWeather() {
        return restTemplate.getForEntity(url, String.class);
    }
}
