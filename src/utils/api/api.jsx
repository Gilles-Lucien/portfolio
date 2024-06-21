import projectCardsData from '../DB/projectsCardsData.json';
import projectsData from '../DB/projectsData.json';

const fetchProjects = () => {
    return new Promise((resolve, reject) => {
        try {
            // Simulate an asynchronous API call
            setTimeout(() => {
                resolve(projectsData);
            }, 1);
        } catch (error) {
            reject(error);
        }
    });
};


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

export {fetchProjectCards, fetchProjects};

