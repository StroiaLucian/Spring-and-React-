
package GreenLand.services;


import GreenLand.dtos.UserDTO;
import GreenLand.dtos.builders.UserBuilder;
import GreenLand.entities.User;
import GreenLand.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User insert(User user){
        return userRepository.save(user); // returneaza un Pacient pentru etapa urmatoare.
    }

    public List<UserDTO> read(){
        List<User> accounts =userRepository.findAll();
        return accounts.stream().map(account-> UserBuilder.toUserDTO(account)).collect(Collectors.toList());
    }
}
