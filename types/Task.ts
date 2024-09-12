export interface Task {
    id: number;
    name: string;
    description: string;
    responsiblePerson: string;
    performers: string[];
    status: 'TODO' | 'In Progress' | 'Done';
    priority: 'Low' | 'Medium' | 'High';
}
