window.addEventListener("load", ()=> {
    fetch("/allChirps")
    .then( res => res.json())
    .then(data => {
      console.log(data);
    })
  })