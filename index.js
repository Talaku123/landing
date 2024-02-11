// document.getElementById("js-circle-within").style.transform = "rotate(180deg)"


function showSidebar(){
    
     const sidebar = document.getElementById("js-sidebar")

     sidebar.style.display = "flex"
}

function hiddenSidebar(){
  const hidden = document.getElementById("js-sidebar")

  hidden.style.display = "none"
}


function addSubscribe(){

    const button = document.getElementById('js-btn')

    if(button.innerText === 'Subscribe'){

      button.innerHTML = '<h4>Subscribed</4>'

      button.classList.add('is-subscribed')

    }else{

      button.innerHTML = '<h4>Subscribe</>'

      button.classList.remove('is-subscribed')
      
    }
  
}
