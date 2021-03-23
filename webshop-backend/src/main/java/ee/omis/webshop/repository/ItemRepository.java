package ee.omis.webshop.repository;

import ee.omis.webshop.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ItemRepository extends JpaRepository <Item, Long> {
}
