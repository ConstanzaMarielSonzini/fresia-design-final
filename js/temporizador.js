const countdownDate = new Date("nov 2, 2023 00:00:00").getTime();

const countdownInterval = setInterval(() =>{
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor ((distance %(1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor ((distance %(1000*60*60)) / (1000*60));
  const seconds = Math.floor ((distance %(1000*60)) / 1000);

  document.getElementById("countdown").innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`;

  if(distance <0){
    clearInterval(countdownInterval);

    document.getElementById("countdown").innerHTML = "¡La cuenta regresiva ha terminado";
  }
}, 1000);
