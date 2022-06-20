import Styled from "styled-components";
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/"+input);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </FormStyle>
    );
}

const FormStyle = Styled.form`
    margin: 2rem 15rem;
    position: relative;
    height: 2rem;

    svg{
        position: absolute;
        color: #ffffff;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        z-index: 5;
    }

    input{
        position: absolute;
        background: #313131;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        outline: none;
        color: #ffffff;
        padding: 1rem 3rem;
        font-size: 1.1rem;
    }
`;
