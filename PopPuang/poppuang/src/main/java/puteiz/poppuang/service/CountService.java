package puteiz.poppuang.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import puteiz.poppuang.entity.Department;
import puteiz.poppuang.repository.DepartmentRepository;

import java.util.Optional;

@Service
public class CountService {

    @Autowired
    DepartmentRepository departmentRepository;

    public void increaseCount(String department) {
        Optional<Department> findDepartment = departmentRepository.findByName(department);
        findDepartment.get().setCount(findDepartment.get().getCount() + 1);
        departmentRepository.save(findDepartment.get());
    }
}
