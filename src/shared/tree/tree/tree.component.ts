import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode } from './tree.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() treeData: TreeNode[];
  @Output() treeNodeClicked = new EventEmitter();

  ngOnInit() {
  }

  toggleChild(node: TreeNode) {
    node.expanded = !node.expanded;
  }
  handleClick(node, subnode?) {
    this.treeNodeClicked.emit({ node, subnode });
  }

}
