class Answer{
    constructor(){
        this.cold = createElement('h3', "You can grow: Beets, carrots, turnips, radishes, cabbage, spinach, and most herbs")
        this.hot = createElement('h3', 'You can grow: Geraniums, Bougainvillea, Aloe Vera, Sunflowers, Dahlias, Yucca. Most bags of seeds cost between 1-3 Euros, depending on the flower and how much you buy');
        this.hot2 = createElement('h3', 'You can grow: Green Beans, Zuchinni, Eggplants, and Okras');
        this.wet = createElement('h3', 'You can grow: Blueberries, Lettuce, Radishes, Spinach- Most leafy green vegetables do well in wet soil');
        this.wet = createElement('h3', 'You can grow: Hibiscus, Jasmine, Plumeria');
        this.fount = createElement('h3', 'Here are some examples of water fountains: https://aquascapes.com/product/adjustable-pouring-bamboo-fountain/ and https://balconygardenweb.com/diy-container-water-fountain-ideas/');
        this.rockery = createElement('h3', 'Here are some examples of rockeries: https://www.pinterest.com/pin/512284526333011542/');
        this.rockery2 = createElement('h3', 'Here are some examples of rockeries: https://www.istockphoto.com/de/foto/rockery-gm177016024-19846439');
        this.coldflower = createElement('h3', 'You can grow: Pansies, Calendulas, Petunias, Dianthuses, and Lilies of the valley. Most bags of seeds cost between 1-3 Euros, depending on the flower and how much you buy')
    }

    display(){
        if(clim === "Cold" && pref === "Edible plants"){
        this.cold.position(100, 100)
        }
        if(clim === "Cold" && pref === "Lots of flowers"){
        this.coldflower.position(100, 100)
        }
        if(clim === "Hot" && pref === "Lots of flowers"){
        this.hot.position(100, 100)
        }
        if(clim === "Hot" && pref === "Edible plants"){
        this.hot2.position(100, 100)
        }
        if(clim === "Wet" && pref === "Edible plants"){
        this.wet.position(100, 100)
        }
        if(clim === "Wet" && pref === "Lots of flowers"){
        this.wet2.position(100, 100)
        }
        if(thing === "A rockery" && pref === "Lots of flowers"){
        this.rockery2.position(100, 130)
        }
        if(thing === "A rockery" && pref === "Edible plants"){
        this.rockery2.position(100, 130)
        }
        if(thing === "A rockery" && pref === "Cacti/ plants that require little maintenance"){
        this.rockery.position(100, 130)
        }
        if(thing === "A water fountain"){
        this.fount.position(100, 130)
        }
    }
}
