import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-graph-details',
  templateUrl: './users-graph-details.component.html',
  styleUrls: ['./users-graph-details.component.scss']
})
export class UsersGraphDetailsComponent implements OnInit {

  @Input('nodes') nodes;
  @Input('links') links;

  public nodeButtons = [{ id: 'level', label: 'Niveau' },
  { id: 'role', label: 'Rôle' }];
  public checkModel: any = { level: true, role: false };

  constructor() { }

  ngOnInit() {
  }

  nodeColor(data: string){
    if(this.checkModel[data] === true){
      this.nodes.array.forEach( node => {
        switch (data){
          case 'level':
            switch (node.level) { 
              case 'Gold': 
                node.color = '#D4AF37'; 
                break; 
              case 'Silver': 
                node.color = '#C0C0C0'; 
                break; 
              case 'Bronze': 
                node.color = '#CD7F32'; 
                break; 
            }
          case 'role':
          switch (node.role) { 
            case 'MusclR': 
              node.color = '#0040ff'; 
              break; 
            case 'CoachR': 
              node.color = '#000000'; 
              break; 
          }

          
        }
      });
      
    }
  }
}
