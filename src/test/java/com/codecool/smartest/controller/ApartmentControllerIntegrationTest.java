package com.codecool.smartest.controller;

import com.codecool.smartest.SmartestApplication;
import com.codecool.smartest.jwt.JwtTokenUtil;
import com.codecool.smartest.repository.ApartmentRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.MOCK,
        classes = SmartestApplication.class
)
@AutoConfigureMockMvc
@TestPropertySource(
        locations = "classpath:application-integrationtest.properties")
public class ApartmentControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    ApartmentRepository apartmentRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;


    @Test
    public void givenApartments_whenGetApartments_thenStatus200() throws Exception {



        String token = jwtTokenUtil.generateToken("admin");

        mockMvc.perform(get("/apartments")
                .header("Authorization", "Bearer " + token)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

}
