import { useState } from "react";

const Header = (props) => {
	return (
		<tr>
			<td colSpan={3}>
				<h1>{props.text}</h1>
			</td>
		</tr>
	);
};
const Button = (props) => {
	return (
		<td>
			<button onClick={props.handleClick}>{props.text}</button>
		</td>
	);
};

const Count = (props) => {
	return (
		<tr>
			<td>{props.text}</td>
			<td colSpan={2}>{props.count}</td>
		</tr>
	);
};

const Statistics = ({ click }) => {
	if (click.all === 0) {
		return (
			<tr>
				<td colSpan={3}>
					<p>No feedback given</p>
				</td>
			</tr>
		);
	}
	return (
		<>
			<Count text="good" count={click.good} />
			<Count text="neutral" count={click.neutral} />
			<Count text="bad" count={click.bad} />
			<Count text="all" count={click.all} />
			<Count text="average" count={click.average} />
			<Count text="positive" count={click.positive} />
		</>
	);
};

const App = () => {
	const [click, setClick] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
		all: 0,
		average: 0,
		positive: 0,
	});

	const increaseGood = () => {
		const value = click.good + 1;
		const sum = value + click.neutral + click.bad;
		const goodPercentage = `${(value / sum) * 100} %`;
		const newClicks = {
			...click,
			good: click.good + 1,
			all: sum,
			average: (value - click.bad) / sum,
			positive: goodPercentage,
		};
		setClick(newClicks);
	};
	const increaseNeutral = () => {
		const value = click.neutral + 1;
		const sum = click.good + value + click.bad;
		const goodPercentage = `${(click.good / sum) * 100} %`;
		const newClicks = {
			...click,
			neutral: click.neutral + 1,
			all: sum,
			average: (click.good - click.bad) / sum,
			positive: goodPercentage,
		};
		setClick(newClicks);
	};
	const increaseBad = () => {
		const value = click.bad + 1;
		const sum = click.good + click.neutral + value;
		const goodPercentage = `${(click.good / sum) * 100} %`;
		const newClicks = {
			...click,
			bad: click.bad + 1,
			all: sum,
			average: (click.good - value) / sum,
			positive: goodPercentage,
		};
		setClick(newClicks);
	};

	return (
		<table>
			<tbody>
				<Header text="give feedback" />

				<tr>
					<Button handleClick={increaseGood} text="good" />
					<Button handleClick={increaseNeutral} text="neutral" />
					<Button handleClick={increaseBad} text="bad" />
				</tr>

				<Header text="statistics" />

				<Statistics click={click} />
			</tbody>
		</table>
	);
};

export default App;
