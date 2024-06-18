import projectCardsData from '../DB/projectsData.json';

const fetchProjectCards = () => {
    return new Promise((resolve, reject) => {
        try {
            // Simulate an asynchronous API call
            setTimeout(() => {
                resolve(projectCardsData);
                console.log(projectCardsData);
            }, 1000);
        } catch (error) {
            reject(error);
        }
    });
};

export default fetchProjectCards;