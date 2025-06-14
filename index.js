document.onreadystatechange = function() {

  if (document.readyState !== "complete") {

    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";
    document.querySelector(".loader-cont").style.visibility = "visible";
    ////
    
    document.querySelector("main").style.visibility = "hidden";
    document.querySelector("header").style.visibility = "hidden";
   ////
   
   
    
    //delete the loader from html code
    document.querySelector(".loader").addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader-cont").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
    
    ////
    document.querySelector("header").style.visibility = "visible";
    document.querySelector("main").style.visibility = "visible";
    ///
  }
};