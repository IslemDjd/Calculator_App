var buttons = document.getElementsByClassName("button");
var arr = [...buttons];


arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
      document.getElementsByTagName("body")[0].style.color = "white";
      document.getElementById("three").style.backgroundColor = "hsl(6, 63%, 50%)";
      document.getElementById("result").style.backgroundColor = "hsl(224, 36%, 15%)";
      document.getElementById("result").style.color = "white";
      document.getElementById("numbers").style.backgroundColor = "hsl(223, 31%, 20%)";
      var x = document.querySelectorAll("button.keys");
      x.forEach((element) => {
        element.style.backgroundColor = "hsl(33, 8%, 73%)";
        element.style.color = "hsl(221, 14%, 31%)";

        element.addEventListener("mouseenter", function() {
          element.style.backgroundColor = "hsl(28, 16%, 65%)";
        });
        
        element.addEventListener("mouseleave", function() {
          element.style.backgroundColor = "hsl(33, 8%, 73%)";
        });
      });

      // Hover Of Del Button
      document.getElementById("spc_keys1").style.backgroundColor = "hsl(225, 21%, 49%)";
      document.getElementById("spc_keys1").addEventListener("mouseenter", function() {
        document.getElementById("spc_keys1").style.backgroundColor = "hsl(224, 28%, 35%)";
      });
      
      document.getElementById("spc_keys1").addEventListener("mouseleave", function() {
        document.getElementById("spc_keys1").style.backgroundColor = "hsl(225, 21%, 49%)";
      });


      // Hover Of Reset Button
      document.getElementById("spc_keys2").style.backgroundColor = "hsl(225, 21%, 49%)";
      document.getElementById("spc_keys2").addEventListener("mouseenter", function() {
        document.getElementById("spc_keys2").style.backgroundColor = "hsl(224, 28%, 35%)";
      });
      
      document.getElementById("spc_keys2").addEventListener("mouseleave", function() {
        document.getElementById("spc_keys2").style.backgroundColor = "hsl(225, 21%, 49%)";
      });

      // Hover Of Equal Button
      document.getElementById("equal_key").style.backgroundColor = "hsl(6, 63%, 50%)";
      document.getElementById("equal_key").addEventListener("mouseenter", function() {
        document.getElementById("equal_key").style.backgroundColor = "hsl(6, 70%, 34%)";
      });
      
      document.getElementById("equal_key").addEventListener("mouseleave", function() {
        document.getElementById("equal_key").style.backgroundColor = "hsl(6, 63%, 50%)";
      });


      document.getElementById("equal_key").style.color = "white";
      document.getElementById("islemDj").style.color = "hsl(6, 63%, 50%)";



    } else if (index == 1) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
        document.getElementsByTagName("body")[0].style.color = "hsl(60, 10%, 19%)";
        document.getElementById("three").style.backgroundColor = "hsl(25, 98%, 40%)";
        document.getElementById("result").style.backgroundColor = "hsl(0, 0%, 93%)";
        document.getElementById("result").style.color = "hsl(60, 10%, 19%)";

        document.getElementById("numbers").style.backgroundColor = "hsl(0, 5%, 81%)";
        var x = document.querySelectorAll("button.keys");
        x.forEach((element) => {
            element.style.backgroundColor = "hsl(45, 7%, 89%)";
            element.style.color = "hsl(60, 10%, 19%)";

            element.addEventListener("mouseenter", function() {
              element.style.backgroundColor = "hsl(35, 11%, 61%)";
            });
            
            element.addEventListener("mouseleave", function() {
              element.style.backgroundColor = "hsl(45, 7%, 89%)";
            });
        });
        // Hover Of Del Button
      document.getElementById("spc_keys1").style.backgroundColor = "hsl(185, 42%, 37%)";
      document.getElementById("spc_keys1").addEventListener("mouseenter", function() {
        document.getElementById("spc_keys1").style.backgroundColor = "hsl(185, 58%, 25%)";
      });
      
      document.getElementById("spc_keys1").addEventListener("mouseleave", function() {
        document.getElementById("spc_keys1").style.backgroundColor = "hsl(185, 42%, 37%)";
      });



        // Hover Of Reset Button
      document.getElementById("spc_keys2").style.backgroundColor = "hsl(185, 42%, 37%)";
      document.getElementById("spc_keys2").addEventListener("mouseenter", function() {
        document.getElementById("spc_keys2").style.backgroundColor = "hsl(185, 58%, 25%)";
      });
      
      document.getElementById("spc_keys2").addEventListener("mouseleave", function() {
        document.getElementById("spc_keys2").style.backgroundColor = "hsl(185, 42%, 37%)";
      });



        // Hover Of Equal Button
      document.getElementById("equal_key").style.backgroundColor = "hsl(25, 98%, 40%)";
      document.getElementById("equal_key").addEventListener("mouseenter", function() {
        document.getElementById("equal_key").style.backgroundColor = "hsl(25, 99%, 27%)";
      });
      
      document.getElementById("equal_key").addEventListener("mouseleave", function() {
        document.getElementById("equal_key").style.backgroundColor = "hsl(25, 98%, 40%)";
      });

        document.getElementById("equal_key").style.color = "white";
        document.getElementById("islemDj").style.color = "hsl(185, 42%, 37%)";




    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor ="hsl(268, 75%, 9%)";
      document.getElementsByTagName("body")[0].style.color = "hsl(52, 100%, 62%)";
      document.getElementById("three").style.backgroundColor = "hsl(176, 100%, 44%)";
      document.getElementById("result").style.backgroundColor = "hsl(268, 71%, 12%)";
      document.getElementById("result").style.color = "hsl(52, 100%, 62%)";

      document.getElementById("numbers").style.backgroundColor = "hsl(268, 71%, 12%)";
      var x = document.querySelectorAll("button.keys");
      x.forEach((element) => {
        element.style.backgroundColor = "hsl(268, 47%, 21%)";
        element.style.color = "hsl(52, 100%, 62%)";
        
      element.addEventListener("mouseenter", function() {
        element.style.backgroundColor = "hsl(290, 70%, 36%)";
      });
      
      element.addEventListener("mouseleave", function() {
        element.style.backgroundColor = "hsl(268, 47%, 21%)";
      });
      });

      
      // Hover Of Del Button
      document.getElementById("spc_keys1").style.backgroundColor = "hsl(281, 89%, 26%)";
      document.getElementById("spc_keys1").addEventListener("mouseenter", function() {
        document.getElementById("spc_keys1").style.backgroundColor = "hsl(285, 91%, 52%)";
      });
      
      document.getElementById("spc_keys1").addEventListener("mouseleave", function() {
        document.getElementById("spc_keys1").style.backgroundColor = "hsl(281, 89%, 26%)";
      });


      // Hover Of Reset Button
      document.getElementById("spc_keys2").style.backgroundColor = "hsl(281, 89%, 26%)";
      document.getElementById("spc_keys2").addEventListener("mouseenter", function() {
        document.getElementById("spc_keys2").style.backgroundColor = "hsl(285, 91%, 52%)";
      });
      
      document.getElementById("spc_keys2").addEventListener("mouseleave", function() {
        document.getElementById("spc_keys2").style.backgroundColor = "hsl(281, 89%, 26%)";
      });


      // Hover Of Equal Button
      document.getElementById("equal_key").style.backgroundColor = "hsl(176, 100%, 44%)";
      document.getElementById("equal_key").addEventListener("mouseenter", function() {
        document.getElementById("equal_key").style.backgroundColor = "hsl(177, 92%, 70%)";
      });
      
      document.getElementById("equal_key").addEventListener("mouseleave", function() {
        document.getElementById("equal_key").style.backgroundColor = "hsl(176, 100%, 44%)";
      });


      document.getElementById("equal_key").style.color = "hsl(198, 20%, 13%)";
      document.getElementById("islemDj").style.color = "hsl(176, 100%, 44%)";



    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
