var images = ["LibroGato.png","1.png", "Logotipo con círculo trazado a mano.png" , "2.png", "5.png", "4.png", "3.png"];
var names = ["Libro Felino","Maia", "Tato", "Toti", "Maria", "Maga", "Gaia"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Depura el código para almacenar la lista de imágenes en updatedImage. Utiliza images[i]
    var updatedImage = images[i];
    //Depura el código para almacenar la lista de nombres en updatedName. Utiliza names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
