import styled from 'styled-components';

interface IHeaderProps {
	onToggleGuide: () => void;
}

const Banner = styled.header`
	display: flex;
	justify-content: space-between;
	background-color: rgb(40, 44, 52);
	color: #ffffff;
	padding: 10px 20px;
`;

const Title = styled.h1`
	margin: 0;
`;

const Button = styled.button`
	height: 100%;
	margin: auto 0;
	border: 0;
	border-radius: 5px;
	background-color: #40c2ff;
	&:hover {
		background-color: #40c2ffba;
		transition: background-color 0.2s ease 0s;
		cursor: pointer;
	}
	color: rgb(40, 44, 52);
	padding: 10px;
	font-size: 1rem;
`;

const Header = ({ onToggleGuide }: IHeaderProps) => {
	return (
		<Banner>
			<Title>Markdown Previewer</Title>
			<Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
		</Banner>
	);
};

export default Header;
