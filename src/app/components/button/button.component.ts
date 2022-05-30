import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const button: HTMLButtonElement | null =
      document.querySelector('#myButton');

    const myObservable = fromEvent(button!, 'click');

    const mySubscription = myObservable.subscribe((event) =>
      console.log(event.currentTarget)
    );

    const subscription = myObservable.subscribe({
      next: (event) => console.log(event.currentTarget),
      error: (event) => console.error(event),
      complete: () => console.log('complete'),
    });
  }
}
