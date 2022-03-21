import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
	color: #005AA7;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;


const Button = styled.button`
	width: 100%;
	border: none;
	border-radius: 25px;
	padding: 15px 20px;
	background: linear-gradient(to right, #00b4db, #0083b0);
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const TextArea = styled.textarea`
	// heigth: 500px;
	resize: none;
	padding: 10px;
	margin: 10px 0;
`
export {Link, Button, Input, Form, Title, Wrapper, Container, TextArea}