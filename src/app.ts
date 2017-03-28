
const messageDiv = document.getElementById('message');

if (messageDiv && messageDiv instanceof HTMLDivElement) {
	messageDiv.innerHTML = 'Hello World!';
}

export default {
	foo: 'bar'
};
