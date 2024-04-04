// Set default function parameter
function greetUser(greetingPrefix, userName = 'User') {
  console.log(greetingPrefix + ' ' + userName + '!');
}

greetUser('Hi', 'Olav');
greetUser('Greetings');
