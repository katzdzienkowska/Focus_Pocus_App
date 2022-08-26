package com.example.backend;

import com.example.backend.models.Task;
import com.example.backend.repositories.TaskRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FocusPocusApplicationTests {

	@Autowired
	TaskRepository taskRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createTask(){
		Task task1 = new Task("cook dinner", "#ffffff", true);
		taskRepository.save(task1);
	}

}
