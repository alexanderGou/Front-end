import {Component, OnInit} from '@angular/core';
import {CommunicationService} from '../../../service/communication.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrls: ['./blog-menu.component.css']
})
export class BlogMenuComponent implements OnInit {

  constructor(private communitService: CommunicationService) {
    console.log('recived1 ===>' + this.isCollapsed);
  }

  isCollapsed = false;
  public subscription: Subscription;

  ngOnInit() {
    this.communitService.getMessage().subscribe((message: any) => {
      this.isCollapsed = message;
    });
  }
  ngAfterViewInit(): void {
    this.subscription = this.communitService.getMessage().subscribe(msg => {
      // 根据msg，来处理你的业务逻辑。
      console.log('recived ===>' + msg);
    });
  }
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }
}
