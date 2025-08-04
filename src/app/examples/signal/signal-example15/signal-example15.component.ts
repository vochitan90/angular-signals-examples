import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'signal-example15',
    templateUrl: `./signal-example15.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, MatProgressSpinnerModule],
    styles: [
        `
            button.loading {
                background: #f14e4e;
            }
            .loader-area {
                margin-top: 20px;
            }
        `
    ]
})
export default class SignalExample15Component implements OnInit {
    loading = signal(true);

    ngOnInit(): void {
        setTimeout(() => {
            this.loading.set(false);
        }, 3000);
    }
}
