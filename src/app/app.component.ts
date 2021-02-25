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
  flag: boolean;
  hasil = 0;
  choice: HTMLLabelElement;
  win = 0;
  huruf: String;

  play(r, c) {
    r = r - 1;
    c = c - 1;
    if (r < 0 || r > 6) {
      alert("Baris Melebihi Papan Board");
    } else if (c < 0 || c > 6) {
      alert("Kolom Melebihi Papan Board");
    } else {
      // console.log(r + " " + c);
      // console.log(this.board[r][c]);
      if (this.board[r][c] == "*") {
        if (this.pemain == true) {
          this.board[r][c] = "0";
        } else {
          this.board[r][c] = "1";
        }
      } else {
        console.log("pilih yang lain");
        alert("pilih yang lain");
        this.choice = document.getElementById("chc") as HTMLLabelElement;
        this.pemain = !this.pemain;
      }
    }

    //Horizontal
    this.hasil = 0;
    if (this.pemain == true) {
      this.huruf = "0";
    } else {
      this.huruf = "1";
    }
    this.flag = true;
    for (let i = 0; i < 5; i++) {
      if (this.board[r][i] == this.huruf && this.flag == true) {
        this.hasil += 1;
      } else {
        if (this.hasil > 0) {
          this.flag = false;
        }
      }
    }
    console.log("Hasil : " + this.hasil);

    if (this.hasil >= 4) {
      if (this.pemain == true) {
        console.log("Player 0 WIN !!");
        this.win = 1;
      } else {
        console.log("Player 1 WIN !!");
        this.win = 2;
      }
    } else {
      //Vertikal
      this.hasil = 0;
      this.flag = true;
      for (let i = 0; i < 5; i++) {
        if (this.board[i][c] == this.huruf && this.flag == true) {
          this.hasil += 1;
        } else {
          if (this.hasil > 0) {
            this.flag = false;
          }
        }
      }

      if (this.hasil >= 4) {
        if (this.pemain == true) {
          console.log("Player 0 WIN !!");
          this.win = 1;
        } else {
          console.log("Player 1 WIN !!");
          this.win = 2;
        }
      }
    }

    this.pemain = !this.pemain;
  }
}
