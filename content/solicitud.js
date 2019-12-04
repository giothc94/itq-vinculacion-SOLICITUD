const PDF = require("pdfkit");
const fs = require("fs");
const path = require("path");

class SolicitudProcesoPPP {
  constructor(
    nombreStudent,
    ciStudent,
    levelStudent,
    careerStudent,
    telfStudent,
    emailStudent,
    titleCordinator,
    nameCordinator
  ) {
    this.nameStudent = `${nombreStudent} `;
    this.ciStudent = `${ciStudent} `;
    this.levelStudent = `${levelStudent} `;
    this.careerStudent = `${careerStudent}`;
    this.telfStudent = telfStudent;
    this.emailStudent = emailStudent;
    this.titleCordinator = titleCordinator;
    this.titleDoc = "SOLICITUD";
    this.nameCordinator = nameCordinator;
    this.positionCordinator =
      "COORDINADOR DE LA UNIDAD DE VINCULACIÓN CON LA COMUNIDAD";
    this.present = "Presente:";
    this.consideration = "De mi consideración;";
    this.contentBody_0 = "Yo ";
    this.contentBody_1 = "con C.C No ";
    this.contentBody_2 = "estudiante del ";
    this.contentBody_3 = "nivel, carrera de ";
    this.footer_0 = `Av. 10 de agosto N25-39 y Av. Colón – Ed. Estrella de Oro – Tel. 5126340 – 0996327356`;
    this.footer_1 = `www.itq.edu.ec – info@itq.edu.ec`;
  }
  contentBody_4 = () => {
    let text = `, solicito a usted comedidamente la autorización para realizar el proceso de Practicas/ Vinculación, durante el tiempo que estipula el reglamento vigente,  bajo la modalidad de un convenio suscrito.
  
  Así mismo solicito en caso de ser aceptada mi solicitud emitir los documentos relacionados al proceso de Prácticas o Vinculación.
  
  
  
  
  Atentamente,
  
  
  
  f:__________________________________

  ${this.nameStudent}
  C.I: ${this.ciStudent}
  Telf: ${this.telfStudent}
  Email: ${this.emailStudent}`;
    return text;
  };
  generatePDF = nameDocument => {
    const doc = new PDF({ autoFirstPage: false });

    doc.pipe(fs.createWriteStream(path.join(__dirname, `${nameDocument}.pdf`)));
    doc
      .addPage({
        size: [595.28, 841.89],
        margins: { top: 94, right: 94, left: 94, bottom: 80 }
      })
      .image("log_itq.png", 203, 20, { width: 188, align: "center" })
      .moveDown(6)
      .text("Quito D.M,_____________________", {
        align: "right"
      })
      .moveDown(2)
      .fontSize(16)
      .font("Helvetica-Bold")
      .text(this.titleDoc, { align: "center" })
      .moveDown(2)
      .fontSize(11)
      .text(this.titleCordinator, { align: "left" })
      .font("Helvetica")
      .text(this.nameCordinator, { align: "left" })
      .font("Helvetica-Bold")
      .text(this.positionCordinator, {
        align: "left"
      })
      .moveDown(1)
      .font("Helvetica")
      .text(this.present)
      .moveDown(1)
      .text(this.consideration)
      .moveDown(1)
      .text(this.contentBody_0, { continued: true })
      .font("Helvetica-Bold")
      .text(this.nameStudent, { continued: true })
      .font("Helvetica")
      .text(this.contentBody_1, { continued: true })
      .font("Helvetica-Bold")
      .text(this.ciStudent, { continued: true })
      .font("Helvetica")
      .text(this.contentBody_2, { continued: true })
      .font("Helvetica-Bold")
      .text(this.levelStudent, { continued: true })
      .font("Helvetica")
      .text(this.contentBody_3, { continued: true })
      .font("Helvetica-Bold")
      .text(this.careerStudent, { continued: true })
      .font("Helvetica")
      .text(this.contentBody_4(), { lineBreak: true, align: "justify" })
      .moveDown(4)
      .fillColor("#5383ad")
      .text(this.footer_0, { align: "center" })
      .moveDown()
      .text(this.footer_1, { align: "center" })
      .end();
  };
}

module.exports = SolicitudProcesoPPP;
