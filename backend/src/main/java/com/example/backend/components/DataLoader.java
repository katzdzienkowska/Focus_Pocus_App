package com.example.backend.components;

import com.example.backend.models.Task;
import com.example.backend.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TaskRepository taskRepository;

    public DataLoader(){
    }

    public void run(ApplicationArguments args){

        Task task1 = new Task("Walk the dog", "High", false);
        taskRepository.save(task1);

        Task task2 = new Task("Read a book", "Low", false);
        taskRepository.save(task2);

        Task task3 = new Task("Respond to emails", "Medium", false);
        taskRepository.save(task3);

        Task task4 = new Task("Do grocery shopping", "High", true);
        taskRepository.save(task4);

        Task task5 = new Task("Bake a cake", "Medium", true);
        taskRepository.save(task5);

        Task task6 = new Task("Do the laundry", "Low", false);
        taskRepository.save(task6);

    }
}
