package TaskManagerPackage;import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class TaskManager {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/taskmanager";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "12345678";

    public List<Task> getAllTasks() {
        List<Task> tasks = new ArrayList<>();
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT * FROM tasks")) {

            while (resultSet.next()) {
                int taskId = resultSet.getInt("task_id");
                String taskName = resultSet.getString("task_name");
                String description = resultSet.getString("description");
                LocalDate dueDate = resultSet.getDate("due_date").toLocalDate();
                boolean isCompleted = resultSet.getBoolean("is_completed");
                Task task = new Task(taskId, taskName, description, dueDate, isCompleted);
                tasks.add(task);
            }
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return tasks;
    }

    public void addTask(Task task) {
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement preparedStatement = connection.prepareStatement(
                     "INSERT INTO tasks (task_name, description, due_date, is_completed) VALUES (?, ?, ?, ?)")) {

            preparedStatement.setString(1, task.getTaskName());
            preparedStatement.setString(2, task.getDescription());
            preparedStatement.setDate(3, Date.valueOf(task.getDueDate()));
            preparedStatement.setBoolean(4, task.isCompleted());
            preparedStatement.executeUpdate();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void updateTask(Task task) {
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement preparedStatement = connection.prepareStatement(
                     "UPDATE tasks SET task_name = ?, description = ?, due_date = ?, is_completed = ? WHERE task_id = ?")) {
        	
        	Task existingTask = getTaskById(task.getTaskId());
        	
            if (task.getTaskName() == null || task.getTaskName().isEmpty()) {
                preparedStatement.setString(1, existingTask.getTaskName());
            } else {
                preparedStatement.setString(1, task.getTaskName());
            }
            
            if (task.getDescription() == null || task.getDescription().isEmpty()) {
                preparedStatement.setString(2, existingTask.getDescription());
            } else {
                preparedStatement.setString(2, task.getDescription());
            }

            if (task.getDueDate() == null) {
                preparedStatement.setDate(3, Date.valueOf(existingTask.getDueDate()));
            } else {
                preparedStatement.setDate(3, Date.valueOf(task.getDueDate()));
            }

            preparedStatement.setBoolean(4, task.isCompleted());

            preparedStatement.setInt(5, task.getTaskId());
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public boolean deleteTask(int taskId) {
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement preparedStatement = connection.prepareStatement("DELETE FROM tasks WHERE task_id = ?")) {

            preparedStatement.setInt(1, taskId);
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    public Task getTaskById(int taskId) {
        Task task = null;
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM tasks WHERE task_id = ?")) {

            preparedStatement.setInt(1, taskId);
            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                String taskName = resultSet.getString("task_name");
                String description = resultSet.getString("description");
                LocalDate dueDate = resultSet.getDate("due_date").toLocalDate();
                boolean isCompleted = resultSet.getBoolean("is_completed");
                task = new Task(taskId, taskName, description, dueDate, isCompleted);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return task;
    }
}

