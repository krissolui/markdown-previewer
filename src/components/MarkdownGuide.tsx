import styled from 'styled-components';

const Container = styled.div`
	border: 1px solid rgb(221, 221, 221);
	padding: 20px;
	margin: 10px;
	background-color: rgb(249, 249, 249);
`;

const MarkdownGuide = () => {
	const rules: string[] = [
		'# H1',
		'## H2',
		'### H3',
		'**bold**',
		'*italic*',
		'[Link](http://a.com)',
		'![Image](http://url/a.png)',
		'`inline code`',
		'```block code```',
		'- list item',
	];
	return (
		<Container>
			<h2>Markdown Cheat Sheet</h2>

			<ul>
				{rules.map((rule: string, idx: number) => (
					<li key={idx}>{rule}</li>
				))}
			</ul>
		</Container>
	);
};

export default MarkdownGuide;
