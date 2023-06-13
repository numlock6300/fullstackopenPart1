import { useState } from "react";

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const Header = ({ text }) => {
		return <h1>{text}</h1>;
	};
	const Button = ({ handleClick, text }) => {
		return <button onClick={handleClick}>{text}</button>;
	};

	const Content = ({ text }) => {
		return <div>{text}</div>;
	};

	const MostVotes = ({ points, anecdotes }) => {
		const maxVotes = Math.max(...points);
		const maxVotesIndex = points.indexOf(maxVotes);
		return (
			<div>
				<div>{anecdotes[maxVotesIndex]}</div>
				<div>has {maxVotes} points</div>
			</div>
		);
	};

	const [selected, setSelected] = useState(0);
	const [point, setPoints] = useState(Array(anecdotes.length).fill(0));

	const getRandom = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length));
	};

	const addPoint = () => {
		const points = [...point];
		points[selected] += 1;
		setPoints(points);
	};

	return (
		<div>
			<Header text="Andecdote of the day" />
			<Content text={anecdotes[selected]} />
			<Content text={`has ${point[selected]} votes`} />
			<Button handleClick={addPoint} text="vote" />
			<Button handleClick={getRandom} text="next anecdote" />
			<Header text="Anecdote with the most votes" />
			<MostVotes points={point} anecdotes={anecdotes} />
		</div>
	);
};

export default App;
