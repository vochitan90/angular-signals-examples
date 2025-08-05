import { Component, input, OnInit, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    imports: [MatButtonModule]
})
export class ChildComponent implements OnInit {
    todo = input.required<string>();
    delete = output<string>();

    constructor() {}

    ngOnInit() {}
}
