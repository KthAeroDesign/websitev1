package se.aerokth.backend.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class MessageController {
    @GetMapping("/api/greeting")
    public Map<String, String> greeting() {
        return Map.of("text", "test backend");
    }
}