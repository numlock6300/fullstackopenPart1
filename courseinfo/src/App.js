const Header = (props) => {
	return <h1>{props.course}</h1>;
};
const Content = (props) => {
	return (
		<div>
			<Part
				part={props.parts[0].part}
				exercises={props.parts[0].exercises}
			/>
			<Part
				part={props.parts[1].part}
				exercises={props.parts[1].exercises}
			/>
			<Part
				part={props.parts[2].part}
				exercises={props.parts[2].exercises}
			/>
		</div>
	);
};
const Total = (props) => {
	return <p>Number of exercises {props.total}</p>;
};
const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{ part: "Fundamentals of React", exercises: 10 },
		{ part: "Using props to pass data", exercises: 7 },
		{ part: "State of a component", exercises: 14 },
	];
	// const part1 = "Fundamentals of React";
	// const exercises1 = 10;
	// const part2 = "Using props to pass data";
	// const exercises2 = 7;
	// const part3 = "State of a component";
	// const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total
				total={
					parts[0].exercises + parts[1].exercises + parts[2].exercises
				}
			/>
		</div>
	);
};
export default App;
