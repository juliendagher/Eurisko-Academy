class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;
    addTask(name: string): void {
        this.tasks.push({id: this.currentId++, name: name, status: "In Progress"});
    }
    completeTask(id: number): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) task.status = "Completed";
    }
    displayTasks(): void {
        this.tasks.forEach(task => {
            console.log(`Task ID: ${task.id}, Name: ${task.name}, Status: ${task.status}`);
        });
    }
}

const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Learn Python");
taskManager.displayTasks();
taskManager.completeTask(1);
taskManager.displayTasks();
