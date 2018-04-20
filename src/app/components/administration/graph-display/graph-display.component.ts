///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Link, Node} from './d3/models';
import {GraphComponent} from './visuals/graph/graph.component';
import {Neo4jService} from './neo4j.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.scss']
})
export class GraphDisplayComponent implements OnInit, OnDestroy {


  nodes: Node[] = [];
  links: Link[] = [];
  nodesInput = [
    {id: 'animal', group: 0, label: 'Animals', level: 1},
    {id: 'mammal', group: 0, label: 'Mammals', level: 1},
    {id: 'dog', group: 0, label: 'Dogs', level: 2},
    {id: 'cat', group: 0, label: 'Cats', level: 2},
    {id: 'fox', group: 0, label: 'Foxes', level: 2},
    {id: 'elk', group: 0, label: 'Elk', level: 2},
    {id: 'insect', group: 1, label: 'Insects', level: 1},
    {id: 'ant', group: 1, label: 'Ants', level: 2},
    {id: 'bee', group: 1, label: 'Bees', level: 2},
    {id: 'fish', group: 2, label: 'Fish', level: 1},
    {id: 'carp', group: 2, label: 'Carp', level: 2},
    {id: 'pike', group: 2, label: 'Pikes', level: 2}
  ];

  // linksInput = [
  //   {target: 'animal', source: 'mammal', strength: 0.7},
  //   {target: 'animal', source: 'insect', strength: 0.7},
  //   {target: 'animal', source: 'fish', strength: 0.7},
  //
  //   {target: 'mammal', source: 'dog', strength: 0.4},
  //   {target: 'mammal', source: 'cat', strength: 0.4},
  //   {target: 'mammal', source: 'fox', strength: 0.4},
  //   {target: 'mammal', source: 'elk', strength: 0.4},
  //   {target: 'insect', source: 'ant', strength: 0.4},
  //   {target: 'insect', source: 'bee', strength: 0.4},
  //   {target: 'fish', source: 'carp', strength: 0.4},
  //   {target: 'fish', source: 'pike', strength: 0.4},
  // ];

  bonusNodesInput = [
    {id: 'human', group: 0, label: 'Humans', level: 1},
    {id: 'zhening', group: 0, label: 'Zhening', level: 2},
    {id: 'rukiye', group: 0, label: 'Rukiye', level: 2},
  ];

  bonusLinksInput = [
    {target: 'animal', source: 'human', label: 0.7},

    {target: 'human', source: 'zhening', label: 0.4},
    {target: 'human', source: 'rukiye', label: 0.4},

  ];

  @ViewChild(GraphComponent) graph: GraphComponent;

  constructor(private neo4jService: Neo4jService) {
    // const self = this;
    // this.neo4jService.getUsers()
    //   .subscribe((data: { links: Link[], nodes: Node[] }) => {
    //       data.nodes.forEach(function (node) {
    //         self.nodes.push(new Node(node.id, node.group, node.label, node.level));
    //       });
    //       // this.graph.forceDirectedGraph.initNodes();
    //
    //       data.links.forEach(function (link) {
    //         self.links.push(new Link(link.source, link.target, link.strength));
    //       });
    //
    //       this.graph.forceDirectedGraph.initSimulation(this.graph.options);
    //     },
    //     error => Observable.throw(error || 'Server error')
    //   );


    // this.nodesInput.forEach(function (node) {
    //   self.nodes.push(new Node(node.id, node.group, node.label, node.level));
    // });
    //
    // this.linksInput.forEach(function (link) {
    //   self.links.push(new Link(link.source, link.target, link.strength));
    // });
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
    const self = this;

    this.neo4jService.getUsers()
      .subscribe((data: { links: Link[], nodes: Node[] }) => {

          data.nodes.forEach(function (node) {
            self.nodes.push(new Node(node.id, node.group, node.username, node.level));
          });
          this.graph.forceDirectedGraph.initNodes();

          data.links.forEach(function (link) {
            self.links.push(new Link(link.source, link.target, link.label));
          });

          this.graph.forceDirectedGraph.initLinks();
        },
        error => Observable.throw(error || 'Server error')
      );
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }


  changeNodeColor() {
    // this.nodes.forEach(function (node) {
    //   node.color = 'black';
    // });

    const self = this;
    this.bonusNodesInput.forEach(function (node) {
      self.nodes.push(new Node(node.id, node.group, node.label, node.level));
    });
    this.graph.forceDirectedGraph.initNodes();

    this.bonusLinksInput.forEach(function (link) {
      self.links.push(new Link(link.source, link.target, link.label));
    });
    this.graph.forceDirectedGraph.initLinks();

  }

}
