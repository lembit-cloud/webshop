package ee.omis.webshop.service;

import ee.omis.webshop.model.Category;
import ee.omis.webshop.repository.CategoryRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Data
@Service

public class CategoryService {

    @Autowired
    private final CategoryRepository categoryRepository;
    public List<Category> getCategorys() {
        return categoryRepository.findAll();
    }
    public void saveCategory(Category category) {
        categoryRepository.save(category);
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    public void editCategory(Category category) {
        categoryRepository.save(category);
    }

    public Optional<Category> getCategory(Long id) {
        return categoryRepository.findById(id);
    }
}
