import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // name = "Angular " + VERSION.major;
  name = "User ";
  // index = 0;

  // board: any[4][4];
  board = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  board2: any[][];
  baris = 1;
  kolom = 1;
  kolP0 = 0;
  kolP1 = 0;
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
    if (r < 0 && r > 5) {
      alert("Baris Invalid");
    } else if (c < 0 && c > 5) {
      alert("Kolom Invalid");
    } else {
      console.log(r + " " + c);
      console.log(this.board[r][c]);
      if (this.board[r][c] == "*") {
        if (this.pemain == true) {
          this.board[r][c] = "0";
          this.pemain = false;
        } else {
          this.board[r][c] = "1";
          this.pemain = true;
        }
      } else {
        console.log("pilih yang lain");
      }
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        console.log(this.board[i][j]);
        // console.log(this.board2.length);
        //Horizontal
        if (this.board2.length == 0) {
          //maunya nek masih kosong isi dulu
          if (this.board[i][j] == "0") {
            this.hasilP0 += 1;
            // this.board2.push = this.board[i][j];
          }
          if (this.board[i][j] == "1") {
            this.hasilP1 += 1;
          }
        }
        for (let a = 0; a < this.board2.length; a++) {
          for (let b = 0; b < this.board2.length; b++) {
            if (this.board2[a][b] != this.board[i][j]) {
              if (this.board[i][j] == "0") {
                this.hasilP0 += 1;
                // this.board2.push = this.board[i][j];
              }
              if (this.board[i][j] == "1") {
                this.hasilP1 += 1;
              }
            }
          }
        }

        //Vertikal
        // if (this.board[i][j] == "0" && j == this.kolP0) {
        //   this.hasilP0 += 1;
        //   this.kolP0 = j;
        // }
        // if (this.board[i][j] == "1" && j == this.kolP1) {
        //   this.hasilP1 += 1;
        //   this.kolP1 = j;
        // }
      }
      console.log("\n");
    }
    console.log("hasil P0 : " + this.hasilP0);
    console.log("hasil P1 : " + this.hasilP1);
    if (this.hasilP0 == 4) {
      console.log("Player 0 WIN !!");
      this.win = 1;
    }
    if (this.hasilP1 == 4) {
      console.log("Player 1 WIN !!");
      this.win = 2;
    }
  }
}
