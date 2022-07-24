// Can only return one instance at time
// Global point of access

const Singleton = (function(){
    let instance;

    function createInstance() {
        const object = new Object('New object instance');
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            } 
            return instance;
            
        }
    }
})();

const instanceA = Singleton.getInstance();
console.log(instanceA)