// Mediator pattern is used  to reduce communication complexity between multiple objects or classes

const User = function(name) {
    this.name = name;
    this.chatRoom = null;
}

User.prototype= {
    send: function(msg, to) {
        this.chatRoom.send(msg, this, to);
    },

    receive: function(msg, from) {
        console.log(`From ${from.name} to ${this.name}: ${msg}`);
    }
}

const ChatRoom = function() {
    let users= {}; //list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatRoom = this;
        },

        send: function(msg, from, to) {
            if(to){
                // to single user
                to.receive(msg, from);
            } else {
                // group text
                for (key in users) {
                    if(users[key] !== from) {
                        users[key].receive(msg, from);
                    }
                }
            }
        }
    }
}


const anoop = new User('anoop');
const mouni= new User('Mounica');
const p3 = new User('p3');

const chatroom = new ChatRoom();

chatroom.register(anoop);
chatroom.register(mouni);
chatroom.register(p3);

anoop.send('Hello Mouni', mouni);
mouni.send('Hello Anoop', anoop);
anoop.send('Hello world');