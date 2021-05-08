import {trigger, transition, style, query, group, animateChild, animate, keyframes } from '@angular/animations';

const animationTime = 1200;

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter', [
      style({
        opacity: 0,
      })
    ], { optional: true }),
    query(':enter', [
      animate(`${animationTime}ms ease`, style({
        opacity: 1
      }))
    ], { optional: true })
  ])
]);
