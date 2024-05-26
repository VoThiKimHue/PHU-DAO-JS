function bai20(str){
    const students = [
        { name: "Alice", score: 80 },
        { name: "Bob", score: 55 },
        { name: "Charlie", score: 90 },
        { name: "Dave", score: 70 }
      ];


    let student = students.filter(function(student){
        return student.score >= 70;
    });

console.log(student);
}




