export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  group: string;
  label: string;
  level: number;
  normal = 0;
  color: string;

  constructor(id, group, label, level) {
    this.id = id;
    this.group = group;
    this.label = label;
    this.level = level;
    this.color = this.level === 1 ? 'red' : 'gray';
  }

  // normal = () => {
  //   return Math.sqrt(this.linkCount / APP_CONFIG.N);
  // };


  get r() {
    return 50 * this.normal + 10;
  }

  get fontSize() {
    return (30 * this.normal + 10) + 'px';
  }

  // get color() {
  //   return this.level === 1 ? 'red' : 'gray';
  // }
}
