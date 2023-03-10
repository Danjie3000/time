// Redirct a user.

const redirectUserTag = document.getElementById('redirect-user');
redirectUserTag.href = 'IRLQuests.html';

// Her sætter man en timer for at redirecte brugeren til en anden side.
setTimeout(() => {
    window.location.href = '/IRLQuests.html';
}, 3000);