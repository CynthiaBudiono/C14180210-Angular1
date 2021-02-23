import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  // index = 0;

  // board: any[4][4];
  board = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  baris = 1;
  kolom = 1;

  pemain: boolean = true;

  // papan() {
  //   for (let i = 0; i < this.board.length; i++) {
  //     for (let j = 0; j < this.board.length; j++) {
  //       "tesss";
  //     }
  //   }
  // }

  play(r, c) {
    if (this.pemain == true) {
      this.board[r][c] = "0";
      this.pemain = false;
    } else {
      this.board[r][c] = "1";
      this.pemain = true;
    }
  }
}
