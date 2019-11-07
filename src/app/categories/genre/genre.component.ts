import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {Genre} from "../../model/model";
import {MatTableDataSource} from "@angular/material";
import {TreeTableService} from "../../services/tree-table.service";

@Component({
    selector: "app-genre",
    templateUrl: "./genre.component.html",
    styleUrls: ["./genre.component.scss"]
})
export class GenreComponent implements OnInit {
    genres: Genre[];
    treeTable: any[];
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ["name", "references", "action"];
    value: string;

    constructor(private apiService: ApiService,
                private treeService: TreeTableService) {
        this.value = "";
    }

    ngOnInit() {
        this.resetTable();
    }

    resetTable() {
        this.apiService.getGenre(0, true)
            .subscribe((genre) => {
                this.genres = genre.nodes as Genre[];
                this.treeTable = this.treeService.toTreeTable(this.genres);
                const newTree = this.treeTable.reduce((acc, element) => this.treeService.flattenTree(acc, element), []);
                this.dataSource = this.generateDataSource(newTree);
            });
    }

    generateDataSource(newTree): MatTableDataSource<any> {
        return new MatTableDataSource(newTree.filter(x => x.isVisible));
    }

    edit(element) {
        console.log(element);
    }

    formatIndentation(node: any): string {
        return "&nbsp;".repeat(node.depth * 5);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    clear() {
        this.dataSource.filter = this.value = "";
    }

    rowCount() {
        return this.dataSource ? this.dataSource.filteredData.length : 0;
    }

    bla(element: any) {
        element.isExpanded ? this.treeService.close(element) : this.treeService.expand(element);
        const newTree = this.treeTable.reduce((acc, bla) => this.treeService.flattenTree(acc, bla), []);
        this.dataSource = this.generateDataSource(newTree);
    }

}
