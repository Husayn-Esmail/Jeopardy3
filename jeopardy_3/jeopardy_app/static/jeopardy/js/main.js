// **************
// CLASSES
// **************
class Category {
    constructor(name) {
        this.name = name
        // an array of questions
        this.questions = []
    }
}

class Question {
    constructor(q, a, val, id) {
        this.__q = q;
        this.__a = a;
        this.__val = val;
        this.__used = false;
        this.__element;
        this.__double = false;
        this.__id = id
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

    get getDouble() {
        return this.__element
    }

    set setDouble(value) {
        return this.__double = value
    }

    get getId() {
        return this.__id
    }

    set setId(value) {
        return this.__id = value
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
        return p
    }

    create_question_element() {
        var object = document.createElement('p')
        object.className = "question_button"
        object.innerHTML = '$' + this.__val // fix this in later iterations because this is bad. 
        object.id = this.__id +'q'
        this.__element = object
        return object
    }
}

// ******************
// Global Variables
// ******************

let questions = [];
// possible values are 0 and 1, if 0, then team 1, if 1, then team 2
let point_state = 0;
let team_points = {}
let team_names = []
let seconds_value = 120;

function init_scores() {
    // not a pure function
    if (team_names.length != 0) {
        for (let name in team_names) {
            team_points[team_names[name]] = 0
        }
    } else {
        team_names = ["team1", "team2"]
        team_points = {"team1": 0, "team2": 0}
    }
}


// splash screen for questions and answers
function create_game() {
    let cat_counter = 10
    for (var category in data) {
        // create categories
        let p = document.createElement('p')
        p.innerHTML = category
        p.className = 'category'

        // get list of questions
        var extract = data[category]
        let col_div = document.createElement('div')
        col_div.className = "col"

        // create counter for individual questions
        let id_counter = 0
        id_counter += cat_counter;
        cat_counter += 10

        // create each individual question
        for (var question_answer_pair in data[category]) {
            var values = extract[question_answer_pair]

            // unwrap values
            const calc = (parseInt(question_answer_pair) + 1) * 100 // calculation for points value
            
            // create question instances
            const q_element = new Question(values[0], values[1], calc, id_counter)
            // increment id counter immediately so it's not forgotten later
            id_counter++;

            var html_question = q_element.create_question_element()
            // add an event listener that will show the question when it is clicked
            html_question.addEventListener('click', function html_q_listener(){
                const splash = document.createElement('div')
                splash.id = 'splash'
                // display the timer
                const timer = createTimer()
                countdownTimer(seconds_value, timer)
                

                // display the question
                const splash_p = document.createElement('p')
                splash_p.innerHTML= q_element.getQ
                splash_p.id = 'splash_p'
                splash.append(splash_p)
                
                // display correct
                const splash_correct = document.createElement('p')
                splash_correct.innerHTML = 'CORRECT' // TODO Ideally this would be an image
                splash_correct.id = 'splash_correct'

                // display incorrect (steal)
                const splash_steal = document.createElement('p')
                splash_steal.innerHTML = 'STEAL'
                splash_steal.id = 'splash_steal'

                //  create button for steal_correct
                 const steal_correct = document.createElement('p')
                 steal_correct.id = 'steal_correct'
                 steal_correct.innerHTML = 'CORRECT'
                 steal_correct.style.display = 'none'

                 // create steal_incorrect button
                 const steal_incorrect = document.createElement('p')
                 steal_incorrect.innerHTML = 'INCORRECT'
                 steal_incorrect.id = 'steal_incorrect'
                 steal_incorrect.style.display = "none"

                // add display correct's event listener
                splash_correct.addEventListener('click', () => {
                    // add points to the team
                    if (point_state === 1) {
                        team_points[team_names[1]] += q_element.getVal
                    } else {
                        team_points[team_names[0]] += q_element.getVal
                    }
                    // update_scores()
                    // replace p from question to answer
                    splash_p.innerHTML = q_element.getA
                    
                    // hide correct button
                    splash_correct.style.display = "none"
                    
                    // hide incorrect button
                    splash_steal.style.display = "none"
                    
                    // display next button
                    const next_button = create_next_button()
                    splash.append(next_button)

                    // mark as used
                    q_element.flip_used()
                    determine_used()
                });
                
            
                // add splash steal event listener
                splash_steal.addEventListener('click', () => {
                    point_state = 1
                    // hide the previous buttons
                    splash_steal.style.display = 'none'
                    splash_correct.style.display = 'none'
                    // display steal_correct
                    steal_correct.style.display = 'block'
                    // display proper incorrect
                    steal_incorrect.style.display = 'block'
                })
                

                // steal_correct eventlistener
                steal_correct.addEventListener('click', () => {
                    // show answer
                    splash_p.innerHTML = q_element.getA
                    // create and show next button
                    const next = create_next_button()
                    splash.append(next)
                    // hide correct and incorrect buttons
                    steal_correct.style.display = "none"
                    steal_incorrect.style.display = 'none'

                    // award points

                    // mark as used
                    q_element.flip_used()
                    determine_used()
                })
                
                // steal_incorrect event listener
                steal_incorrect.addEventListener('click', () => {
                    // show answer
                    splash.innerHTML = q_element.getA
                    // award no points
                    // show next button
                    const next = create_next_button()
                    splash.append(next)
                    // hide steal_correct
                    steal_correct.style.display = 'none'
                    // hide steal_incorrect
                    steal_incorrect.style.display = 'none'
                    
                    // mark as used
                    q_element.flip_used()
                    determine_used()
                })

                // add to splash
                splash.append(splash_correct)
                splash.append(timer)
                splash.append(splash_steal)
                splash.append(steal_correct)
                splash.append(steal_incorrect)

                // add splash to the body
                document.getElementsByTagName('body')[0].append(splash)
            });
            
            col_div.append(html_question)
            questions.push(q_element)
        }
        document.getElementById('cats').append(p)
        document.getElementById('questions').append(col_div)
    }
}



function create_next_button() {
    // answer should display next button
    const next = document.createElement('p')
    next.innerHTML = 'next'
    next.className = 'next'
    next.addEventListener('click', () =>  {
        remove_splash('splash')
    })
    return next
}

// setup splash screen
function setup() {
    // setup container
    const encapsulating_div = document.createElement('div')
    encapsulating_div.classList = ['setup_container']
    encapsulating_div.id = 'setup_container'

    // create header
    const header = document.createElement('h1')
    header.id = 'setup_header'
    header.innerHTML = 'Setup'

    // create timer config
    const timer_length_label = document.createElement('p')
    const timer_field_container = document.createElement('div')
    timer_field_container.className = 'input_container'
    const timer_length_field = document.createElement('input')
    timer_length_label.innerText = "Enter timer length in seconds:"
    timer_length_label.classList = ['setup_label']
    timer_length_field.classList = ['setup_input']

    // create team config
    const team_one_label = document.createElement('p')
    const team_one_name = document.createElement('input')
    const team_one_container = document.createElement('div')
    const team_two_container = document.createElement('div')
    team_one_container.className = 'input_container'
    team_two_container.className = 'input_container'
    const team_two_label = document.createElement('p')
    const team_two_name = document.createElement('input')
    team_one_label.classList = ['setup_label']
    team_two_label.classList = ['setup_label']
    team_one_name.classList = ['setup_input']
    team_two_name.classList = ['setup_input']
    team_one_label.innerText = "Enter Team 1 Name: "
    team_two_label.innerText = "Enter Team 2 Name: "
    const warning = document.createElement('p')
    warning.innerText = 'WARNING! CHANGING ANYTHING ON THIS PAGE WILL RESET YOUR POINTS' 

    // create way to return to game screen
    const done_container = document.createElement('div')
    done_container.id = 'done_container'
    const done_button = document.createElement('p')
    done_button.innerHTML = 'done'
    done_button.id = 'done'
    done_button.addEventListener('mouseup', () => {
        if (team_one_name.value !== "") {
            // replaces original name if it exists or replaces set name
            team_names.splice(0, 1, team_one_name.value)
        }
        if (team_two_name.value !== "") {
            team_names.splice(1, 1, team_two_name.value)
        }
        // figure out how to reset game
        init_scores()
        update_scores()
        remove_splash('setup_container')
    })
    
    // add elements to encapsulating div
    encapsulating_div.append(header)
    encapsulating_div.append(warning)
    timer_field_container.append(timer_length_field)
    encapsulating_div.append(timer_length_label, timer_field_container)
    team_one_container.append(team_one_name)
    team_two_container.append(team_two_name)
    encapsulating_div.append(team_one_label, team_one_container, team_two_label, team_two_container)
    done_container.append(done_button)
    encapsulating_div.append(done_container)
    // add to main body
    return encapsulating_div
}


// things left to do:
// TODO add functionality to select which team gets points
// TODO add timer
// TODO add functionality to play music every time the timer starts.
// TODO complete the jeopardy questions
// TODO style the page to look much better
// TODO use second to display the countdown
// TODO ensure text shows up nicely
// TODO space out buttons
// TODO fix scoring system

function create_scores() {
    let names_div = document.getElementById('team_names')
    let team_one_name = team_names[0]
    let team_two_name = team_names[1]
    let one_h2 = document.createElement('h2')
    let two_h2 = document.createElement('h2')

    one_h2.innerHTML = team_one_name + ": " + team_points[team_one_name]
    two_h2.innerHTML = team_two_name + ": " + team_points[team_two_name]
    one_h2.id = 'one'
    two_h2.id = 'two'
    names_div.append(one_h2)
    names_div.append(two_h2)
}

function update_scores() {
    let team_one_name = team_names[0]
    let team_two_name = team_names[1]
    let one_h2 = document.getElementById('one')
    let two_h2 = document.getElementById('two')
    one_h2.innerHTML = team_one_name + ": " + team_points[team_one_name]
    two_h2.innerHTML = team_two_name + ": " + team_points[team_two_name]
}

function remove_splash(element_id)  {
    const splash = document.getElementById(element_id)
    document.body.removeChild(splash)
}


function countdownTimer(seconds, element) {
    var start = Date.now();
    let int = setInterval(function() {
        var delta = Date.now() - start; // milliseconds elapsed since start
        const second = Math.floor(delta / 1000); // in seconds
        element.innerHTML = seconds_value - second
        // alternatively just show wall clock time:
        const d = new Date().toUTCString()
        // stops the interval at a given time
        if (second === seconds) {
            clearInterval(int) 
            console.log(second)
            element.innerHTML = "Time's Up!"
        }

    }, 1000)
}

function createTimer() {
    const time_element = document.createElement('p')
    time_element.id = "timer"
    return time_element
}

function determine_used() {
    for (let q in questions) {
        if (questions[q].getUsed) {
            disable_used(questions[q].getId)
        }
    }
}

function disable_used(q_id) {
    const question = document.getElementById(q_id+'q')
    // blank the value and ensure it maintains it's form
    // fill with invisible character
    question.innerHTML = 'ㅤ'

    question.classList.add('nohover')
    question.style.height = "100%"
    // create a clone and replace question with it's clone to remove event listener
    const clone = question.cloneNode(true)
    question.replaceWith(clone)
}

function create_setup_button() {
// stupid way to make a button
    const target = document.getElementById('jeopardyImage')
    const setup_button = document.createElement('p');
    setup_button.innerHTML = 'setup';
    setup_button.id = 'setup_button';
    setup_button.addEventListener('click', () => {
        document.getElementsByTagName('body')[0].append(setup());
    });
    target.parentNode.insertBefore(setup_button, target)
}


create_game()
create_setup_button();
init_scores()
create_scores()

const categories = document.getElementsByClassName('category')
categories[0].classList.add("top_left")
categories[4].classList.add('top_right')
const bottom_left = document.getElementById('14q')
bottom_left.classList.add('bottom_left')
const bottom_right = document.getElementById('54q')
bottom_right.classList.add('bottom_right')
