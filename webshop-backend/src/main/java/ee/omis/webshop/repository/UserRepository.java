package ee.omis.webshop.repository;

import ee.omis.webshop.model.WebshopUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <WebshopUser, Long> {
}
