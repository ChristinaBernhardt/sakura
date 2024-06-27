import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  imports: [],
  template: ` <section>
  <h2 id="translate2">HOW TO ORDER</h2>
  <div class="ordersteps">
    <div class="order">
      <img class="orderimg" src="./img/noodle.png">
      <div class="ordertext" id="translate4">Pick your noodle</div>
    </div>
    <div id="ourmenulink" class="order">
      <img class="orderimg" src="./img/broth.png">
      <div class="ordertext" id="translate5">Pick your broth</div>
    </div>
    <div class="order">
      <img class="orderimg" src="./img/egg.png">
      <div class="ordertext" id="translate6">Add your toppings</div>
    </div>
  </div>
</section>`,
  styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {

}
