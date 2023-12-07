/* start with an empty array*/
students = ["Pebbles", "bam-bam", "chris", "pugsley", "wednesday"]

function printArray(myHeading) {
    document.write("<h1>", myHeading, "</h1>");
    document.write("<h1>Student List")

    students.sort();

    let numberOfStudents = students.length;

    for (let index = 0; index < numberOfStudents; index = index + 1) {

        document.write("<p>", index, ":", students[index], "</p>");
    }
}

printArray();
students.push("Pebbles")
printArray();