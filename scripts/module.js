import { MyTour } from './my-tour.js';

Hooks.once('init', function () {
    // Your module initialization code here
    game.tourManager = new TourManager();
    game.tourManager.init();
});

Hooks.once('ready', function () {
    // Your module ready code here
    game.tourManager = new TourManager();
    game.tourManager.init();
});

Hooks.on('renderMyApp', function () {
    // Your custom rendering code here
});

// Export your custom class so that it can be used in other modules or macros
export { MyTour, TourManager };