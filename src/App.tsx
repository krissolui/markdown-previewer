import { useState } from 'react';
import './App.css';
import MarkdownGuide from './components/MarkdownGuide';
import Header from './components/Header';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';
import styled from 'styled-components';

const Display = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	flex: 1;
`;

function App() {
	const [showGuide, setShowGuide] = useState<boolean>(false);
	const [input, setInput] = useState<string>('# Hello World');

	const onToggleGuide = () => {
		setShowGuide(!showGuide);
	};

	return (
		<>
			<Header onToggleGuide={onToggleGuide} />
			{showGuide && <MarkdownGuide />}
			<Display>
				<MarkdownInput input={input} setInput={setInput} />
				<MarkdownOutput input={input} />
			</Display>
		</>
	);
}

export default App;
