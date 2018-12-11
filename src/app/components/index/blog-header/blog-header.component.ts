import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ElementRef} from '@angular/core';


@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {
  @ViewChild('blogIndexLogo')
  private eref: ElementRef;
  constructor(
    private el: ElementRef,
    private render: Renderer2) {
  }

  ngOnInit() {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf('Chrome') > -1) {
      const element = this.el.nativeElement.querySelector('#blog-index-logo>span');
    }
  }
}
