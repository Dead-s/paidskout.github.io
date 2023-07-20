document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    document.getElementsByClassName("span-slide")[0].style.opacity = 0;
    document.getElementsByClassName("btn-div")[0].style.opacity = 0;
    document.getElementsByClassName("container-gchild")[1].style.opacity = 0;

    setTimeout(() => {
      document.getElementsByClassName("span-slide")[0].style.opacity = 1;
      document.getElementsByClassName("btn-div")[0].style.opacity = 1;
    }, 2000);
    setTimeout(() => {
      document.getElementsByClassName("container-gchild")[1].style.opacity = 1;
    }, 5200);
    setTimeout(() => {
      var nav_icon = document.getElementById("nav-icon");
      var close = document.getElementById("nav-close");
      var nav_child = document.getElementsByClassName("nav_active_span");
      var nav_child2 = document.getElementsByClassName("nav-span");
      var navbar = document.getElementsByClassName("nav_active")[0];

      document.getElementById("to-top").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      for (let i = 0; i < nav_child2.length; i++) {
        nav_child2[i].addEventListener("click", () => {
          switch (i) {
            case 0:
              document.getElementById("brands").scrollIntoView({
                behavior: "smooth",
              });
              break;

            case 2:
              document.getElementById("about_us").scrollIntoView({
                behavior: "smooth",
              });
              break;

            case 3:
              document.getElementById("blogs").scrollIntoView({
                behavior: "smooth",
              });
              break;

            case 4:
              document.getElementById("contacts").scrollIntoView({
                behavior: "smooth",
              });
              break;

            default:
              break;
          }
        });
      }
      nav_icon.addEventListener("click", () => {
        for (let i = 0; i < nav_child.length; i++) {
          nav_child[i].classList.remove("hide");
        }
        navbar.style.visibility = "visible";
        navbar.style.height = "50vh";
      });
      close.addEventListener("click", () => {
        navbar.style.height = "0vh";
        close_nav();
      });

      for (let i = 0; i < nav_child.length; i++) {
        nav_child[i].addEventListener("click", () => {
          navbar.style.height = "0vh";
          close_nav();
          setTimeout(() => {
            switch (i) {
              case 0:
                document.getElementById("brands").scrollIntoView({
                  behavior: "smooth",
                });
                break;

              case 2:
                document.getElementById("about_us").scrollIntoView({
                  behavior: "smooth",
                });
                break;

              case 3:
                document.getElementById("blogs").scrollIntoView({
                  behavior: "smooth",
                });
                break;

              case 4:
                document.getElementById("contacts").scrollIntoView({
                  behavior: "smooth",
                });
                break;

              default:
                break;
            }
          }, 500);
        });
      }

      window.onscroll = function () {
        if (window.scrollY > 0) {
          document.getElementById("to-top").style.display = "block";
        } else {
          document.getElementById("to-top").style.display = "none";
        }
      };
      function close_nav() {
        navbar.style.height = "0vh";
        for (let i = 0; i < nav_child.length; i++) {
          nav_child[i].classList.add("hide");
        }
        setTimeout(() => {
          navbar.classList.add("hide");
          navbar.style.visibility = "hidden";
        }, 2500);
      }
    }, 500);
  }
};
