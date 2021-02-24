import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "User ";
  // index = 0;

  board: String[][] = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  baris = 1;
  kolom = 1;
  pemain: boolean = true;

  hasilP0 = 0;
  hasilP1 = 0;

  win = 0;
  // papan() {
  //   for (var i: number = 0; i < 5; i++) {
  //     this.output[i] = [];
  //     for (var j: number; j < 5; j++) {
  //       this.output[i][j] = "*";
  //     }
  //   }
  // }

  play(r, c) {
    // r = r - 1;
    // c = c - 1;
    if (r < 0 && r > 5) {
      alert("Baris Melebihi Papan Board");
    } else if (c < 0 && c > 5) {
      alert("Kolom Melebihi Papan Board");
    } else {
      console.log(r + " " + c);
      console.log(this.board[r][c]);
      if (this.board[r - 1][c - 1] == "*") {
        if (this.pemain == true) {
          this.board[r - 1][c - 1] = "0";
          this.pemain = false;
        } else {
          this.board[r - 1][c - 1] = "1";
          this.pemain = true;
        }
      } else {
        console.log("pilih yang lain");
      }
    }

    //Horizontal
    for (let i = 0; i < 5; i++) {
      this.hasilP0 = 0;
      this.hasilP1 = 0;
      for (let j = 0; j < 5; j++) {
        console.log(this.board[i][j]);
        if (this.board[i][j] == "0") {
          this.hasilP0 += 1;
        }
        if (this.board[i][j] == "1") {
          this.hasilP1 += 1;
        }
        // console.log("hasil P0 : " + this.hasilP0);
        // console.log("hasil P1 : " + this.hasilP1);
        if (this.hasilP0 >= 4) {
          console.log("Player 0 WIN !!");
          this.win = 1;
        }
        if (this.hasilP1 >= 4) {
          console.log("Player 1 WIN !!");
          this.win = 2;
        }
      }
      console.log("\n");
    }

    //Vertikal
    for (let i = 0; i < 5; i++) {
      this.hasilP0 = 0;
      this.hasilP1 = 0;
      for (let j = 0; j < 5; j++) {
        if (this.board[j][i] == "0") {
          this.hasilP0 += 1;
        }
        if (this.board[j][i] == "1") {
          this.hasilP1 += 1;
        }
        // console.log("hasil P0 : " + this.hasilP0);
        // console.log("hasil P1 : " + this.hasilP1);
        if (this.hasilP0 >= 4) {
          console.log("Player 0 WIN !!");
          this.win = 1;
        }
        if (this.hasilP1 >= 4) {
          console.log("Player 1 WIN !!");
          this.win = 2;
        }
      }
    }
  }
}
