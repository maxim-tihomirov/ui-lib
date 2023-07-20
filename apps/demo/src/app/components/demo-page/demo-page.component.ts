import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../ui/table";

@Component({
  selector: 'ui-lib-demo-page',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent {
  data = ['first', 'second'];
}
