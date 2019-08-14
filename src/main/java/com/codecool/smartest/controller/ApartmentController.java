package com.codecool.smartest.controller;

import com.codecool.smartest.repository.ApartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ApartmentController {

    private final ApartmentRepository apartmentRepository;

    @Autowired
    public ApartmentController(ApartmentRepository apartmentRepository) {
        this.apartmentRepository = apartmentRepository;
    }

    @GetMapping("/")
    public String apartmentPage(Model model) {
        model.addAttribute("apartments", apartmentRepository.findAll());
        return "home";
    }
}
