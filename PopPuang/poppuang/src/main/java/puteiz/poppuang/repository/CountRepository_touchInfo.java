package puteiz.poppuang.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import puteiz.poppuang.entity.TouchInfo;

@Repository
public interface CountRepository_touchInfo extends JpaRepository<TouchInfo, Long> {
}
