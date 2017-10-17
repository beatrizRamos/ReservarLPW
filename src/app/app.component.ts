import { Component,OnInit } from '@angular/core';
import { MenuItem } from "primeng/primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

export class BreadcrumbDemo implements OnInit {

    private items: MenuItem[];
    
    ngOnInit() {
        this.items = [];
        this.items.push({label:'vizializar'});
        
    }
}
