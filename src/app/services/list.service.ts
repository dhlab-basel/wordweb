import {Injectable} from "@angular/core";
import {TreeTableService} from "./tree-table.service";
import {List} from "@dasch-swiss/dsp-js";

export interface ListStructure {
    id: string;
    name: string;
    root: boolean;
    rootNode: string;
    parentId: string;
    nodes: ListStructure[];
}

@Injectable()

export class ListService {
    private _lists: { [key: string]: ListStructure } = {
        gender: null,
        language: null,
        image: null,
        researchField: null,
        marking: null,
        functionVoice: null,
        formalClass: null,
        genre: null,
        subject: null,
        status: null,
        placeVenue: null,
    };

    constructor(private treeTableService: TreeTableService) {
    }

    private getNodes(nodes, parentId) {
        return nodes.map(node => {
            const customNode = {
                id: node.id,
                name: node.name,
                root: false,
                rootNode: node.hasRootNode,
                parentId: parentId,
                nodes: []
            };

            if (node.children.length !== 0) {
                customNode.nodes = this.getNodes(node.children, node.id);
            }

            return customNode;
        });
    }

    getNode(id: string): any {
        return this.getNodeByNodeId(Object.values(this._lists), id);
    }

    private getNodeByNodeId(nodes: ListStructure[], nodeId: string): any {
        for (const node of nodes) {
            if (node) {
                if (node.id === nodeId) {
                    return node;
                } else if (node.nodes.length !== 0) {
                    const foundNode = this.getNodeByNodeId(node.nodes, nodeId);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }
        }
        return null;
    }

    getNameOfNode(id: string): string {
        return this.getNameByNodeId(Object.values(this._lists), id);
    }

    private getNameByNodeId(nodes: ListStructure[], nodeId: string): string {
        for (const node of nodes) {
            if (node) {
                if (node.id === nodeId) {
                    return node.name;
                } else if (node.nodes.length !== 0) {
                    const name = this.getNameByNodeId(node.nodes, nodeId);
                    if (name !== "-1") {
                        return name;
                    }
                }
            }
        }
        return "-1";
    }

    getIdOfNode(nodeName: string): string {
        return this.getIdByNodeName(Object.values(this._lists), nodeName);
    }

    private getIdByNodeName(nodes: ListStructure[], nodeName: string): string {
        for (const node of nodes) {
            if (node) {
                if (node.name === nodeName) {
                    return node.id;
                } else if (node.nodes.length !== 0) {
                    const iri = this.getIdByNodeName(node.nodes, nodeName);
                    if (iri !== "-1") {
                        return iri;
                    }
                }
            }
        }
        return "-1";
    }

    getFlattenList(listName: string) :any {
        if (this._lists[listName] == undefined) {
            throw new Error(`list ${listName} does not exist`);
        }

        return this._lists[listName].nodes
            .reduce((acc, list) => this.treeTableService.flattenTree(acc, list), []);
    }

    printLists() {
        console.log(this._lists);
    }

    set list(list: List) {
        if (this._lists.hasOwnProperty(list.listinfo.name)) {

            this._lists[list.listinfo.name] = {
                id: list.listinfo.id,
                name: list.listinfo.name,
                root: true,
                rootNode: list.listinfo.id,
                parentId: null,
                nodes: this.getNodes(list.children, list.listinfo.id)
            };
        }
    }

}
