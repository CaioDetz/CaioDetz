"use client";
const Page = () => {
    var html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nota</title>
  <style>
    html, body{
  box-sizing: border-box;
  padding: 20px;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.titulo{
  font-size: 25pt;
  width: 100%;
  text-align: start;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

.infos-container {
  display: flex;
  width: 100%;
  padding: 5px;
}
.infos-container > div > p {
  font-weight: bold;
}
.infos-1{
  display: flex;
  flex-direction: column;
  flex: 1;
}
.infos-2{
  display: flex;
  flex-direction: column;
  flex: 1;
}
.infos-2-lg{
  font-weight: bold;
  font-size: 25px;
  margin: 5px 0;
}

.ass {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
}
.ass > div {
  width: 250px;
  text-align: center;
}
  </style>
</head>
<body>
  <h2 class="titulo"></h2>
  <p>Endereço:</p>
  <p>Cidade:</p>
  <p>Telefones:</p>
  <hr>
  <h3>Informações do ticket:</h3>
  <div class="infos-container">
  <div class="infos-1">
  <p>Transportadora:</p>
  <p>Motorista:</p>
  <p>Placa:</p>
  <p>Emissor:</p>
  </div>
  <div class="infos-2">
  <p>Produto:</p>
  <p>Umidade:</p>
  <div>
  <p class="infos-2-lg">Entrada: </p>
  <p class="infos-2-lg">Saida:</p>
  </div>
  </div>
  </div>

  <div class="ass">
    <div>
      <hr>
      <span>OEPRADOR</span>
    </div>
    
    <div>
      <hr>
      <span>MOTORISTA</span>
    </div>
  </div>

</body>
</html>
`




    const print = (e: any) => {
        e.preventDefault()
        var win: any = window.open("", "", "width=800,height=650")
        win.document.write(html)
        win.print()
    }

    return (
        <main className="h-screen w-full flex items-center justify-center">
            <button onClick={(e) => { print(e) }} className="flex px-5 py-3 bg-zinc-800 text-white drop-shadow-lg rounded-md">IMPRIMIR</button>
        </main>
    )
}
export default Page;