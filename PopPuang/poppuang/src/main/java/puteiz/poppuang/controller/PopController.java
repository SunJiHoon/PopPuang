package puteiz.poppuang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import puteiz.poppuang.repository.DepartmentRepository;
import puteiz.poppuang.service.CountService;
import puteiz.poppuang.service.DepartmentService;

@RestController
public class PopController {

    @Autowired
    CountService countService;

    @Autowired
    DepartmentService departmentService;

    @PostMapping("/pop")
    public void popController(@RequestParam("department") String department) {
        countService.increaseCount(department);

    }


    @GetMapping("/popCount/{departmentName}")
    @ResponseBody
    public int getCount(@PathVariable(name = "departmentName") String departmentName) {
        return departmentService.getCount(departmentName);
    }

}
