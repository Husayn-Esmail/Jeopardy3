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
        var object = document.createElement('p')
        object.className = "question_button"
        object.innerHTML = '$' + this.__val // fix this in later iterations because this is bad. 
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
        // add an event listener that will show the question when it is clicked
        x.addEventListener('click', function(){
            const splash = document.createElement('div')
            splash.id = 'splash'

            // display the question
            const splash_p = document.createElement('p')
            splash_p.innerHTML= q_element.getQ
            splash_p.id = 'splash_p'
            splash.append(splash_p)

            // create a next button that'll go to the next question and add points
            // to the respective team
            const splash_next = document.createElement('p')
            splash_next.innerHTML = 'next'
            splash_next.id = 'splash_next'
            splash_next.style.display = 'none'
            splash_next.addEventListener('click', () => {
                // mark the question as used
                q_element.flip_used()
                console.log(q_element.getUsed)
                remove_splash()
                // add points to the team
            });
            splash.append(splash_next)
            
            // display answer button
            const splash_answer = document.createElement('p')
            splash_answer.innerHTML = 'answer'
            splash_answer.id = 'splash_answer'
            splash_answer.addEventListener('click', () => {
                splash_p.innerHTML = q_element.getA
                splash_answer.style.display = 'none'
                splash_next.style.display = 'block'
            });
            splash.append(splash_answer)

            // display a back button
            const splash_back = document.createElement('p')
            splash_back.innerHTML = 'back'
            splash_back.id = 'splash_back'
            splash.append(splash_back)
            splash_back.addEventListener('click', remove_splash)

            // add splash to the body
            document.getElementsByTagName('body')[0].append(splash)
            
        });
        
        col_div.append(x)
    }
    document.getElementById('cats').append(p)
    document.getElementById('questions').append(col_div)
}


function remove_splash()  {
    var splash = document.getElementById('splash')
    document.body.removeChild(splash)

}


const questions = document.getElementsByClassName('question_button')
console.log(questions)
