class Category {
    constructor(name) {
        this.name = name
        // an array of questions
        this.questions = []
    }
}

class Question {
    contructor(q, a, val) {
        this.q = q
        this.a = a
        this.val = val
    }
}



for (var datum in data) {
    console.log(datum)
    let p = document.createElement('p')
    p.innerHTML = datum
    p.className = 'category'
    var extract = data[datum]
    for (var dat in data[datum]) {
        console.log(extract[dat]);
    }
    document.getElementById('cats').append(p)
}