export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  created_at: string;
  updated_at: string;
}

export interface CreateTask {
  title: string;
  description: string;
  status?: 'pending' | 'in-progress' | 'completed';
}