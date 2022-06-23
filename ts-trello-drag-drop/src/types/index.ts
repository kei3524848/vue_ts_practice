import type { StringLiteral } from "@babel/types";

// argument name ? is option parameter, it like optional in java;
export interface Category {
  id: number;
  name: string;
  collapsed?: boolean;
}

export interface Task {
  id: number;
  category_id: number;
  name: string;
  start_date: string;
  end_date: string;
  incharge_user: string;
  percentage: number;
}

export interface CategoryTask {
  id: number;
  name: string;
  collapsed?: boolean;
  tasks: Task[];
}
