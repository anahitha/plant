var form;
var val, clim, pref, direction, thing, cover;

function setup() {
    canvas = createCanvas(1500, 900);
    background("pink");
    form = new Form();
    form.display();
    answer = new Answer();
}