package GreenLand.entities;


import javax.persistence.*;

@Entity
@Table(name="Products")
public class Product {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private float price ;

    @Column(name= "description", nullable= false)
    private String description;

    @Column(name= "image", nullable= false)
    private String image;

    @Column(name= "category", nullable= true)
    private String category;

    @Column(name= "country", nullable= true)
    private String country;

    @Column(name= "discount", nullable= true)
    private int discount;

    @Column(name= "season", nullable= true)
    private String season;

    @Column(name= "cantity", nullable= true)
    private String cantity;
    public Product() {
    }
    public Product(int id,String name, float price, String description,String image,String category, String country, int discount, String season, String cantity) {
        this.id=id;
        this.name=name;
        this.price=price;
        this.description=description;
        this.image=image;
        this.category=category;
        this.country=country;
        this.discount=discount;
        this.season=season;
        this.cantity=cantity;
    }
    public Product(String name, float price, String description,String image,String category, String country, int discount, String season, String cantity) {
        this.name=name;
        this.price=price;
        this.description=description;
        this.image=image;
        this.category=category;
        this.country=country;
        this.discount=discount;
        this.season=season;
        this.cantity=cantity;
    }

    public String getCantity() {
        return cantity;
    }

    public void setCantity(String cantity) {
        this.cantity = cantity;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
