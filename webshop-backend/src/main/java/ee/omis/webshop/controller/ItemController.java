package ee.omis.webshop.controller;

import ee.omis.webshop.model.Item;
import ee.omis.webshop.service.ItemService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@RestController
public class ItemController {

    @Autowired
    private final ItemService itemService;

    @GetMapping("/item-list")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("/item-add")
    public void addItem(@RequestBody Item item) {
        System.out.println("Ese lisatud");
        System.out.println(item);
        itemService.saveItem(item);
    }

    @DeleteMapping("/item-delete/{id}")
    public void deleteItem(@PathVariable Long id) {
        System.out.println("Ese kustutatud");
        System.out.println(id);
        itemService.deleteItem(id);
    }

    @PostMapping("/item-edit")
    public void editItem(@RequestBody Item item) {
        System.out.println("Ese muudetud");
        System.out.println(item);
        itemService.editItem(item);

    }

}
