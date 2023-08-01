package TaskManagerPackage;

import java.time.LocalDate;
import java.util.List;
import java.util.Scanner;

public class TaskConsoleApp {
    private static final Scanner scanner = new Scanner(System.in);
    private static final TaskManager taskManager = new TaskManager();

    public static void main(String[] args) {
        displayWelcomeMessage();

        int choice;
        do {
            displayMenu();
            choice = getChoiceFromUser();

            switch (choice) {
                case 1:
                    showAllTasks();
                    break;
                case 2:
                    addNewTask();
                    break;
                case 3:
                    markTaskAsCompleted();
                    break;
                case 4:
                    updateTask();
                    break;
                case 5:
                    deleteTask();
                    break;
                case 6:
                    System.out.println("Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        } while (choice != 6);
    }

    private static void displayWelcomeMessage() {
        System.out.println("Task Manager:");
    }

    private static void displayMenu() {
    	System.out.println("\n\tMenu");
    	System.out.println("-------------------------------");
        System.out.println("1. Show all tasks");
        System.out.println("2. Add new task");
        System.out.println("3. Mark task as completed");
        System.out.println("4. Update task");
        System.out.println("5. Delete task");
        System.out.println("6. Exit");
    	System.out.println("-------------------------------");

    }

    private static int getChoiceFromUser() {
        System.out.print("Enter your choice (1-6): ");
        return scanner.nextInt();
    }

    private static void showAllTasks() {
        List<Task> tasks = taskManager.getAllTasks();
        if (tasks.isEmpty()) {
            System.out.println("No tasks found.");
        } else {
            System.out.println("All Tasks:");
            for (Task task : tasks) {
                displayTaskDetails(task);
            }
        }
    }

    private static void addNewTask() {
        scanner.nextLine();
        System.out.print("Enter task name: ");
        String taskName = scanner.nextLine();
        System.out.print("Enter task description: ");
        String description = scanner.nextLine();
        System.out.print("Enter due date (YYYY-MM-DD): ");
        LocalDate dueDate = LocalDate.parse(scanner.nextLine());

        Task newTask = new Task(0, taskName, description, dueDate, false);
        taskManager.addTask(newTask);
        System.out.println("Task added successfully!");
    }

    private static void markTaskAsCompleted() {
        System.out.print("Enter the task ID to mark as completed: ");
        int taskId = scanner.nextInt();

        Task taskToUpdate = taskManager.getTaskById(taskId);
        if (taskToUpdate != null) {
            taskToUpdate.setCompleted(true);
            taskManager.updateTask(taskToUpdate);
            System.out.println("Task marked as completed!");
        } else {
            System.out.println("Task not found.");
        }
    }

    private static void updateTask() {
        System.out.print("Enter the task ID to update: ");
        int taskId = scanner.nextInt();
        scanner.nextLine(); 

        Task taskToUpdate = taskManager.getTaskById(taskId);
        if (taskToUpdate != null) {
            System.out.print("Enter updated task name: ");
            String taskName = scanner.nextLine();
            System.out.print("Enter updated task description: ");
            String description = scanner.nextLine();
            System.out.print("Enter updated due date (YYYY-MM-DD): ");
            LocalDate dueDate = LocalDate.parse(scanner.nextLine());

            taskToUpdate.setTaskName(taskName);
            taskToUpdate.setDescription(description);
            taskToUpdate.setDueDate(dueDate);

            taskManager.updateTask(taskToUpdate);
            System.out.println("Task updated successfully!");
        } else {
            System.out.println("Task not found.");
        }
    }

    private static void deleteTask() {
        System.out.print("Enter the task ID to delete: ");
        int taskId = scanner.nextInt();

        if (taskManager.deleteTask(taskId)) {
            System.out.println("Task deleted successfully!");
        } else {
            System.out.println("Task not found or deletion failed.");
        }
    }

    private static void displayTaskDetails(Task task) {
        System.out.println("Task ID: " + task.getTaskId());
        System.out.println("Task Name: " + task.getTaskName());
        System.out.println("Description: " + task.getDescription());
        System.out.println("Due Date: " + task.getDueDate());
        System.out.println("Status: " + (task.isCompleted() ? "Completed" : "Not Completed"));
        System.out.println("--------------------");
    }
}
