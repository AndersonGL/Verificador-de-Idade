function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verefique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    //res.innerHTML = `Idade Calculada: ${idade} anos.`  teste
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', './img/bebe menino.png')
      } else if (idade < 31) {
        //Jovem
         img.setAttribute('src', './img/jovem homem.png')
      } else if (idade < 60) {
        // Adulto 
         img.setAttribute('src', './img/homem adulto.png')
      } else {
        // Idoso
         img.setAttribute('src', './img/idoso homem.png')
      }

    } else if (fsex[1].checked) {
      gênero = "Mulher"
      if (idade >= 0 && idade < 10) {
        //Criança
         img.setAttribute('src', './img/bebe menina.png')
      } else if (idade < 31) {
        //Jovem
         img.setAttribute('src', './img/jovem mulher.png')
      } else if (idade < 60) {
        // Adulta  
         img.setAttribute('src', './img/mulher adulta.png')
      } else {
        // Idosa
         img.setAttribute('src', './img/idoso mulher.png')
      }

    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade}  anos.`
    res.appendChild(img)

  }

}
