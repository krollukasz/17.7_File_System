var fs = require("fs"); // zaimportowanie modułu "fs"
var folder = "../17.7_File_System/"; // zapisanie ścieżki do folderu w zmiennej "folder"

fs.readdir(folder, function(err, files) { // przeczytanie zawartości katalogu i zapisanie zawartości jako tablica w "files"
  if (err) { // jeśli jest błąd, wypisz w konsoli
    console.log(err);
  }; 
  files.forEach(function(name) { // przejście po wszystkich elementach tablicy i wyświetlenie ich nazw w kosnoli
    console.log(name);
  });
  var files = files;
  var convertedFiles = files.toString(); // konwersja tablicy przy użyciu metody .toString
  var newLine = convertedFiles.replace(/,/g, ", \r\n"); // zastąpienie wartości "," z użyciem modyfikatora globalnego na ", "
  fs.writeFile("dirContent.txt", newLine, save); // zapis pobranych nazw w pliku
});

function save(err) { // funkcja wyświetlająca komunikat o poprawnym zapisaniu do pliku
  if (err) throw err; // jeśli wystąpi błąd, wypisz go w konsoli
  console.log("Successfully saved !"); // komunikat o powodzeniu zapisu
}

function newLine(err, name) {
  console.log(name);
}