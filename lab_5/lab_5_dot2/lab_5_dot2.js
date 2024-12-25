class Observer {
	
	constructor() {
		this.subscribers = [];
	}

	subscribe(subscriber) {
		this.subscribers.push(subscriber);
	}

	unsubscribe(subscriber) {
		this.subscribers.filter(sub => sub !== subscriber);
	}

	notify(payload) {
		this.subscribers.forEach(subscriber => subscriber(payload));
	}
}

function logToConsole(message) {
	console.log(message);
}

function logToDom(message) {
	const logsContainer = document.getElementById('observer-logs');
	logsContainer.innerHTML += `<li>${message}</li>`;
}

const btn = document.getElementById('btn');

const observer = new Observer();

const subscribers = [logToConsole, logToDom];

subscribers.forEach(subscriber => observer.subscribe(subscriber));

btn.addEventListener('click', e => {
	e.preventDefault();
	observer.notify('btn clicked');
})