package GreenLand.controllers;


import GreenLand.dtos.UserDTO;
import GreenLand.dtos.builders.UserBuilder;
import GreenLand.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/SignUp")
public class UserController {
    private final UserService userService;


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping()
    public ResponseEntity<UserDTO> insertUser(@Valid @RequestBody UserDTO userDTO) {
        return  new ResponseEntity<>((UserBuilder.toUserDTO(userService.insert(UserBuilder.toUser(userDTO)))), HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<UserDTO>> getAccount() {
        List<UserDTO> accounts= userService.read();
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }
}
