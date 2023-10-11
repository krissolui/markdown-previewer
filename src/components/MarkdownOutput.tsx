import Markdown from 'react-markdown';
import styled from 'styled-components';

interface IMarkdownOutput {
	input: string;
}

const Container = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding: 20px;
	overflow: scroll;
	background-color: rgb(249, 249, 249);
	border-left: 1px solid rgb(221, 221, 221);
`;

const MarkdownOutput = ({ input }: IMarkdownOutput) => {
	return (
		<Container>
			<Markdown>{input}</Markdown>
		</Container>
	);
};

export default MarkdownOutput;
