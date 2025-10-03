package se.aerokth.backend.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import se.aerokth.backend.model.Application;
import se.aerokth.backend.model.ApplicationRequest;
import se.aerokth.backend.repository.ApplicationRepository;


@Service @RequiredArgsConstructor
public class ApplicationService {
    private final ApplicationRepository repo;
    public void submit(ApplicationRequest req) {
        var e = new Application();
        e.setName(req.name());
        e.setEmail(req.email());
        e.setMessage(req.message());
        repo.save(e);
    }
}
