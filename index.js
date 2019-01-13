var fs = require("fs"); // zaimportowanie modułu "fs"
var folder = "../17.7_File_System/"; // zapisanie ścieżki do folderu w zmiennej "folder"

fs.readdir(folder, function(err, files) { // przeczytanie zawartości katalogu i zapisanie zawartości jako tablica w "files"
  if (err) { // jeśli jest błąd, wypisz w konsoli
    console.log(err);
  }; 
    files.forEach(function(name) { // przejście po wszystkich elementach tablicy i wyświetlenie ich nazw w kosnoli
      console.log(name);
    });
  fs.writeFile("dirContent.txt", function(err) {
    if (err) throw err;
    console.log("Successfully saved !");
  })
});
