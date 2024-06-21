import projectCardsData from '../DB/projectsData.json';

const fetchProjectCards = () => {
    return new Promise((resolve, reject) => {
        try {
            // Simulate an asynchronous API call
            setTimeout(() => {
                resolve(projectCardsData);
            }, 1);
        } catch (error) {
            reject(error);
        }
    });
};

export default fetchProjectCards;