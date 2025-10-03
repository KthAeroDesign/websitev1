package se.aerokth.backend.model;

import jakarta.persistence.*;
import java.time.Instant;
import lombok.Getter; import lombok.Setter; import lombok.NoArgsConstructor;

@Entity @Getter @Setter @NoArgsConstructor
public class Application {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    @Column(length = 4000)
    private String message;
    private Instant createdAt = Instant.now();
}
