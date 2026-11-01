const express = require('express');
const app=express();
const PORT=80;

//Rota principal
app.get('/', (req,res) => {
    res.send(`
<!DOCTYPE html>
<html>
    <head>
        <script src="manipulaNome.js" type="text/javascript" async></script>
        <title>Catálogo de Heróis</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Catálogo de Heróis</h1>
        <div>
            <p>Bem-vindo ao seu catalogo definito de heróis.</p>
            <a href="/marvel">Marvel</a>
            <br>
            <a href="/dc">DC</a>
            <hr>
            <a href="/personagem/DC/Flash">Flash</a>
            <br>
            <a href="/personagem/DC/Batman">Batman</a>
            <br>
            <a href="/personagem/Marvel/Thor">Thor</a>
            <br>
            <a href="/personagem/Marvel/Hulk">Hulk</a>
        </div>
    </body>
</html>
`);
});

app.get('/marvel', (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <script src="manipulaNome.js" type="text/javascript" async></script>
        <title>Catálogo de Heróis</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Marvel</h1>
        <div>
            <p>Bem-vindo ao seu catalogo definito de heróis da Marvel.</p>
            <a href="/personagem/Marvel/Thor">Thor</a>
            <br>
            <a href="/personagem/Marvel/Hulk">Hulk</a>
            <br>
            <a href="/">Voltar</a>
        </div>
    </body>
</html>`);
});

app.get('/dc', (req, res)=>{
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <script src="manipulaNome.js" type="text/javascript" async></script>
        <title>Catálogo de Heróis</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Catálogo de Heróis a DC</h1>
        <div>
            <p>Bem-vindo ao seu catalogo definito de heróis da DC.</p>
            <a href="/personagem/DC/Flash">Flash</a>
            <br>
            <a href="/personagem/DC/Batman">Batman</a>
            <br>
            <a href="/">Voltar</a>
        </div>
    </body>
</html>`);
})

app.get('/personagem/:empresa/:nome', (req, res) => {
    const { empresa, nome } = req.params;
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <script src="manipulaNome.js" type="text/javascript" async></script>
        <title>Catálogo de Heróis</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>${empresa} - ${nome}</h1>
        <div>
            <a href="/${empresa}">${empresa}</a>
            <br>
            <a href="/">Início</a>
            <hr>
        </div>
    </body>
</html>`);
});


//Inicia servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando  em http://localhost:${PORT}`);
});
//console.log("Servidor Node está  funcionando!");