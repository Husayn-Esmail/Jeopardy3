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
        this.__element;
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
        return this.__val
    }

    set setVal(value) {
        this.__val = value
        return this.__val
    }

    get getUsed() {
        return this.__used
    }

    get getEle() {
        return this.__element
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
        this.__element = object
        return object
    }

}

let questions = [];
// possible values are 0 and 1, if 0, then team 1, if 1, then team 2
let point_state = 0;
let team_points = {'team1': 0, 'team2': 0}

// TODO eventually add questions to each category and what not (category object)

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
        x.addEventListener('click', function xlistener(){
            const splash = document.createElement('div')
            splash.id = 'splash'

            // display the question
            const splash_p = document.createElement('p')
            splash_p.innerHTML= q_element.getQ
            splash_p.id = 'splash_p'
            splash.append(splash_p)

            // create a next button that'll go to the next question and add points
            // to the respective team
            const splash_correct = document.createElement('p')
            splash_correct.innerHTML = 'correct'
            splash_correct.id = 'splash_correct'
            splash_correct.style.display = 'none'
            splash_correct.addEventListener('click', () => {
                // mark the question as used
                q_element.flip_used()
                console.log(q_element.getUsed)
                // clear the value
                x.innerHTML = ''
                x.classList.add('nohover')
                // ensure that the dimensions still stay the same
                x.style.height = "100%"
                remove_splash()
                x.removeEventListener('click', xlistener) 
                // add points to the team
                if (point_state === 1) {
                    team_points['team2'] += q_element.getVal
                } else {
                    team_points['team1'] += q_element.getVal
                }
                update_scores()
            });
            splash.append(splash_correct)
            
            // if it's incorrect
            const splash_incorrect = document.createElement('p')
            splash_incorrect.innerHTML = 'incorrect'
            splash_incorrect.id = 'splash_incorrect'
            splash_incorrect.style.display = 'none'
            splash_incorrect.addEventListener('click', () => {
                // mark the question as used
                q_element.flip_used()
                console.log(q_element.getUsed)
                // clear the value
                x.innerHTML = ''
                x.classList.add('nohover')
                // ensure that the dimensions still stay the same
                x.style.height = "100%"
                remove_splash()
                x.removeEventListener('click', xlistener) 
                // don't add points to team
                update_scores()  // TODO might need to take this out
            });
            splash.append(splash_incorrect)
            
            // if it's steal
            const splash_steal = document.createElement('p')
            splash_steal.innerHTML = 'steal'
            splash_steal.id = 'splash_steal'
            // splash_steal.style.display = 'none'
            splash_steal.addEventListener('click', () => {
                // mark the question as used
                q_element.flip_used()
                console.log(q_element.getUsed)
                // clear the value
                x.innerHTML = ''
                x.classList.add('nohover')
                // ensure that the dimensions still stay the same
                x.style.height = "100%"
                remove_splash()
                x.removeEventListener('click', xlistener) 
                // add points to opposite team
                if (point_state === 0) {
                    team_points['team2'] += q_element.getVal
                } else {
                    team_points['team1'] += q_element.getVal
                }
                update_scores()
            });
            splash.append(splash_steal)
            
            console.log(team_points)
            // display answer button
            const splash_answer = document.createElement('p')
            splash_answer.innerHTML = 'answer'
            splash_answer.id = 'splash_answer'
            splash_answer.addEventListener('click', () => {
                splash_p.innerHTML = q_element.getA
                splash_answer.style.display = 'none'
                splash_correct.style.display = 'block'
            });
            splash.append(splash_answer)

            // team selector
            const team1 = document.createElement('p')
            const team2 = document.createElement('p')
            team1.innerHTML = 'team1' // TODO change this so that it's not hardcoded
            team2.innerHTML = 'team2' // TODO change this so that it's not hardcoded
            team1.addEventListener('click', () => {
                team1.style.border = '5px solid white'
                point_state = 0
            })
            team2.addEventListener('click', () => {
                point_state = 1
            })
            // team2.style.border = '5px solid white'
            splash.append(team1)
            splash.append(team2)

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
        questions.push(q_element)
    }
    document.getElementById('cats').append(p)
    document.getElementById('questions').append(col_div)
}


function remove_splash()  {
    var splash = document.getElementById('splash')
    document.body.removeChild(splash)
}

// this doesn't work
for (var q in questions) {
    if (questions[q].getUsed) {
        let x = questions[q].getEle
        x.removeEventListener('click', xlistener)
        x.classList.add('nohover')
        console.log("i'm true")
    }
}



// things left to do:
// TODO create setup page
    // TODO make teams
    // TODO allow teams to be renamed
    // TODO add functionality to select which team gets points
// TODO add timer
// TODO add functionality to play music every time the timer starts.
// TODO complete the jeopardy questions
// TODO style the page to look much better
// TODO fix bug where only the last item disappears regardless of which point value is pressed. 

function create_scores() {
    let names_div = document.getElementById('team_names')
    let team_one_name = 'team one'
    let team_two_name = 'team two'
    let one_h2 = document.createElement('h2')
    let two_h2 = document.createElement('h2')

    one_h2.innerHTML = team_one_name + ":" + team_points["team1"]
    two_h2.innerHTML = team_two_name + ":" + team_points["team2"]
    one_h2.id = 'one'
    two_h2.id = 'two'
    names_div.append(one_h2)
    names_div.append(two_h2)
}
function update_scores() {
    let team_one_name = 'team one'
    let team_two_name = 'team two'
    let one_h2 = document.getElementById('one')
    let two_h2 = document.getElementById('two')
    one_h2.innerHTML = team_one_name + ":" + team_points["team1"]
    two_h2.innerHTML = team_two_name + ":" + team_points["team2"]
}

create_scores()