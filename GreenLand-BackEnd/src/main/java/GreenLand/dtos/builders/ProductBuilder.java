package GreenLand.dtos.builders;

import GreenLand.dtos.ProductDTO;
import GreenLand.entities.Product;

public class ProductBuilder {
    public ProductBuilder() {
    }

    public static ProductDTO toProductDTO(Product product) {
        return new ProductDTO(product.getId(), product.getName(),product.getPrice(),product.getDescription(),product.getImage(), product.getCategory(),product.getCountry(),product.getDiscount(),product.getSeason(),product.getCantity());
    }

    public static Product toProduct(ProductDTO productDTO){
        try {
            return new Product(productDTO.getName(),productDTO.getPrice(),productDTO.getDescription(),productDTO.getImage(),productDTO.getCategory(),productDTO.getCountry(),productDTO.getDiscount(),productDTO.getSeason(),productDTO.getCantity());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }
    public static Product toProductID(ProductDTO productDTO){
        try {
            return new Product(productDTO.getId(),productDTO.getName(),productDTO.getPrice(),productDTO.getDescription(),productDTO.getImage(),productDTO.getCategory(),productDTO.getCountry(),productDTO.getDiscount(),productDTO.getSeason(),productDTO.getCantity());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }
}
