import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoArray: string[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== "") {
      this.todoArray.push(this.newTodo);
      this.newTodo = '';
    }
  }
  deleteTodo(index: number) {
    this.todoArray.splice(index, 1);
  }
}
