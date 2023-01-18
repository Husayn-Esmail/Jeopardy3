class Category {
    constructor(name) {
        this.name = name
        // an array of questions
        this.questions = []
    }
}

class Question {
    constructor(q, a, val) {
        this.__q = q;
        this.__a = a;
        this.__val = val;
        this.__used = false;
    }

    get getQ() {
        return this.__q;
    }

    set setQ(value) {
        return this.__q = value;
    }
    

    get getA() {
        return this.__a
    }

    set setA(value) {
        this.__a = value
        return this.__a
    }

    get getVal() {
        return this.val
    }

    set setVal(value) {
        this.__val = value
        return this.__val
    }

    get getUsed() {
        return this.__used
    }

    flip_used() {
        this.__used = !this.__used
        return this.__used
    }

    
    
    reveal_question() {
        const p = document.createElement('p')
        p.className = 'question'
        p.innerHTML = this.__q
        return p
    }
    
    reveal_answer() {
        const p = document.createElement('p')
        p.className = 'answer'
        p.innerHTML = this.__a
        console.log(this.__a)
        return p
    }

    create_question_element() {
        var object = document.createElement('a')
        object.className = "question_button"
        object.innerHTML = '$' + this.__val // fix this in later iterations because this is bad. 
        object.addEventListener('mouseup', this.reveal_question)
        return object
    }

}


for (var datum in data) {
    console.log(datum)
    let p = document.createElement('p')
    p.innerHTML = datum
    p.className = 'category'
    var extract = data[datum]
    let col_div = document.createElement('div')
    col_div.className = "col"
    for (var dat in data[datum]) {
        var values = extract[dat]
        // unwrap values
        const calc = (parseInt(dat) + 1) * 100
        const q_element = new Question(values[0], values[1], calc)
        var x = q_element.create_question_element()
        col_div.append(x)
    }
    document.getElementById('cats').append(p)
    document.getElementById('questions').append(col_div)
}