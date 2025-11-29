abstract class TaskManager {
    protected tasks: string[] = [];

    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    addTask(task: string): void {
        const taskFormatada = `[Projeto] ${task}`;
        if (!this.tasks.includes(taskFormatada)) {
            this.tasks.push(taskFormatada);
        } else {
            console.log(`Tarefa "${task}" já existe no projeto.`);
        }
    }

    listTasks(): string[] {
        return this.tasks;
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        const taskFormatada = `[Diária] ${task}`;
        if (!this.tasks.includes(taskFormatada)) {
            this.tasks.push(taskFormatada);
        }
    }

    listTasks(): string[] {
        return this.tasks;
    }
}

const meuProjeto = new Project();
meuProjeto.addTask("Desenhar API");
meuProjeto.addTask("Desenhar API"); 
console.log(meuProjeto.listTasks());