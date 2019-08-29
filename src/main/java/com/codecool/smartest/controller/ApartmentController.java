package com.codecool.smartest.controller;

import com.codecool.smartest.model.Apartment;
import com.codecool.smartest.repository.ApartmentRepository;
import com.codecool.smartest.service.impl.ApartmentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controller for the {@link ApartmentServiceImpl}
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ApartmentController {
    private final ApartmentRepository apartmentRepository;

    public ApartmentController(ApartmentRepository apartmentRepository) {
        this.apartmentRepository = apartmentRepository;
    }

    @GetMapping("/apartments")
    public List<Apartment> getAllApartments() {
        return apartmentRepository.findAll();
    }


    /**
     * Take data of apartments from database
     * @param model
     * @return template name where show this data
     */
//    @GetMapping("/")
//    public String apartmentPage(Model model) {
//        model.addAttribute("apartments", apartmentRepository.findAll());
//        return "home";
//    }
}
