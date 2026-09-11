/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let copy = init;
    let increment = () => {
        return copy += 1
    }
    let decrement = () => {
        return copy -= 1
    }
    let reset = () => {
        copy = init
        return copy;
    }

    return { increment, decrement, reset }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */