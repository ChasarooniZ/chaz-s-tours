import { MyTour } from './my-tour.js';

Hooks.once('init', function() {
    // Your module initialization code here
});

Hooks.once('ready', function() {
    // Your module ready code here
    game.mytour = new MyTour();
});

Hooks.on('renderMyApp', function() {
    // Your custom rendering code here
});

// Export your custom class so that it can be used in other modules or macros
export { MyTour };