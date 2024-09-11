
////////MODIFICAR ESTE ARCHIVO
/////////////////////////////////
let pinceladas = [];
let cantidad = 13;
let cantidad_manchitas=10;
let miPaleta;
let silueta;
let tamanio;
let tamanioForma;
let opacidad;

function preload(){
  //poner el nombre de la imagen que quiero usar como paleta
  miPaleta = new Paleta( "data/paleta.png" );
//poner el nombre de la imagen que quiero usar como silueta
//recomendable una imagen bitonal
  silueta = loadImage( "data/mancha_1280_720.jpg" );
  for( let i=0 ; i<cantidad ; i++){
    let nombre = "data/trazo"+nf( i , 2 )+".png";
    //console.log( nombre );
    pinceladas[i] = loadImage( nombre );
  }
}
function setup() {
  //dimensiones del sketch / aplicacion
  //si quiero que complete toda la pantalla:
  //createCanvas( windowWidth, windowHeight );
  createCanvas(1280, 720 );
  background(255);
  imageMode( CENTER );
  

}
function draw() {
  //modifica el la opacidad del motivo a dibujar segun la posicion Y del mouse
  opacidad = int( map( mouseY , 0 , height , 0 , 255) );
  //modifica el tamanio del motivo a dibujar segun la posicion X del mouse
   tamanio = float( map( mouseX , 0 , width , 0 , 3) );
   tamanioForma = int( map( mouseX , 0 , width , 5 , 60) );

///IMPORTANTE////////////
//aca elegimos cuantas "manchitas" por vez dibuja
  cantidad_manchitas=4 ;
  print(tamanio);
////////////////////// 

  for( let i=0 ; i<cantidad_manchitas; i++){

  let x = random( width );
  let y = random( height );

  let xSilueta = int( map( x , 0 , width , 0 , silueta.width ) );
  let ySilueta = int( map( y , 0 , height , 0 , silueta.height ) );

  let colorDeEstePixel = silueta.get( xSilueta , ySilueta );
//aca controlamos el rango o nivel de contraste
//cambiar el valor despues del <
//puede no tocarse

  if( green( colorDeEstePixel ) < 150 ){ //para la mancha 150 //si quiero toda la pantalla poner 300 
    let cual = int( random(cantidad));
    
  
    let esteColor =  miPaleta.darColor();
    let angulo = radians( map( x , 0 , width , -30 , 120 ) + random(-5,5) );
    let angulo2 = radians( map( y , 0 , height , 0 , 180 ) + random(-5,5) );
  
    tint( red(esteColor) , green(esteColor) , blue(esteColor) , opacidad );
  
    push();
    translate( x, y );
    
    //AQUI DE DEFINEN LOS PARAMETROS DE DIBUJO
    //LA ROTACION SE PUEDE COMENTAR O DEJAR
    //rotate( angulo+angulo2 );
    
    //scale( tamanio/10);
    //elige cual de los trazos usa para pintar
    //comentar o descomentar sino quiero usar o no los trazos png
    //image( pinceladas[cual] , 0 , 0 ,pinceladas[cual].width*tamanio,pinceladas[cual].height*tamanio);
   
    /// OPCIONES PARA PINTAR SI DESCOMENTAMOS LOS TRAZOS
    //aca se define el relleno de acuerdo a la paleta y una opacidad de 150
    fill( red(esteColor) , green(esteColor) , blue(esteColor) , opacidad );
    //aca se define el contorno de acuerdo a la paleta y una opacidad de 150
    //stroke( red(esteColor) , green(esteColor) , blue(esteColor) , 150 );
    //definimos si va a tener o no relleno o contorno
    //noFill();
    noStroke();
    ////////QUE FORMA VA A DIBUJAR 
    ellipse(0,0,tamanioForma,tamanioForma);  //dibuja circulos //los ultimos 2 valores son el tamaño
    //rect(0,0,tamanioForma,tamanioForma);  //dibuja cuadrados // los ultimos 2 valores son el tamaño
    pop();
  
  
  }
}

}
