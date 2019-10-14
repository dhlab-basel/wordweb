import {Component, OnInit, ViewChild} from "@angular/core";
import {MatDialog, MatDialogConfig, MatSort, MatTableDataSource} from "@angular/material";
import {ApiService} from "../../services/api.service";
import {Language} from "../../model/model";
import {SatPopover} from "@ncstate/sat-popover";
import {CreateUpdateLanguageComponent} from "./create-update-language/create-update-language.component";

@Component({
  selector: "app-language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.scss"]
})
export class LanguageComponent implements OnInit {
  displayedColumns: string[] = ["name", "order", "references", "action"];
    dataSource: MatTableDataSource<Language>;
    value: string;

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private apiService: ApiService,
                private createLanguageDialog: MatDialog) {
        this.resetTable();
    }

    resetTable() {
        this.dataSource = new MatTableDataSource(this.apiService.getLanguages());
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

    create() {
        this.createOrEditResource(false);
    }

    edit(language: Language) {
        this.createOrEditResource(true, language);
    }

    createOrEditResource(editMod: boolean, resource: Language = null) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            resource: resource,
            editMod: editMod,
        };
        const dialogRef = this.createLanguageDialog.open(CreateUpdateLanguageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            if (data.refresh) {
                this.resetTable();
                this.dataSource.sort = this.sort;
            }
        });
    }

    delete(id: number) {
        console.log(`Book ID: ${id}`);
    }

    updateProperty(event: string | number, property: string, language: Language, popover: SatPopover) {
        language[property] = event;
        this.apiService.updateLanguage(language.id, language);
        this.resetTable();
        this.applyFilter(this.value ? this.value : "");
        popover.close();
    }

}
