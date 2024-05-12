package puteiz.poppuang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import puteiz.poppuang.entity.Department;
import puteiz.poppuang.repository.DepartmentRepository;
import puteiz.poppuang.service.CountService;
import puteiz.poppuang.service.DepartmentService;

import java.util.Comparator;
import java.util.List;
import java.util.Map;

@RestController
public class PopController {

    @Autowired
    CountService countService;

    @Autowired
    DepartmentService departmentService;

//    @PostMapping("/pop")
//    public void popController(@RequestParam("department") String department) {
//        countService.increaseCount(department);
//
//    }
    @PostMapping("/pop")
    public void popController(@RequestBody Map<String, Object> payload) {
        String department = (String) payload.get("department");
        countService.increaseCount(department);

    }


    @GetMapping("/popCount/{departmentName}")
    @ResponseBody
    public int getCount(@PathVariable(name = "departmentName") String departmentName) {
        return departmentService.getCount(departmentName);
    }

    @GetMapping("/popCount/ranking")
    @ResponseBody
    public List<Department> getRanking() {
        List<Department> departmentList = departmentService.getAll();
        departmentList.sort(Comparator.comparingInt(Department::getCount).reversed());

        return departmentList;
    }

}
