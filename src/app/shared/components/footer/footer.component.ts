import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: ` <footer>
    <img id="footerlink" class="flowerfooter" src="./img/sakura_ramen_logo_and_text.svg">
    <div class="social">
      <img class="inst" src="./img/tripadvisor_logo.svg">
      <img class="inst" src="./img/facebook_logo.svg">
      <img class="inst" src="./img/instagram_logo.svg">
    </div>
  </footer>`,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
