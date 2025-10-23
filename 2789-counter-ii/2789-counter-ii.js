/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

     let currentNumber = init

    let object = {

        increment : function() {
            return ++currentNumber;
        },

        decrement : function() {
            return --currentNumber
        },

        reset : function() {
            currentNumber = init;
            return currentNumber;
        }
    }

    return object
}


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */