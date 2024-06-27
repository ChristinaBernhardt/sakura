import { Component } from '@angular/core';

@Component({
  selector: 'app-find-us-at',
  standalone: true,
  imports: [],
  template: ` <section>
    <div id="findusatlink" class="findusat">
      <div>
        <h2 class="lo" id="translate10">FIND US AT</h2>
        <img src="./img/map_marker.svg" ;>Kapuzinerstraße 31, München, BY 80337
      </div>
    </div>
    <iframe class="iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2081517665038!2d11.561203299999999!3d48.125509099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf44d01affc5%3A0xe7a07e0710be63e8!2sKapuzinerstra%C3%9Fe%2031%2C%2080337%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1699911571861!5m2!1sde!2sde"
      style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>`,
  styleUrl: './find-us-at.component.scss'
})
export class FindUsAtComponent {

}
