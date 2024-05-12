package puteiz.poppuang.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import puteiz.poppuang.entity.Department;
import puteiz.poppuang.entity.TouchInfo;
import puteiz.poppuang.repository.CountRepository_touchInfo;
import puteiz.poppuang.repository.DepartmentRepository;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class CountService {

    @Autowired
    DepartmentRepository departmentRepository;

    @Autowired
    CountRepository_touchInfo countRepositoryTouchInfo;

    public void increaseCount(String department) {
        Optional<Department> findDepartment = departmentRepository.findByName(department);
        findDepartment.get().setCount(findDepartment.get().getCount() + 1);
        departmentRepository.save(findDepartment.get());
        createTouchInfo(department);

    }

    private void createTouchInfo(String department){
        TouchInfo touchInfo = new TouchInfo();
        touchInfo.setDepartment(department);
        LocalDateTime adjustedTime = LocalDateTime.now().plusHours(9);
        touchInfo.setTime(Timestamp.valueOf(adjustedTime));
        countRepositoryTouchInfo.save(touchInfo);
    }
}
