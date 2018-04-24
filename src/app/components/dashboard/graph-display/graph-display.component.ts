import {Link, Node} from './d3/models';
import {GraphComponent} from './visuals/graph/graph.component';
import {Neo4jService} from './neo4j.service';
import {Observable} from 'rxjs/Observable';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.scss']
})
export class GraphDisplayComponent implements OnInit, OnDestroy {

  public buttons = [{label: 'Utilisateurs', checkModel: 'checkModel.users'},
    {label: 'Salles', checkModel: 'checkModel.gyms'},
    {label: 'Villes', checkModel: 'checkModel.towns'},
    {label: 'Evenement', checkModel: 'checkModel.events'}];
  public checkModel: any = {users: true, gyms: false, towns: false, events: false};


  nodes: Node[] = [];
  links: Link[] = [];


  @ViewChild(GraphComponent) graph: GraphComponent;

  constructor(private neo4jService: Neo4jService) {
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

  addData(data: string) {

    // const self = this;
    // this.bonusNodesInput.forEach(function (node) {
    //   self.nodes.push(new Node(node.id, node.group, node.label, node.level));
    // });
    // this.graph.forceDirectedGraph.initNodes();
    //
    // this.bonusLinksInput.forEach(function (link) {
    //   self.links.push(new Link(link.source, link.target, link.label));
    // });
    // this.graph.forceDirectedGraph.initLinks();
  }
}
