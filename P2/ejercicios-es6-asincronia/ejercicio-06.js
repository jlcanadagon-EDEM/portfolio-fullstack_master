/*
Ejercicio ES6 6

Utilizar reduce() para calcular:

6.1 La suma de todas las notas.
6.2 La suma de las notas aprobadas.
6.3 La media de todas las notas.
*/

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

// 6.1 Suma de todas las notas
const totalScore = exams.reduce((total, exam) => {
  return total + exam.score;
}, 0);

console.log(`Suma de todas las notas: ${totalScore}`);

// 6.2 Suma de las notas aprobadas
const approvedScoreTotal = exams.reduce((total, exam) => {
  if (exam.score >= 5) {
    return total + exam.score;
  }

  return total;
}, 0);

console.log(`Suma de las notas aprobadas: ${approvedScoreTotal}`);

// 6.3 Media de todas las notas
const averageScore =
  exams.reduce((total, exam) => {
    return total + exam.score;
  }, 0) / exams.length;

console.log(`Media de todas las notas: ${averageScore}`);