import axios from 'axios';

const fetchAppContent = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://mcv1hj9r0ntx1flb8yq0fbx0t7nq.pub.sfmc-content.com/3ypqlcqbwxz?queryString=content')
        .then(response => {
            const appContent = response.data;
            resolve(appContent);
        })
        .catch(error => {
            console.log(`Error occurred fetching application content: ${error.message}`);
            reject(error);
        });
    });
};

const fetchTopics = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://mcv1hj9r0ntx1flb8yq0fbx0t7nq.pub.sfmc-content.com/3ypqlcqbwxz?queryString=topics')
        .then(response => {
            const topics = response.data;
            resolve(topics);
        })
        .catch(error => {
            console.log(`Error occurred fetching application topics: ${error.message}`);
            reject(error);
        });
    });
};

export {
    fetchAppContent,
    fetchTopics
};

