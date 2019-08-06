package com.rotarit.clujlive.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.rotarit.clujlive.models.Place;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@CrossOrigin
public class ClujliveController {
    @RequestMapping("/")
    @GetMapping
    public Place index() {
        return new Place("TestPlace", 46.7695316f, 23.5966936f);
    }
}