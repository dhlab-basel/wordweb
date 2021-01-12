import {Component, OnInit, ViewChild} from "@angular/core";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Book, Passage} from "../../model/model";
import {ApiService} from "../../services/api.service";
import {CreateUpdatePassageComponent} from "./create-update-passage/create-update-passage.component";
import {BookRefComponent} from "../../dialog/book-ref/book-ref.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FormControl, FormGroup} from "@angular/forms";
import {TreeTableService} from "../../services/tree-table.service";
import {KnoraService} from "../../services/knora.service";
import {ListService} from "../../services/list.service";
import {IDisplayedProperty, IMainClass} from "../../model/displayModel";

@Component({
  selector: "app-passage",
  templateUrl: "./passage.component.html",
  styleUrls: ["./passage.component.scss"],
    animations: [
        trigger("detailExpand", [
            state("collapsed, void", style({height: "0px", minHeight: "0"})),
            state("expanded", style({height: "*"})),
            transition("expanded <=> collapsed, void => expanded", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
        ]),
    ]
})
export class PassageComponent implements OnInit {
    myPassage: IMainClass = {
        name: "passage",
        mainClass: {name: "passage", variable: "passage"},
        props: [
            {
                name: "hasText",
                priority: 0,
                res: null
            },
            {
                name: "hasTextHist",
                priority: 0,
                res: null
            },
            {
                name: "hasPrefixDisplayedTitle",
                priority: 0,
                res: null
            },
            {
                name: "hasDisplayedTitle",
                priority: 0,
                res: null
            },
            {
                name: "hasPage",
                priority: 0,
                res: null
            },
            {
                name: "hasPageHist",
                priority: 0,
                res: null
            },
            {
                name: "hasResearchField",
                priority: 0,
                res: null
            },
            {
                name: "hasFunctionVoice",
                priority: 0,
                res: null
            },
            {
                name: "hasMarking",
                priority: 0,
                res: null
            },
            {
                name: "hasStatus",
                priority: 0,
                res: null
            },
            {
                name: "hasInternalComment",
                priority: 0,
                res: null
            },
            {
                name: "hasPassageComment",
                priority: 0,
                res: null
            },
            {
                name: "occursIn",
                priority: 0,
                res: {
                    name: "book",
                    props: [
                        {
                            name: "hasPrefixBookTitle",
                            priority: 0,
                            res: null
                        },
                        {
                            name: "hasBookTitle",
                            priority: 0,
                            res: null
                        }
                    ]
                }
            },
            {
                name: "isMentionedIn",
                priority: 1,
                res: {
                    name: "passage",
                    props: [
                        {
                            name: "occursIn",
                            valVar: "sBook",
                            priority: 0,
                            res: {
                                name: "book",
                                props: [
                                    {
                                        name: "hasBookTitle",
                                        valVar: "sBookTitle",
                                        priority: 0,
                                        res: null
                                    },
                                    {
                                        name: "isWrittenBy",
                                        valVar: "sAuthor",
                                        priority: 1,
                                        res: {
                                            name: "person",
                                            props: [
                                                {
                                                    name: "hasFirstName",
                                                    valVar: "sFirstName",
                                                    priority: 1,
                                                    res: null
                                                },
                                                {
                                                    name: "hasLastName",
                                                    valVar: "sLastName",
                                                    priority: 1,
                                                    res: null
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                name: "wasContributedBy",
                priority: 1,
                res: {
                    name: "person",
                    props: [
                        {
                            name: "hasFirstName",
                            valVar: "cFirstName",
                            priority: 0,
                            res: null
                        },
                        {
                            name: "hasLastName",
                            valVar: "cLastName",
                            priority: 0,
                            res: null
                        }
                    ]
                }
            },
            {
                name: "contains",
                priority: 0,
                res: {
                    name: "lexia",
                    props: [
                        {
                            name: "hasLexiaTitle",
                            priority: 0,
                            res: null
                        },
                        {
                            name: "hasLexiaDisplayedTitle",
                            priority: 0,
                            res: null
                        }
                    ]
                }
            }
        ]
    };

    textRef: IDisplayedProperty = this.myPassage.props[0];
    textHistRef: IDisplayedProperty = this.myPassage.props[1];
    prefixDisptitleRef: IDisplayedProperty = this.myPassage.props[2];
    disptitleRef: IDisplayedProperty = this.myPassage.props[3];
    pageRef: IDisplayedProperty = this.myPassage.props[4];
    pageHistRef: IDisplayedProperty = this.myPassage.props[5];
    researchRef: IDisplayedProperty = this.myPassage.props[6];
    functionRef: IDisplayedProperty = this.myPassage.props[7];
    markingRef: IDisplayedProperty = this.myPassage.props[8];
    statusRef: IDisplayedProperty = this.myPassage.props[9];
    intCommentRef: IDisplayedProperty = this.myPassage.props[10];
    passCommentRef: IDisplayedProperty = this.myPassage.props[11];
    bookTitleRef: IDisplayedProperty = this.myPassage.props[12].res.props[1];
    secBookTitleRef: IDisplayedProperty = this.myPassage.props[13].res.props[0].res.props[0];
    contributorRef: IDisplayedProperty = this.myPassage.props[14].res.props[1];
    lexiaRef: IDisplayedProperty = this.myPassage.props[15];
    lexiaTitleRef: IDisplayedProperty = this.myPassage.props[15].res.props[0];
    priority = 0;
    searchResults = [];

    columnsToDisplay: string[] = ["detail", "book", "text", "textHist", "page", "pageHist", "order", "references", "action"];
    dataSource: MatTableDataSource<Passage>;
    expandedElements: any[] = [];
    value: string;
    form: FormGroup;
    researchFields: any[];
    functionVoices: any[];
    markings: any[];
    status: any[];

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private apiService: ApiService,
                private passageDialog: MatDialog,
                private editionDialog: MatDialog,
                public listService: ListService,
                private knoraService: KnoraService,
                private treeTableService: TreeTableService) {
    }

    static customFilter(passage: Passage, filterValue: string): boolean {
        const containsEdition = (passage.occursIn as Book).title.toLowerCase().indexOf(filterValue) > -1;
        const containsText = passage.text.toLowerCase().indexOf(filterValue) > -1;

        return containsEdition || containsText;
    }

    ngOnInit() {
        this.form = new FormGroup({
            text: new FormControl("", []),
            textHistNull: new FormControl(false, []),
            textHist: new FormGroup({
                txh: new FormControl("", [])
            }),
            prefDisplayedTitleNull: new FormControl(false, []),
            prefDisplayedTitle: new FormGroup({
                prefdistit: new FormControl("", []),
            }),
            displayedTitle: new FormControl("", []),
            pageNull: new FormControl(false, []),
            page: new FormGroup({
                pg: new FormControl("", [])
            }),
            pagHistNull: new FormControl(false, []),
            pageHist: new FormGroup({
                pgh: new FormControl("", [])
            }),
            research: new FormControl("", []),
            function: new FormControl("", []),
            marking: new FormControl("", []),
            status: new FormControl("", []),
            intCommentNull: new FormControl(false, []),
            intComment: new FormGroup({
                intc: new FormControl("", [])
            }),
            passCommentNull: new FormControl(false, []),
            passComment: new FormGroup({
                pc: new FormControl("", [])
            }),
            bookTitle: new FormControl("", []),
            secBookTitleNull: new FormControl(false, []),
            secBookTitle: new FormGroup({
                secbt: new FormControl("", [])
            }),
            contributor: new FormControl("", []),
            lexiaNull: new FormControl(false, []),
            lexia: new FormGroup({
                lex: new FormControl("", [])
            }),
            // extraNull: new FormControl( false, []),
            // extra: new FormGroup({
            //     ex: new FormControl("", [])
            // })
        });

        const researchNode = this.listService.getList("researchField").nodes;
        this.researchFields = researchNode.reduce((acc, list) => this.treeTableService.flattenTree(acc, list), []);

        const functionNode = this.listService.getList("functionVoice").nodes;
        this.functionVoices = functionNode.reduce((acc, list) => this.treeTableService.flattenTree(acc, list), []);

        const markingNode = this.listService.getList("marking").nodes;
        this.markings = markingNode.reduce((acc, list) => this.treeTableService.flattenTree(acc, list), []);

        const statusNode = this.listService.getList("status").nodes;
        this.status = statusNode.reduce((acc, list) => this.treeTableService.flattenTree(acc, list), []);

        this.resetTable();
    }

    resetSearch() {
        this.form.get("text").reset("");
        this.form.controls.textHistNull.setValue(false);
        this.form.get("textHist").enable();
        this.form.get("textHist.txh").reset("");
        this.form.controls.prefDisplayedTitleNull.setValue(false);
        this.form.get("prefDisplayedTitle").enable();
        this.form.get("prefDisplayedTitle.prefdistit").reset("");
        this.form.controls.pageNull.setValue(false);
        this.form.get("displayedTitle").reset("");
        this.form.get("page").enable();
        this.form.get("page.pg").reset("");
        this.form.controls.pagHistNull.setValue(false);
        this.form.get("pageHist").enable();
        this.form.get("pageHist.pgh").reset("");
        this.form.get("research").reset("");
        this.form.get("function").reset("");
        this.form.get("marking").reset("");
        this.form.get("status").reset("");
        this.form.controls.intCommentNull.setValue(false);
        this.form.get("intComment").enable();
        this.form.get("intComment.intc").reset("");
        this.form.controls.passCommentNull.setValue(false);
        this.form.get("passComment").enable();
        this.form.get("passComment.pc").reset("");
        this.form.get("bookTitle").reset("");
        this.form.controls.secBookTitleNull.setValue(false);
        this.form.get("secBookTitle").enable();
        this.form.get("secBookTitle.secbt").reset("");
        this.form.get("contributor").reset("");
        this.form.controls.lexiaNull.setValue(false);
        this.form.get("lexia").enable();
        this.form.get("lexia.lex").reset("");
        // this.form.controls.extraNull.setValue(false);
        // this.form.get("extra").enable();
        // this.form.get("extra.ex").reset("");
    }

    onChange(event, groupName: string) {
        event.checked ? this.form.get(groupName).disable() : this.form.get(groupName).enable();
    }

    resetTable() {
        this.apiService.getPassages(true).subscribe((passages) => {
            console.log(passages);
            this.dataSource = new MatTableDataSource(passages);
            this.dataSource.sort = this.sort;
            this.dataSource.sortingDataAccessor = ((item: any, property) => {
                switch (property) {
                    case "book": return item.occursIn.title;
                    default: return item[property];
                }
            });
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filterPredicate = PassageComponent.customFilter;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    clear() {
        this.dataSource.filter = this.value = "";
    }

    rowCount() {
        return this.dataSource ? this.dataSource.filteredData.length : 0;
    }

    create() {
        this.createOrEditResource(false);
    }

    edit(passage: Passage) {
        this.createOrEditResource(true, passage);
    }

    createOrEditResource(editMod: boolean, resource: Passage = null) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "650px";
        dialogConfig.data = {
            resource,
            editMod,
        };
        const dialogRef = this.passageDialog.open(CreateUpdatePassageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            if (data.refresh) {
                this.resetTable();
                this.dataSource.sort = this.sort;
            }
        });
    }

    delete(id: number) {
        console.log(`Passage ID: ${id}`);
    }

    editBook(passage: Passage) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            list: [passage.occursIn],
            editMod: [passage.occursIn].length > 0,
            max: 1
        };
        const dialogRef = this.editionDialog.open(BookRefComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            if (data.submit) {
                const copyPassage = JSON.parse(JSON.stringify(passage));
                copyPassage.edition = data.data[0];
                // update request
                this.apiService.updatePassage(copyPassage.id, copyPassage);
                this.resetTable();
            }
        });
    }

    contains(obj: any, arr: any[]) {
        for (const i of arr) {
            if (JSON.stringify(obj) === JSON.stringify(i)) {
                return true;
            }
        }
        return false;
    }

    addElement(obj: any, arr: any[]) {
        arr.push(obj);
    }

    removeElement(obj: any, arr: any[]) {
        return arr.filter((element => JSON.stringify(obj) !== JSON.stringify(element)));
    }

    expansion(element) {
        this.contains(element, this.expandedElements) ? this.expandedElements = this.removeElement(element, this.expandedElements) : this.addElement(element, this.expandedElements);
    }

    search() {
        console.log("Searching starts...");

        // Sets text property
        if (this.form.get("text").value) {
            this.textRef.searchVal1 = this.form.get("text").value;
        } else {
            this.textRef.searchVal1 = null;
        }
        // Sets text hist property
        if (this.form.controls.textHistNull.value) {
            this.textHistRef.isNull = true;
            this.textHistRef.searchVal1 = null;
        } else {
            this.textHistRef.isNull = false;
            if (this.form.get("textHist.txh").value) {
                this.textHistRef.searchVal1 = this.form.get("textHist.txh").value;
            } else {
                this.textHistRef.searchVal1 = null;
            }
        }
        // Sets prefix displayed title property
        if (this.form.controls.prefDisplayedTitleNull.value) {
            this.prefixDisptitleRef.isNull = true;
            this.prefixDisptitleRef.searchVal1 = null;
        } else {
            this.prefixDisptitleRef.isNull = false;
            if (this.form.get("prefDisplayedTitle.prefdistit").value) {
                this.prefixDisptitleRef.searchVal1 = this.form.get("prefDisplayedTitle.prefdistit").value;
            } else {
                this.prefixDisptitleRef.searchVal1 = null;
            }
        }
        // Sets displayed title property
        if (this.form.get("displayedTitle").value) {
            this.disptitleRef.searchVal1 = this.form.get("displayedTitle").value;
        } else {
            this.disptitleRef.searchVal1 = null;
        }
        // Sets page property
        if (this.form.controls.pageNull.value) {
            this.pageRef.isNull = true;
            this.pageRef.searchVal1 = null;
        } else {
            this.pageRef.isNull = false;
            if (this.form.get("page.pg").value) {
                this.pageRef.searchVal1 = this.form.get("page.pg").value;
            } else {
                this.pageRef.searchVal1 = null;
            }
        }
        // Sets page hist property
        if (this.form.controls.pagHistNull.value) {
            this.pageHistRef.isNull = true;
            this.pageHistRef.searchVal1 = null;
        } else {
            this.pageHistRef.isNull = false;
            if (this.form.get("pageHist.pgh").value) {
                this.pageHistRef.searchVal1 = this.form.get("pageHist.pgh").value;
            } else {
                this.pageHistRef.searchVal1 = null;
            }
        }
        // Sets research property
        if (this.form.get("research").value) {
            this.researchRef.searchVal1 = this.form.get("research").value;
        } else {
            this.researchRef.searchVal1 = null;
        }
        // Sets function property
        if (this.form.get("function").value) {
            this.functionRef.searchVal1 = this.form.get("function").value;
        } else {
            this.functionRef.searchVal1 = null;
        }
        // Sets marking property
        if (this.form.get("marking").value) {
            this.markingRef.searchVal1 = this.form.get("marking").value;
        } else {
            this.markingRef.searchVal1 = null;
        }
        // Sets status property
        if (this.form.get("status").value) {
            this.statusRef.searchVal1 = this.form.get("status").value;
        } else {
            this.statusRef.searchVal1 = null;
        }
        // Sets internal comment property
        if (this.form.controls.intCommentNull.value) {
            this.intCommentRef.isNull = true;
            this.intCommentRef.searchVal1 = null;
        } else {
            this.intCommentRef.isNull = false;
            if (this.form.get("intComment.intc").value) {
                this.intCommentRef.searchVal1 = this.form.get("intComment.intc").value;
            } else {
                this.intCommentRef.searchVal1 = null;
            }
        }
        // Sets passage comment property
        if (this.form.controls.passCommentNull.value) {
            this.passCommentRef.isNull = true;
            this.passCommentRef.searchVal1 = null;
        } else {
            this.passCommentRef.isNull = false;
            if (this.form.get("passComment.pc").value) {
                this.passCommentRef.searchVal1 = this.form.get("passComment.pc").value;
            } else {
                this.passCommentRef.searchVal1 = null;
            }
        }
        // Sets book title property
        if (this.form.get("bookTitle").value) {
            this.bookTitleRef.searchVal1 = this.form.get("bookTitle").value;
        } else {
            this.bookTitleRef.searchVal1 = null;
        }



        // Sets contributor name property
        if (this.form.get("contributor").value) {
            this.contributorRef.searchVal1 = this.form.get("contributor").value;
        } else {
            this.contributorRef.searchVal1 = null;
        }
        // Sets lexia property
        if (this.form.controls.lexiaNull.value) {
            this.lexiaRef.isNull = true;
            this.lexiaTitleRef.searchVal1 = null;
        } else {
            this.lexiaRef.isNull = false;
            if (this.form.get("lexia.lex").value) {
                this.lexiaTitleRef.searchVal1 = this.form.get("lexia.lex").value;
                this.lexiaRef.mandatory = true;
            } else {
                this.lexiaTitleRef.searchVal1 = null;
                this.lexiaRef.mandatory = false;
            }
        }

        this.knoraService.gravsearchQueryCount(this.myPassage, this.priority)
            .subscribe(numb => console.log("amount", numb));

        this.knoraService.gravseachQuery(this.myPassage, this.priority)
            .subscribe(data => {
                console.log("results", data);
                this.searchResults = data;
            });
    }

}

