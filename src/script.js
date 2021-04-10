var manchester = {
  nome: "Manchester",
  vitorias: 3,
  empates: 2,
  derrotas: 1,
  pontos: 0
}

var chelsea = {
  nome: "Chelsea",
  vitorias: 4,
  empates: 2,
  derrotas: 2,
  pontos: 0
}

var liverpool = {
  nome: "Liverpool",
  vitorias: 0,
  empates: 3,
  derrotas: 1,
  pontos: 0
}

var sheffield = {
  nome: "Sheffield",
  vitorias: 4,
  empates: 2,
  derrotas: 2,
  pontos: 0
}

function calculaPontos(time) {
  var pontos = (time.vitorias * 3) + time.empates
  return pontos
}

manchester.pontos = calculaPontos(manchester)
chelsea.pontos = calculaPontos(chelsea)
liverpool.pontos = calculaPontos(liverpool)
sheffield.pontos = calculaPontos(sheffield)

var times = [manchester, chelsea, liverpool, sheffield]

function exibirTimesNaTela(times){
  var html = ""
  for(var i = 0; i < times.length; i++){
    html += "<tr><td>" + times[i].nome + "</td>"
    html += "<td>" + times[i].vitorias + "</td>"
    html += "<td>" + times[i].empates + "</td>"
    html += "<td>" + times[i].derrotas + "</td>"
    html += "<td>" + times[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaTimes = document.getElementById("tabelaTimes")
  tabelaTimes.innerHTML = html
}

exibirTimesNaTela(times)

function adicionarVitoria(i){
  var time = times[i]
  time.vitorias++ 
  time.pontos = calculaPontos (time)
  exibirTimesNaTela(times)
}

function adicionarEmpate(i){
  var time = times[i]
  time.empates++ 
  time.pontos = calculaPontos (time)
  exibirTimesNaTela(times)
}

function adicionarDerrota(i){
  var time = times[i]
  time.derrotas++ 
  exibirTimesNaTela(times)
}