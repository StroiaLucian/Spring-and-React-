package GreenLand.dtos;

import java.util.UUID;

public class UserDTO {
    private UUID id;
    private String name;
    private String age;
    private String phone;
    private String email;
    private String password;

    public UserDTO() {

    }

    public UserDTO(UUID id, String name, String age, String phone,String email, String password) {
        this.id = id;
        this.name=name;
        this.phone=phone;
        this.age=age;
        this.email=email;
        this.password=password;

    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
