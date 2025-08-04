import { Component, OnInit, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  imports: [ChildComponent, MatInputModule],
})
export class ParentComponent implements OnInit {
  todos = signal<string[]>(['Learn Signals', 'Build App']);

  addTodo(todo: string) {
    if (todo.trim()) {
      this.todos.update((todos) => [...todos, todo.trim()]);
    }
  }

  removeTodo(todo: string) {
    this.todos.update((todos) => todos.filter((t) => t !== todo));
  }

  constructor() {}

  ngOnInit() {}
}
