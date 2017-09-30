import $ from 'jquery';
import axios from 'axios';

// ES6 Supported
let version = 'ES6';
let str = `${version} supported!`;

console.log(str);

// JQuery Supported
console.log($( 'body' ).css( "background-color" ));

// An animation
const circle = document.querySelector('.circle');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    circle.className = 'circle active';
});

// Get data from backend via axios
const instance = axios.create({baseURL: 'http://localhost:3000'})

instance.get('/hero').then(function (res) {
    console.log(res);
});

//
class EventLoop {
    constructor(queue) {
        this.queue = queue;
        this.waitForMessage = true;
    }

    inQueue(cb) {
        this.queue.push({callback: cb})
    }

    outQueue() {
        var currentElement = this.queue.shift();
        currentElement.callback();
    }

    init() {
        while(this.waitForMessage && this.queue.length !== 0) {
            this.outQueue();
        }
    }

    stop() {
        this.waitForMessage = false;
    }
}

let q = [{
    callback: function() {
        console.log('hello');
    }
},{callback: function() {
    console.log('world');
}}];

let e = new EventLoop(q);

e.init();

