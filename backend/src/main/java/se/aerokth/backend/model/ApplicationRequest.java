package se.aerokth.backend.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ApplicationRequest(
        @NotBlank String name,
        @Email String email,
        @NotBlank String message
) {}