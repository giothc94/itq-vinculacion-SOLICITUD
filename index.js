const Solicitud = require("./content/solicitud");

const soli = new Solicitud(
  "Gabriel Geovanny Arguello Costta",
  "1716715972",
  "6to",
  "Analisis de Sistemas",
  "0987653578",
  "gio666nb@gmail.com",
  "Ing.",
  "Cesar Vasques"
);

soli.generatePDF(`solicitud_${soli.nameStudent.replace(/ /g,'_')}`)
