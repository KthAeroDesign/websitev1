package se.aerokth.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import se.aerokth.backend.model.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {}

