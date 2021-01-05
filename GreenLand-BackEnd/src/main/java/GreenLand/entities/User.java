package GreenLand.entities;


import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name="Utilizatori")
public class User {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Type(type = "uuid-binary")
    private UUID id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "age", nullable = false)
    private String age;

    @Column(name= "phone", nullable= false)
    private String phone;

    @Column(name= "email", nullable= false)
    private String email;

    @Column(name= "password", nullable= false)
    private String password;

    public User() {
    }
    public User(UUID id,String name, String age, String phone,String email, String password) {
        this.id=id;
        this.name=name;
        this.phone=phone;
        this.age=age;
        this.email=email;
        this.password=password;
    }
    public User(String name, String age, String phone,String email, String password) {
       this.name=name;
       this.phone=phone;
       this.age=age;
       this.email=email;
       this.password=password;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
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
