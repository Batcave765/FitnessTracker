package TaskManagerPackage;

import java.time.LocalDate;

public class Task {
    private int taskId;
    private String taskName;
    private String description;
    private LocalDate dueDate;
    private boolean isCompleted;

    public Task(int taskId, String taskName, String description, LocalDate dueDate, boolean isCompleted) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }

    public int getTaskId() {
        return taskId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    @Override
    public String toString() {
        return "Task{" +
                "taskId=" + taskId +
                ", taskName='" + taskName + '\'' +
                ", description='" + description + '\'' +
                ", dueDate=" + dueDate +
                ", isCompleted=" + isCompleted +
                '}';
    }
}
