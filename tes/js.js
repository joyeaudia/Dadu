function mainGame() {
    const playerChoice = prompt('Pilih: batu, gunting, atau kertas').toLowerCase();

    if (playerChoice !== 'batu' && playerChoice !== 'gunting' && playerChoice !== 'kertas') {
        alert('Pilihan tidak valid. Silakan coba lagi.');
        mainGame(); 
        return;
    }

    const choices = ['batu', 'gunting', 'kertas'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

let result;
if (playerChoice === computerChoice) {
    result = `Seri! Kamu dan komputer sama-sama memilih ${playerChoice}.`;
} else if (
    (playerChoice === 'batu' && computerChoice === 'gunting') ||
    (playerChoice === 'gunting' && computerChoice === 'kertas') ||
    (playerChoice === 'kertas' && computerChoice === 'batu')
) {
    result = `Kamu menang! :
     Kamu memilih ${playerChoice} dan komputer memilih ${computerChoice}.`;
} else {
    result = `Kamu kalah! :
    Kamu memilih ${playerChoice} dan komputer memilih ${computerChoice}.`;
}

    alert(result);

    const playAgain = confirm('Mau main lagi?');
    if (playAgain) {
        mainGame();
    }
}

mainGame();


/*let name = pro mpt("yeahh");
alert("Hallo " + nama);
 if age = 20; */


  /* 
  js main main dengan banyak function 
  => SSCOPE FC ADA YANG GELOBAL DAN LOKAL
  => 
  
  */