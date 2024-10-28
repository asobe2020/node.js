const fs = require('fs')

const dirName = process.argv[2] || 'project'

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello World</h1>
    <script src="app.js"></script>
</body>
</html>`

const jsContent = `console.log('Hello World from app.js')`

const cssContent = `body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}`

try{
    fs.mkdirSync(dirName)
    fs.writeFileSync(`${dirName}/index.html`, htmlContent)
    fs.writeFileSync(`${dirName}/app.js`, jsContent)
    fs.writeFileSync(`${dirName}/style.css`, cssContent)
}catch(e){
    console.log('############エラーログ##############')
    console.error(e)
    console.log('############エラーログ##############')
}
