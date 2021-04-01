package ee.omis.webshop.service;

import ee.omis.webshop.model.WebshopUser;
import ee.omis.webshop.repository.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Data
@Service

public class UserService {

    @Autowired
    private final UserRepository userRepository;
    public List<WebshopUser> getUsers() {
        return userRepository.findAll();
    }
    public void saveUser(WebshopUser webshopUser) {
        userRepository.save(webshopUser);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public void editUser(WebshopUser webshopUser) {
        userRepository.save(webshopUser);
    }

    public Optional<WebshopUser> getUser(Long id) {
        return userRepository.findById(id);
    }
}
