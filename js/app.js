
const personas = [
    new Persona('Jose Antonio', 'Gimenez Cayuela'),
    new Persona('Antonio Jose', 'Gimenez'),
    new Persona('Alba', 'Gimenez')
];

function mostrarPersonas() {
  let texto = '';
  for(let persona of personas){
      //console.log(persona); // se comenta porque no necesitaremos hacer mas debug.

   texto += `<li>${persona.nombre} ${persona.apellido}</li>`; //concadenamos resultados necesarios a mostrar o guardar
  }
  document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    const forma = document.forms['forma'];
    const nombre = forma['nombre']
    const apellido = forma['apellido']
    const persona =  new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
}