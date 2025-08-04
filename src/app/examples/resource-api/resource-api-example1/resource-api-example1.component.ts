import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { resource } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
interface ResourceData {
    id: number;
    title: string;
    completed: boolean;
}
function fetchResourceApi(limit = 10, isCompleted: boolean): Promise<ResourceData[] | null> {
    return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&completed=${isCompleted}`)
        .then((response) => response.json())
        .catch(() => []);
}

// interface ResourceSignal<T> extends Signal<ResourceState<T>> {
//     value(): T | null;
//     error(): unknown | null;
//     isLoading(): boolean;
//     reload(): void;
//     state(): 'loading' | 'success' | 'error';
//     latest(): ResourceState<T>;
// }
@Component({
    selector: 'app-resource-api-example1',
    imports: [MatButtonModule, MatCheckboxModule],
    template: `
        <h2>Resource API Example 1: Basic Fetch (resource)</h2>
        <button mat-button color="primary" (click)="resourceSignal.reload()">Refresh</button><br />
        <mat-checkbox [checked]="isCompleted()" (change)="isCompleted.set($event.checked)">Is Completed</mat-checkbox>

        @if (resourceSignal.isLoading()) {
            <div>Loading...</div>
        } @else if (resourceSignal.error()) {
            <div>Error: {{ resourceSignal.error() }}</div>
        } @else {
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    @let data = resourceSignal.value();
                    @if (data) {
                        @for (r of data; track r.id) {
                            <tr>
                                <td>{{ r.id }}</td>
                                <td>{{ r.title }}</td>
                                <td>{{ r.completed ? 'Completed' : 'Pending' }}</td>
                            </tr>
                        }
                    }
                </tbody>
            </table>
        }
    `
})
export class ResourceApiExample1Component {
    limit = signal(20);
    isCompleted = signal(false);
    resourceSignal = resource({
        params: () => [this.limit(), this.isCompleted()],
        loader: () => fetchResourceApi(this.limit(), this.isCompleted()),
        defaultValue: []
    });
}
