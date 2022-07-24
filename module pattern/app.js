//Basic structure of module patterns

// (function() {
//     // Idea of module pattern
//     // declare private variables and functions
//     return {
//         // declare public variable and functions
//     }
// })();

// standard module pattern
const UICtrl = (function(){
    // private variable
    let text = 'hello world';

    const changeText = () => {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    // public variables, accessing private vars and functions
    return {
        callChangeText: () => {
            changeText();
        }
    }
})();

// public accessible 
UICtrl.callChangeText();

// Revealing module pattern
// vs module pattern: main difference instead of returning public functions, we just map return object literal to function or vars

const ItemCtrl = (function(){
    // private
    let _data = [];

    function add(item) {
        _data.push(item);
        console.log('item added');
    }

    function get(id) {
        return _data.find(item => {
            return item.id === id;
        })
    }

    return {
        add: add,
        get: get
    }

})();

ItemCtrl.add({id:1, name:'anoop'});
console.log(ItemCtrl.get(1));

