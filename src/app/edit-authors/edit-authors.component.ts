import {Component, OnInit, ViewChild} from "@angular/core";
import {MatDialog, MatDialogConfig, MatSort, MatTableDataSource} from "@angular/material";
import {ApiService, Author} from "../api.service";
import {CreateAuthorComponent} from "../create-author/create-author.component";

@Component({
  selector: "app-edit-authors",
  templateUrl: "./edit-authors.component.html",
  styleUrls: ["./edit-authors.component.scss"]
})
export class EditAuthorsComponent implements OnInit {

  displayedColumns: string[] = ["internalID", "firstName", "lastName", "description", "birthDate", "deathDate", "activeDate", "order", "references", "action"];
  dataSource: MatTableDataSource<Author>;
  value: string;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService,
              private createAuthorDialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.apiService.getAuthors());
  }


  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clear() {
    this.dataSource.filter = this.value = "";
  }

  rowCount() {
    return this.dataSource.filteredData.length;
  }

  openCreateAuthor() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.createAuthorDialog.open(CreateAuthorComponent, dialogConfig);
  }

}
