package guru.babe.springreact.model;

import guru.babe.springreact.model.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {}
