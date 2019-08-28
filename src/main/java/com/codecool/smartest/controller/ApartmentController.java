package com.codecool.smartest.controller;

import com.codecool.smartest.repository.ApartmentRepository;
import com.codecool.smartest.service.impl.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Controller for the {@link ApartmentService}
 */
@Controller
public class ApartmentController {

//    private final ApartmentRepository apartmentRepository;
//
//    @Autowired
//    public ApartmentController(ApartmentRepository apartmentRepository) {
//        this.apartmentRepository = apartmentRepository;
//    }

    /**
     * Take data of apartments from database
     * @param model
     * @return template name where show this data
     */
    @GetMapping("/")
    public String apartmentPage(Model model) {
        model.addAttribute("apartments", apartmentRepository.findAll());
        return "home";
    }
}
