package puteiz.poppuang.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import puteiz.poppuang.entity.Department;
import puteiz.poppuang.repository.DepartmentRepository;

import java.util.Optional;

@Service
public class DepartmentService {
    @Autowired
    DepartmentRepository departmentRepository;

    public int getCount(String department) {
        Optional<Department> findDepartment = departmentRepository.findByName(department);
        return findDepartment.get().getCount();
    }
}
