import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=c3dfdacfa8fd46099f28a0183da86d50',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    <NewsListBlock>...로딩중</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }
  console.log(articles);
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url}>{article}</NewsItem>
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
