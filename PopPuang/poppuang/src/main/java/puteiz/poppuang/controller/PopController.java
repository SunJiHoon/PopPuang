package puteiz.poppuang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import puteiz.poppuang.repository.DepartmentRepository;
import puteiz.poppuang.service.CountService;

@RestController
public class PopController {

    @Autowired
    CountService countService;

    @PostMapping("/pop")
    public void popController(@RequestParam("department") String department) {
        countService.increaseCount(department);

    }
}
