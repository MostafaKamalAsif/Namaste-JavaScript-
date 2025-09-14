function xyz(count) {
    // var count=0
   this.incrementcounter= function increment() {
        console.log(++count);
    }
    this.decrementcounter=function decrement() {
        console.log(--count);
    }
}
let counter = new xyz(2);
counter.incrementcounter()
counter.incrementcounter()
counter.decrementcounter()