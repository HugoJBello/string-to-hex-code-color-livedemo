import { Component, OnInit } from '@angular/core';
import {String2HexCodeColor} from 'string-to-hex-code-color';

@Component({
  selector: 'app-live-demo',
  templateUrl: './live-demo.component.html',
  styleUrls: ['./live-demo.component.css']
})
export class LiveDemoComponent implements OnInit {
  title = 'ngx-string-to-css-color-app';
  textSample = ['Some text', 'Another text', 'Piece of text', 'More txt', 'The same', 'Yet Another'];
  text = 'add text';
  string2HexCodeColor = new String2HexCodeColor();
  codeStringToColor: string;
  codeStringToColorShade1: string;
  codeStringToColorShade2: string;
  codeStringToColorShade3: string;
  codeStringToColorShade4: string;
  constructor() {}

  ngOnInit() {
    this.onChangeText();
    const str = new String2HexCodeColor(0.2);
    console.log(str.stringToColor('aaa'));

  }

  onChangeText() {
    this.codeStringToColor = 'string2HexCodeColor.stringToColor("' + this.text + '")';
    this.codeStringToColorShade1 = 'string2HexCodeColor.stringToColor("' + this.text + '",\'-0.5\')';
    this.codeStringToColorShade2 = 'string2HexCodeColor.stringToColor("' + this.text + '",\'-0.2\')';
    this.codeStringToColorShade3 = 'string2HexCodeColor.stringToColor("' + this.text + '",\'0\')';
    this.codeStringToColorShade4 = 'string2HexCodeColor.stringToColor("' + this.text + '",\'0.2\')';
  }
}
