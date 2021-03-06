import {Link} from './link';
import {Node} from './node';
import * as d3 from 'd3';
import {EventEmitter} from '@angular/core';

const FORCES = {
  LINKS: 0.2,
  COLLISION: 1,
  CHARGE: -200
};

export class ForceDirectedGraph {
  public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  public simulation: d3.Simulation<any, any>;

  public nodes: Node[] = [];
  public links: Link[] = [];
  public options;

  constructor(nodes, links, options: { width, height }) {
    this.nodes = nodes;
    this.links = links;
    this.options = options;
    this.initSimulation(options);
  }

  initNodes() {
    if (!this.simulation) {
      throw new Error('simulation was not initialized yet');
    }

    this.simulation.nodes(this.nodes);
  }

  initLinks() {
    if (!this.simulation) {
      throw new Error('simulation was not initialized yet');
    }

    this.simulation.force('links',
      d3.forceLink(this.links)
        .id(d => d['id'])
        .strength(d => d['strength'])
    );
  }

  initSimulation(options) {
    if (!options || !options.width || !options.height) {
      throw new Error('missing options when initializing simulation');
    }

    /** Creating the simulation */
    if (!this.simulation) {
      const ticker = this.ticker;

      this.simulation = d3.forceSimulation()
        .force('charge',
          d3.forceManyBody()
            .strength(d => FORCES.CHARGE * d['r'])
        )
        .force('collide',
          d3.forceCollide()
            .strength(FORCES.COLLISION)
            .radius(d => d['r'] + 5).iterations(2)
        );

      // Connecting the d3 ticker to an angular event emitter
      this.simulation.on('tick', function () {
        ticker.emit(this);
      });

      this.initNodes();
      this.initLinks();
    }

    /** Updating the central force of the simulation */
    this.simulation.force('centers', d3.forceCenter(options.width / 2, options.height / 2));

    /** Restarting the simulation internal timer */
    this.simulation.restart();
  }

  // removeData(data: string) {
  //   this.links = this.links.filter(link => link.sourceGroup !== data && link.targetGroup !== data);
  //   this.nodes = this.nodes.filter(node => node.group !== data);
  //   this.initLinks();
  //   /** Updating the central force of the simulation */
  //   this.simulation.force('centers', d3.forceCenter(this.options.width / 2, this.options.height / 2));
  //
  //   /** Restarting the simulation internal timer */
  //   this.simulation.restart();
  // }

  updateData(nodes: Node[], links: Link[]) {
    this.simulation.nodes(nodes);
    this.links = links;
    this.initLinks();
    this.simulation.force('centers', d3.forceCenter(this.options.width / 2, this.options.height / 2));

  }
}
