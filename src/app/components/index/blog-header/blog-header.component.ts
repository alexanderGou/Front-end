import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ElementRef} from '@angular/core';
import {CommunicationService} from '../../../service/communication.service';


@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {
  @ViewChild('blogIndexLogo')
  private eref: ElementRef;
  isCloseAble = false;

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private commoniutService: CommunicationService) {
  }

  ngOnInit() {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf('Chrome') > -1) {
      const element = this.el.nativeElement.querySelector('#blog-index-logo>span');
    }
  }

  sendCloseAbleEvent(): void {
    this.isCloseAble = !this.isCloseAble;
    this.commoniutService.sendMessage(this.isCloseAble);
    console.log('send side=====>' + this.isCloseAble);
  }
}
