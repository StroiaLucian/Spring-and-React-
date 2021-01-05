package GreenLand.dtos.builders;

import GreenLand.dtos.UserDTO;
import GreenLand.entities.User;

public class UserBuilder {
    public UserBuilder() {
    }

    public static UserDTO toUserDTO(User user) {
        return new UserDTO(user.getId(), user.getName(),user.getAge(),user.getPhone(),user.getEmail(),user.getPassword());
    }

    public static User toUser(UserDTO userDTO){
        try {
            return new User(userDTO.getName(),userDTO.getAge(),userDTO.getPhone(),userDTO.getEmail(),userDTO.getPassword());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }
    public static User toUserID(UserDTO userDTO){
        try {
            return new User(userDTO.getId(), userDTO.getName(),userDTO.getAge(),userDTO.getPhone(),userDTO.getEmail(),userDTO.getPassword());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }
}
