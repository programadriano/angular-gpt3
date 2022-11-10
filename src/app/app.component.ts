import { Component } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-gpt3';
  texto: any = "";
  showResult: boolean = false;
  showLoading: boolean = false;
  constructor(private _homeService: HomeService) { }

  getResult(param: string) {
    this.showLoading = true;
    this._homeService.getResult(param).subscribe(data => {
      this.showResult = true;
      this.showLoading = false;

      this.texto = data.message;
    });
  }
}
