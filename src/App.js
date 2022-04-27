import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';

const App = () => {

	const [modal, setModal] = useState(false)

	return (
		<div>
			<ButtonsContent>
				<Button onClick={() => setModal(true)}>Modal 1</Button>
			</ButtonsContent>

			<Modal
				modal={modal}
				setModal={setModal}
				title='Hola'
				showHeader={true}
				showOverlay={true}
				positionModal={'center'}
				padding={'20px'}
			>
				<Content>
					<h1>Hola,soy un modal</h1>
					<p>Puedes cambairme y personalizarme</p>
					<Button onClick={() => setModal(false)}>Cerrar</Button>
				</Content>
			</Modal>
		</div>
	);
}

export default App;

const ButtonsContent = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Button = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #418ef1;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;