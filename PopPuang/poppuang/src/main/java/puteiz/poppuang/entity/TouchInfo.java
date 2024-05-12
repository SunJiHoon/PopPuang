package puteiz.poppuang.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity
@Table(name = "touch-info")
@Data
public class TouchInfo {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "department")
    private String department;

    @Column(name = "time")
    private Timestamp time;
}
