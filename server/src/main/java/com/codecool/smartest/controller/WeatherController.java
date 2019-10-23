package com.codecool.smartest.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.HttpURLConnection;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class WeatherController {

    private String url = "https://api.darksky.net/forecast/f0b3ed063ce518080be896ce5d4f9111/";
    public HttpURLConnection connection = null;
    private RestTemplate restTemplate = new RestTemplate();


    @GetMapping("/weather/{lat}/{lng}")
    public ResponseEntity<String> getWeather(
            @PathVariable String lat,
            @PathVariable String lng
    ) {
        String parameters = "?units=si&exclude=[minutely, alerts, flags]";
        String uriNew = url + lat + ',' + lng + parameters;
        System.out.println(uriNew);
        return restTemplate.getForEntity(uriNew, String.class, lat, lng);
    }
}
