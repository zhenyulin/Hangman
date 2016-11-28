export default {
	beforeEach: browser => {
		browser
			.url('http://localhost:3000')
			.waitForElementVisible('body')
			.waitForElementVisible('#app > div');
	},
	'Smoke test': browser => {
		browser
			.assert.visible('#app > div', 'Check if app has rendered with React')
			.assert.title('Hangman');
	},
	after: browser => browser.end(),
};