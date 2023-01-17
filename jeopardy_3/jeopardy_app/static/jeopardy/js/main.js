class Category {
    constructor(name) {
        this.name = name
        // an array of questions
        this.questions = []
    }
}

class Question {

}



for (var datum in data) {
    console.log(datum)
    var extract = data[datum]
    for (var dat in data[datum]) {
        console.log(extract[dat]);
    }
}