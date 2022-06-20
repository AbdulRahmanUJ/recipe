import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiMeal, GiHamburger } from 'react-icons/gi';
import Styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const Category = () => {
  return (
    <List>
        <SLink to={'/cuisine/italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/american'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/indian'}>
            <GiMeal />
            <h4>Indian</h4>
        </SLink>
    </List>
  )
}

const List = Styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;
const SLink = Styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    background: linear-gradient(35deg, #494949, #313131);
    transform: scale(0.8);

    h4{
        color: #ffffff;
        font-size: 0.8rem;
    }

    svg{
        color: #ffffff;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
`;