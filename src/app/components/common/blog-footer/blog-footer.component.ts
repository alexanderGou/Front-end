import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.css']
})
export class BlogFooterComponent implements OnInit {
  private static FOOTER_COUNT = 3;
  private static ELEMENT_TYPE = 'div';

  constructor(
    private el: ElementRef,
    private render: Renderer2
    ) { }

  ngOnInit() {
    this.generateFooter();
  }
  private generateFooter() {
    const index_footer = this.el.nativeElement.querySelector('#index_footer');
    const stringContent: Array<string> = ['BLOG', 'VERSION:1.0.0', 'EMAIL:395655863@qq.com'];
    for (let i = 0; i < BlogFooterComponent.FOOTER_COUNT; i++) {
      this.generateFooterItem(index_footer, stringContent[i]);
    }
  }

  private generateFooterItem(index_footer, content) {
    const element = this.render.createElement(BlogFooterComponent.ELEMENT_TYPE);
    const text = this.render.createText(content);
    this.render.appendChild(element, text);
    this.render.addClass(element, 'footerItem');
    this.render.appendChild(index_footer, element);
  }
}
