if (localStorage.getItem("darkMode") === null) {
  localStorage.setItem("darkMode", "false");
}

const check = document
  .getElementById("check")
  .addEventListener("click", function () { 
    if (localStorage.getItem("darkMode") === "true") {
      localStorage.setItem("darkMode", "false");
      document.body.classList.remove("dark-theme");
    } else {
      localStorage.setItem("darkMode", "true");
      document.body.classList += " dark-theme";
    }
  });

/*
function changeStatus(){                                           
  if (localStorage.getItem('darkMode')==="true"){                
      localStorage.setItem('darkMode', "false");                 
      document.body.classList.remove("dark-theme")
  } else{
      localStorage.setItem('darkMode', "true");                  
      document.body.classList += " dark-theme"
  }
}

if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "false");
}


function checkStatus(){
  if (localStorage.getItem('darkMode')==="true"){
    document.body.classList += " dark-theme"          
  }else{
    document.body.classList.remove("dark-theme")
  }
}*/
