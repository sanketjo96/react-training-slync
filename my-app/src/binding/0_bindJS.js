export default class JSobjs {
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

const obj = new JSobjs()

// Calling method directly
console.log('Calling method directly on object', obj.touchNum())

// Calling method indirectly
const otherTouchNum = obj.touchNum;
console.log('Calling method indirectly', otherTouchNum())


// Conclusion: - Calling assigned class method losses track of its this


// Manual obj
const boundTouchNum = obj.touchNum;
console.log('Calling manually bound method', boundTouchNum.bind(obj)())