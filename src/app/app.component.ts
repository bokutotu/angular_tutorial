import { Component } from '@angular/core';

// メタデータを指定するデコレータ
@Component({
  selector: 'app-root', // コンポーネントのCSS要素セクター
  templateUrl: './app.component.html', // テンプレートHTMLのパス
  styleUrls: ['./app.component.css'] // コンポーネント独自のCSS
})
export class AppComponent {
  title = 'Tour of Heroes';
}
