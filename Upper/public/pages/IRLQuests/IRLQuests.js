// boredapi.com/api/activity


fetch('https://www.boredapi.com/api/activity') // Response promise
.then(response => response.json())
.then(result => {
    document.getElementById('quests').innerText = result.activity; // Stort set aldrig brug innerHTML.
})

console.log('Hello from IRLQuests.js')


/*
async function getActivities() { // Response getActivities
    const response = await fetch('https://www.boredapi.com/api/activity');
    const data = await response.json();
    console.log(data);
}
getActivities();
*/
