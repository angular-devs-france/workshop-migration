import {Component} from '@angular/core';


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[] = [
    { id: 1, text: 'Learn Angular Signals', completed: false },
    { id: 2, text: 'Write a Blog Post', completed: false },
  ];

  filter: string = 'all';

  get filteredTodos(): Todo[] {
    if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else {
      return this.todos;
    }
  }

  addTodo(text: string) {
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false
      };
      this.todos = [...this.todos, newTodo];
    }
  }

  toggleTodoCompletion(todoId: number) {
    this.todos = this.todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
  }

  changeFilter(newFilter: string) {
    this.filter = newFilter;
  }

  isAboutAngular(todo: Todo): boolean {
    return todo.text.toLowerCase().includes('angular');
  }
}
