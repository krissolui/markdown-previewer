import React from 'react';
import styled from 'styled-components';

interface IMarkdownInput {
	input: string;
	setInput: (input: string) => void;
}

const Container = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding: 20px;
`;

const TextArea = styled.textarea`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding: 10px;
	border: none;
	outline: none;
	resize: none;
	font-family: inherit;
	font-size: inherit;
`;

const MarkdownInput = ({ input, setInput }: IMarkdownInput) => {
	const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInput(e.target.value);
	};

	return (
		<Container>
			<TextArea
				autoComplete="false"
				value={input}
				onChange={handleChangeInput}
			/>
		</Container>
	);
};

export default MarkdownInput;
