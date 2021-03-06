import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit} from '@angular/core';
import {D3Service, ForceDirectedGraph} from '../../d3';
import { UsersGraphDetailsService } from '../../graph-drawer/graph-details/users-graph-details/users-graph-details.service';

@Component({
  selector: 'app-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg #svg [attr.width]="options.width" [attr.height]="options.height">
      <g [zoomableOf]="svg">
        <g [linkVisual]="link" *ngFor="let link of links"></g>
        <g [nodeVisual]="node" *ngFor="let node of nodes" (click)="drawer.toggle()"
        routerLink="/graph/{{node.group}}"
           [draggableNode]="node" [draggableInGraph]="forceDirectedGraph"></g>
      </g>
    </svg>
  `,
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes;
  @Input('links') links;
  @Input('drawer') drawer;

  forceDirectedGraph: ForceDirectedGraph;
  private _options: { width, height };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.forceDirectedGraph.initSimulation(this.options);
  }


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    /** Receiving an initialized simulated forceDirectedGraph from our custom d3 service */
    this.forceDirectedGraph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    this.forceDirectedGraph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
 
  }

  ngAfterViewInit() {
    this.forceDirectedGraph.initSimulation(this.options);
  }

  // TODO find a cleaner way to set size
  get options() {
    return this._options = {
      width: document.body.clientWidth - 17,
      height: document.body.clientHeight - 70
    };
  }
}
