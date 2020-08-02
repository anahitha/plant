class Form {

    constructor() {
        this.question = createElement('h3', "What times of day, roughly, does your balcony get sunlight?")
        this.orientation = createRadio('h3');
        this.orientation.option('Mostly in the morning');
        this.orientation.option('In the afternoon');
        this.orientation.option('In the evening');
        this.orientation.option('All day');
        this.button = createButton('Submit');
        this.question2 = createElement('h3', "What type of climate do you live in?");
        this.climate = createRadio('h3');
        this.climate.option('Hot');
        this.climate.option('Cold');
        this.climate.option('Wet');
        this.question3 = createElement('h3', "What sort of plants would you like your garden to have?");
        this.preference = createRadio('h3');
        this.preference.option('Lots of flowers');
        this.preference.option('Edible plants');
        this.preference.option('Cacti/ plants that require little maintenance');
        this.text = createElement('h1', "Design your own garden");
        this.question4 = createElement('h3', "How large is your balcony? Pick the closest option");
        this.size = createRadio('h3');
        this.size.option('4 by 10 feet');
        this.size.option('4 by 8 feet');
        this.size.option('4 by 12 feet');
        this.question5 = createElement('h3', "Would you like to have a rockery or water fountain?");
        this.optional = createRadio('h3');
        this.optional.option('No');
        this.optional.option('A rockery');
        this.optional.option('A water fountain');
    }


    display() {
        this.orientation.position(200, 220)
        this.question.position(200, 180)
        this.question2.position(200, 120)
        this.question3.position(200, 60)
        this.question4.position(200, 240)
        this.question5.position(200, 300)
        this.preference.position(200, 105)
        this.size.position(200, 285)
        this.button.position(250, 500)
        this.optional.position(200, 345)
        this.text.position(200, 5)
        this.climate.position(200, 165)
        this.button.mousePressed(() => {
            answer.display();
            direction = this.orientation.value();
            console.log(direction);
            clim = this.climate.value();
            console.log(clim);
            pref = this.preference.value();
            console.log(pref);
            val = this.size.value();
            console.log(val);
            thing = this.optional.value();
            console.log(thing);
            this.question.hide();
            this.question2.hide();
            this.question3.hide();
            this.question4.hide();
            this.question5.hide();
            
        this.preference.hide();
        this.size.hide();
        this.optional.hide();
        this.climate.hide();
        this.orientation.hide();
        });
    }
}