import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Styled from 'styled-components';

export const Searched = () => {
    const [searchedRecipe, setSearchedRecipe] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipe(recipes.results);
    };

    useEffect(()=>{
        getSearched(params.search);
    }, [params.search]);

  return (
    <Grid>
      {searchedRecipe.map((item) => {
        return(
          <SLink to={"/recipe/"+item.id}>
            <Card key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Card>
          </SLink>
        );
      })}
    </Grid>
  )
}

const Grid = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
`;

const Card = Styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
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