import { useEffect, useState } from "react";
import Styled from "styled-components";
import { Splide, SplideSlide  } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";


export default function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&vegetarians`);

      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes); 
    }
  };

  return (
    <div> 
        <Wrapper>
          <h3>Veggie Picks</h3>
          <Splide options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}>
            {veggie.map((recipe)=>{
              return(
                <SplideSlide key={recipe.id}>
                  <Link to={'/recipe/'+recipe.id}>
                    <Card>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                    </Card>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
    </div>
  );

} 
const Wrapper = Styled.div`
  margin: 4rem 0rem;
`;
const Card = Styled.div`
  min-height:15rem;
  border-radius:2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 5px;
  }
`;

const Gradient = Styled.div`{
  z-index: 3;
  position: absolute;
  height: 100%;
  width:100%;
  background: linear-gradient(to top, #000000 , transparent);
}
`;
