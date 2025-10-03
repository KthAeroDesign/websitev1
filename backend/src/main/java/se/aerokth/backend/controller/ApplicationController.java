package se.aerokth.backend.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.aerokth.backend.model.ApplicationRequest;
import se.aerokth.backend.service.ApplicationService;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
public class ApplicationController {
    private final ApplicationService service;

    @PostMapping
    public ResponseEntity<Void> submit(@Valid @RequestBody ApplicationRequest req) {
        service.submit(req);
        return ResponseEntity.accepted().build();
    }
}
