let usuarios=[
    {nombre:"juan",edad:"3",esPaisa:true},
    {nombre:"jose",edad:"15",esPaisa:false},
    {nombre:"pedro",edad:"20",esPaisa:true},
    {nombre:"andres",edad:"25",esPaisa:false},
    {nombre:"carlos",edad:"31",esPaisa:false},
    {nombre:"eduardo",edad:"32",esPaisa:true},
    {nombre:"sergios",edad:"33",esPaisa:true},
    {nombre:"genny",edad:"65",esPaisa:true},
    {nombre:"gloria",edad:"40",esPaisa:true},
    {nombre:"restrepo",edad:"14",esPaisa:true},
]
//filtrar el arreglo para obtener los usuarios mayores de edad

let filtrado=usuarios.filter(function(usuario){
    return(usuario.edad>=18)

})
console.log(usuarios.filter(function(usuario){
    return(usuario.edad>=18)
  
}))

console.log(usuarios.filter( function(usuario) {
     return (usuario.esPaisa!=true)}))

console.log(usuarios.filter(function(usuario){
    return(usuario.esPaisa==true && usuario.edad>= 18)}))


console.log(usuarios.map(function(usuario){
    return(usuario.edad=100)
}))

console.log(usuarios.map(function(usuario){
    return(usuario.nombre+" cesde")
}))
