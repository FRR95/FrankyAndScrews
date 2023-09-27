import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  animations: [
    trigger('foobar', [
      state('show', style({opacity: 1,transform: "translateX(0)"})),
      state('hide', style({opacity: 0,transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
,
trigger('foobar1', [
  state('show', style({opacity: 1,transform: "translateX(0)"})),
  state('hide', style({opacity: 0,transform: "translateX(-100%)"
  })),
  transition('show => hide', animate('700ms ease-out')),
  transition('hide => show', animate('700ms ease-in'))
])
  ]
})
export class AccordionComponent implements OnInit {
  state= 'hide';
  constructor(private el:ElementRef) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition-150) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }
}
