package se.aerokth.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/gallery")
public class GalleryController {
    @GetMapping
    public List<Map<String,String>> list() {
        return List.of(
                Map.of("url","https://example.com/img1.jpg","title","Team","alt","Team photo"),
                Map.of("url","https://example.com/img2.jpg","title","Flyg","alt","Airframe")
        );
    }
}
