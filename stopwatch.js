var hr = 0;
      var min = 0;
      var sec = 0;
      var count = 0;

      var timer = false;

      function start() {
        timer = true;
        stopwatch();
      }
      function stop() {
        timer = false;
      }
      function reset() {
        timer = false;
        hr = 0;
        min = 0;
        sec = 0;
        count = 0;
        document.getElementById("hr").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("count").innerHTML = "00";
      }
      function stopwatch() {
        if (timer) {
          count = count + 1;
          if (count == 100) {
            count = 0;
            sec = sec + 1;

            if (sec == 60) {
              sec = 0;
              count = 0;
              min = min + 1;
              if (min == 60) {
                min = 0;
                sec = 0;
                count = 0;
                hr = hr + 1;
              }
            }
          }
          var hrStr = hr;
          var minStr = min;
          var secStr = sec;
          var countStr = count;
          if (hr < 10) {
            hrStr = "0" + hr;
          }
          if (min < 10) {
            minStr = "0" + min;
          }
          if (sec < 10) {
            secStr = "0" + sec;
          }
          if (count < 10) {
            countStr = "0" + count;
          }
          document.getElementById("hr").innerHTML = hrStr;
          document.getElementById("min").innerHTML = minStr;
          document.getElementById("sec").innerHTML = secStr;
          document.getElementById("count").innerHTML = countStr;
          setTimeout("stopwatch()", 10);
        }
      }