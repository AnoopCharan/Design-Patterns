// angular js relies heavily on Observer pattern
// The Observer pattern offers a subscription model in which 
// objects subscribe to an event and get notified when the event occurs.
// IMPORTANT for event driven programming of JS
// in ES5 


// function EventObserver() {
//     this.observers =[];
// }

// EventObserver.prototype = {
//     subscribe: function(fn) {

//         this.observers.push(fn);
//         console.log('You are now subscribed to ' + fn.name );
//     },

//     unsubscribe: function(fn) {
//         this.observers= this.observers.filter(function(item) {
//             if(item !== fn) {
//                 return item;
//             }
//         });
//         console.log(`You are now unsubscribes from ${fn.name}`);
//     },

//     fire: function(){
//         this.observers.forEach(function(item) {
//             item.call();
//         });
//     }

// }

// In ES6 using classes
class EventObserver {
    constructor() {
        this.observers =[];

    }
    subscribe(fn) {
    
        this.observers.push(fn);
        console.log('You are now subscribed to ' + fn.name );
    }
    
    unsubscribe(fn) {
        // creates a list with all functions except the function passed in unsubscribe(fn)
        this.observers= this.observers.filter(function(item) {
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribes from ${fn.name}`);
    }
    
    fire(){
        this.observers.forEach(function(item) {
            item.call();
        });
    }


}


const click = new EventObserver();

// Event Listners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurrentMs);
})

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurrentMs);
})

document.querySelector('.sub-date').addEventListener('click', function() {
    click.subscribe(getDate);
})

document.querySelector('.unsub-date').addEventListener('click', function() {
    click.unsubscribe(getDate);
})

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
})

// click handler
const getCurrentMs= function () {
    console.log(`current milli seconds : ${Date.now()}`);
}

const getDate= function () {
    console.log(`current Date : ${new Date().toLocaleDateString()}`);
}

