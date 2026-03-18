package com.example;

import org.springframework.web.bind.annotation.*;

import com.example.Calculator;

@RestController
@RequestMapping("/api/calculator")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class CalculatorController {

    private final Calculator calc = new Calculator();

    @GetMapping("/add")
    public double add(@RequestParam int a, @RequestParam int b) {
        return calc.add(a, b);
    }

    @GetMapping("/subtract")
    public double subtract(@RequestParam int a, @RequestParam int b) {
        return calc.subtract(a, b);
    }

    @GetMapping("/multiply")
    public double multiply(@RequestParam int a, @RequestParam int b) {
        return calc.multiply(a, b);
    }

    @GetMapping("/divide")
    public double divide(@RequestParam int a, @RequestParam int b) {
        return calc.divide(a, b);
    }
}