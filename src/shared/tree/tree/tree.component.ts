import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from './tree.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() treeData: TreeNode[];

  ngOnInit() {
  }

  toggleChild(node: TreeNode) {
    node.expanded = !node.expanded;
  }
  handleClick(node) {
    console.log(node);
  }

}
