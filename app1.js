import path from 'path'

const obj={dir:"d:/myfiles/mynodeapp",base:"myfile.txt"}

const pathtext=path.format(obj)
console.log(pathtext)