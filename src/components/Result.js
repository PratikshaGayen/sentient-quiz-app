import React from 'react';

const Result = ({ score, totalQuestions, restartQuiz }) => {
	const percentage = Math.round((score / totalQuestions) * 100);
	
	const getScoreMessage = () => {
		if (percentage >= 80) return "Excellent! You're a Sentient expert! 🎉";
		if (percentage >= 60) return "Good job! You know your Sentient basics! 👍";
		if (percentage >= 40) return "Not bad! Keep learning about Sentient! 📚";
		return "Keep studying! You'll get there! 💪";
	};

	return (
		<div className='score-section'>
			<h2>Quiz Complete!</h2>
			<p>You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong></p>
			<p>That's <strong>{percentage}%</strong> correct!</p>
			<p className="score-message">{getScoreMessage()}</p>
			<button onClick={restartQuiz}>Take Quiz Again</button>
		</div>
	);
};

export default Result;
