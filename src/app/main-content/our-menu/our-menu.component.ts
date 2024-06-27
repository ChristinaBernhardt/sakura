import { Component } from '@angular/core';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [],
  template: ` <section class="ourmenu">
  <h2 id="translate3">OUR MENU</h2>

  <div class="tonkatsu">
    <img class="tonkatsuimg" src="./img/R1.png" alt="tonkatsuimg">
    <div class="tonkatsutable">
      <table class="width100">
        <tr>
          <th colspan="2" >
            <h3>Tonkatsu Ramen</h3>
          </th>
        </tr>
        <tr>
          <td id="translate11">CHICKEN</td>
          <td class="cbs" >11.95 €</td>
        </tr>
        <tr>
          <td id="translate12">BEEF</td>
          <td class="cbs" >12.95 €</td>
        </tr>
        <tr>
          <td id="translate13">SHRIMP</td>
          <td class="cbs" >13.95 €</td>
        </tr>
      </table>
    </div>
  </div>
  <div class="spicy">
    <img class="tonkatsuimg" src="./img/R2.png">
    <div class="tonkatsutable">
      <table class="width100">
        <th colspan="2" >
          <h3>Spicy Miso Ramen</h3>
        </th>
        <tr>
          <td id="translate14">CHICKEN</td>
          <td class="cbs" >11.95 €</td>
        </tr>
        <tr>
          <td id="translate15">BEEF</td>
          <td class="cbs" >12.95 €</td>
        </tr>
        <tr>
          <td id="translate16">SHRIMP</td>
          <td class="cbs" >13.95 €</td>
        </tr>
      </table>
    </div>
  </div>
  <div class="tonkatsu">
    <img class="tonkatsuimg" src="./img/R3.png" alt="tonkatsuimg">
    <div class="tonkatsutable">
      <table class="width100">
        <tr>
          <th colspan="2" >
            <h3>Shio Ramen</h3>
          </th>
        </tr>
        <tr>
          <td id="translate17">CHICKEN</td>
          <td class="cbs" >11.95 €</td>
        </tr>
        <tr>
          <td id="translate18">BEEF</td>
          <td class="cbs" >12.95 €</td>
        </tr>
        <tr>
          <td id="translate19">SHRIMP</td>
          <td class="cbs" >13.95 €</td>
        </tr>
      </table>
    </div>
  </div>

</section>`,
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

}
