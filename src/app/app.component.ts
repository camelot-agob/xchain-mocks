import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styles: [
    `
        .ui-steps .ui-steps-item {
            width: 25%;
        }
        
        .ui-steps.steps-custom {
            margin-bottom: 30px;
        }
        
        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
            padding: 0 1em;
            overflow: visible;
        }
        
        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
            background-color: #0081c2;
            color: #FFFFFF;
            display: inline-block;
            width: 36px;
            border-radius: 50%;
            margin-top: -14px;
            margin-bottom: 10px;
        }
        
        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
            color: #555555;
        }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  items: MenuItem[];

  activeIndex: number = 1;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Registration',
        command: (event: any) => {
          this.activeIndex = 0;
          this.messageService.add({
            severity: 'info',
            summary: 'First Step',
            detail: event.item.label,
          });
        },
      },
      {
        label: 'Apheresis',
        command: (event: any) => {
          this.activeIndex = 1;
          this.messageService.add({
            severity: 'info',
            summary: 'Seat Selection',
            detail: event.item.label,
          });
        },
      },
      {
        label: 'Logistics',
        command: (event: any) => {
          this.activeIndex = 2;
          this.messageService.add({
            severity: 'info',
            summary: 'Pay with CC',
            detail: event.item.label,
          });
        },
      },
      {
        label: 'Production',
        command: (event: any) => {
          this.activeIndex = 3;
          this.messageService.add({
            severity: 'info',
            summary: 'Last Step',
            detail: event.item.label,
          });
        },
      },
      {
        label: 'Logistics',
        command: (event: any) => {
          this.activeIndex = 3;
          this.messageService.add({
            severity: 'info',
            summary: 'Last Step',
            detail: event.item.label,
          });
        },
      },
      {
        label: 'Infusion',
        command: (event: any) => {
          this.activeIndex = 3;
          this.messageService.add({
            severity: 'info',
            summary: 'Last Step',
            detail: event.item.label,
          });
        },
      },
    ];
  }
}
