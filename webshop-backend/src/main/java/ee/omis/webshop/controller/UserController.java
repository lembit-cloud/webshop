package ee.omis.webshop.controller;

import ee.omis.webshop.model.WebshopUser;
import ee.omis.webshop.service.UserService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Data
@RestController
@CrossOrigin( origins = "http://localhost:4200" )
public class UserController {

    @Autowired
    private final UserService userService;

    @GetMapping("/user-list")
    public List<WebshopUser> getUser() {
        return userService.getUsers();
    }

    @PostMapping("/user-add")
    public void addUser(@RequestBody WebshopUser webshopUser) {
        System.out.println("Kasutaja lisatud");
        System.out.println(webshopUser);
        userService.saveUser(webshopUser);
    }

    @DeleteMapping("/user-delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        System.out.println("Kasutaja kustutatud");
        System.out.println(id);
        userService.deleteUser(id);
    }

    @PostMapping("/user-edit")
    public void editUser(@RequestBody WebshopUser webshopUser) {
        System.out.println("Kasutaja muudetud");
        System.out.println(webshopUser);
        userService.editUser(webshopUser);
    }

    @GetMapping("/user/{id}")
    public Optional<WebshopUser> getUser(@PathVariable Long id)  {
        return userService.getUser(id);
    }
}
