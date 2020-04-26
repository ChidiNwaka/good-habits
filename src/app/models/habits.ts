export interface IHabit {
    id: string;
    daysCompleted: number;
    title: string;
    description: string;
    priority: string;
    createdAt: string;
}

export interface IDailyHabit {
    id: string;
    title: string;
    completed: boolean;
}
