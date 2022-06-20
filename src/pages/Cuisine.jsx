import React from 'react';
import Styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
    },[params.type]);

  return (
    <Grid
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      exit = {{ opacity: 0 }}
      transition = {{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return(
          <SLink to={'/recipe/'+item.id}>
            <Card key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Card>
          </SLink>
        );
      })}
    </Grid>
  );
}

const Grid = Styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
`;

const Card = Styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;
const SLink = Styled(Link)`
  text-decoration: none;
  color: #313131;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;
