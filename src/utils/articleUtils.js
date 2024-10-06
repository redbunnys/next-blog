import { additionalArticles } from '../data/articles';

export const loadMoreArticles = (setArticles, setLoading) => {
    setLoading(true);
    setTimeout(() => {
        setArticles(prevArticles => [...prevArticles, ...additionalArticles]);
        setLoading(false);
    }, 1000);
};