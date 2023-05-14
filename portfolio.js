var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu= document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }


  const scriptURL = "https://script.google.com/macros/s/AKfycbxbnCAq2Ox2DJaOe0b7MOPo18C-NLy-MqKLyXDwypRVKdfjGwzHovWKSPrdlKWs_OeJ/exec"
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Received!!"
        setTimeout(function(){
            msg.innerHTML=""
        },1000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })


var music= document.getElementById("song");
var icon= document.getElementById("icon");

icon.onclick=function(){
    if(song.paused){
        song.play();
        icon.src="pause_icon.jpg";
    }
    else{
        song.pause();
        icon.src="play_icon - Copy.jpg";
    }

}