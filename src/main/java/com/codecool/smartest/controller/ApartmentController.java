package com.codecool.smartest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ApartmentController {

    @GetMapping("/")
    public String apartmentPage() {
        return "home";
    }
}
