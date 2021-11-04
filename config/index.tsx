const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'https://online-quiz-portal.herokuapp.com/' : 'https://online-quiz-portal.herokuapp.com/';
