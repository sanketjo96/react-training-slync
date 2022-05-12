export default class JSBindings {
    constructor(props) {
        this.state = {
            'int': 123
        }
    }

    // Accessing 'this' directly 
    touchNum() {
       return this;
    }
}

const binding = new JSBindings()

// Calling method directly
console.log('Calling method directly on object', binding.touchNum())

// Calling method indirectly
const otherTouchNum = binding.touchNum;
console.log('Calling method indirectly', otherTouchNum())


// Conclusion: - Calling assigned class method losses track of its this


// Manual binding
const boundTouchNum = binding.touchNum;
console.log('Calling manually bound method', boundTouchNum.bind(binding)())