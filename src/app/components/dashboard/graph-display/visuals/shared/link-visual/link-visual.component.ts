import {Link} from '../../../d3';
import {Component, Input} from '@angular/core';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
      class="link"
      [attr.x1]="link.source.x"
      [attr.y1]="link.source.y"
      [attr.x2]="link.target.x"
      [attr.y2]="link.target.y"
    ></svg:line>
    <svg:text
      class="link-name"
      [attr.transform]="link.transform"
      [attr.dy]="-3"
      [attr.font-size]="10"
    >
      {{link.label}}
    </svg:text>
  `,
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent {
  @Input('linkVisual') link: Link;
}
