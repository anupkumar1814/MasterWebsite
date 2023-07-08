let border1 = document.getElementById("black");
      function changeBG(color) {
        document.body.style.backgroundColor = color;

        let txt = document.getElementsByClassName("text");

        if (color == "#000000") {
          border1.style.border = "1px solid white";

          for (let elm of txt) {
            elm.style.color = "white";
            elm.style.color = "white";
          }
        } else {
          for (let elm of txt) {
            elm.style.color = "black";
            border1.style.border = "1px solid black";
          }
        }
      }