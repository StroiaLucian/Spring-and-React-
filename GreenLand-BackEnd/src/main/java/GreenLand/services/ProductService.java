package GreenLand.services;

import GreenLand.dtos.ProductDTO;
import GreenLand.dtos.builders.ProductBuilder;
import GreenLand.entities.Product;
import GreenLand.repositories.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductDTO> readProducts(){
        List<Product> products =productRepository.findAll();
        return products.stream().map(product-> ProductBuilder.toProductDTO(product)).collect(Collectors.toList());
    }
}
