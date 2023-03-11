import fetch from "node-fetch";
import Sentiment from "sentiment";
const sentiment = new Sentiment();

async function getJokes() { // Response
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
    const result = await response.json();

    const jokeToAnalyse = result.joke || `${result.setup} ${result.delivery}`;
    const { score } = sentiment.analyse(jokeToAnalyse);
        if (score < 0) {
            return await getJokes();
        } else {
        return result;
    }
}

export default {getJokes}; // Denne linje skal altid være i bunden af en fil.