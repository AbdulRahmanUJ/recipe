import { useEffect, useState } from "react";
import Styled from "styled-components";
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';

export const Recipe = () => {
  let params = useParams();
  const[details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper
      animate = {{ opacity: 1 }}
      initial = {{ opacity: 0 }}
      exit = {{ opacity: 0 }}
      transition = {{ duration: 0.5 }}
    >
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === "ingredients" ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <br/>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredients) =>
              <li key={ingredients.id}>{ingredients.original}</li>  
            )}
          </ul>
        )}
      </Info>


    </DetailWrapper>
  );
}
const DetailWrapper = Styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: #ffffff;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1rem;
    line-height: 2.5rem;
  }
`;

const Button = Styled.button`
  padding: 1rem;
  color: #313131;
  background: #ffffff;
  border: 2px solid #000000;
  margin-right: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = Styled.div`
  margin-left: 10rem;
`;
