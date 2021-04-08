package ee.omis.webshop.controller;

import ee.omis.webshop.model.Category;
import ee.omis.webshop.service.CategoryService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Data
@RestController
@CrossOrigin( origins = "http://localhost:4200" )
public class CategoryController {

    @Autowired
    private final CategoryService categoryService;

    @GetMapping("/category-list")
    public List<Category> getCategorys() {
        return categoryService.getCategories();
    }

    @PostMapping("/category-add")
    public void addCategory(@RequestBody Category category) {
        System.out.println("Ese lisatud");
        System.out.println(category);
        categoryService.saveCategory(category);
    }

    @DeleteMapping("/category-delete/{id}")
    public void deleteCategory(@PathVariable Long id) {
        System.out.println("Ese kustutatud");
        System.out.println(id);
        categoryService.deleteCategory(id);
    }

    @PostMapping("/category-edit")
    public void editCategory(@RequestBody Category category) {
        System.out.println("Ese muudetud");
        System.out.println(category);
        categoryService.editCategory(category);
    }

    @GetMapping("/category/{id}")
    public Optional<Category> getCategory(@PathVariable Long id)  {
        return categoryService.getCategory(id);
    }
}
