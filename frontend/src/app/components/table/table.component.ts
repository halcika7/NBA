import {
  AfterViewInit,
  Component,
  OnInit,
  Input
} from "@angular/core";
import { tableHeaders, TableHeader } from "./../../shared/tableHeaders";
import { ColumnMode } from '@swimlane/ngx-datatable';

ColumnMode

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() tableHeader: string = "seasonStats";
  @Input() data: any[];
  private TableHeaders: TableHeader = tableHeaders;
  displayedColumns: any[] = this.TableHeaders[this.tableHeader];
  ColumnMode = ColumnMode;

  ngOnInit() {
    this.displayedColumns = this.TableHeaders[this.tableHeader];
  }

  ngAfterViewInit() {
  }

  smeFunction(r): string {
    console.log(r);
    return '';
  }

}
