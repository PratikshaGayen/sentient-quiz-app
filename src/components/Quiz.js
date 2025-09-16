import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import questions from '../questions';

const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [showLearnAbout, setShowLearnAbout] = useState(true);
	const [timeLeft, setTimeLeft] = useState(30);
	const [showFeedback, setShowFeedback] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [isCorrect, setIsCorrect] = useState(false);

	// Timer effect
	useEffect(() => {
		if (!showLearnAbout && !showScore && !showFeedback && timeLeft > 0) {
			const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
			return () => clearTimeout(timer);
		} else if (timeLeft === 0 && !showFeedback) {
			// Time's up - show feedback for wrong answer
			setShowFeedback(true);
			setIsCorrect(false);
			setSelectedAnswer(null);
		}
	}, [timeLeft, showLearnAbout, showScore, showFeedback]);

	// Reset timer when question changes
	useEffect(() => {
		if (!showLearnAbout && !showScore) {
			setTimeLeft(30);
			setShowFeedback(false);
			setSelectedAnswer(null);
		}
	}, [currentQuestion, showLearnAbout, showScore]);

	const handleAnswerOptionClick = (answerOption, isCorrect) => {
		setSelectedAnswer(answerOption);
		setIsCorrect(isCorrect);
		setShowFeedback(true);
		
		if (isCorrect) {
			setScore(score + 1);
		}
	};

	const handleNextQuestion = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const startQuiz = () => {
		setShowLearnAbout(false);
	};

	const restartQuiz = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
		setShowLearnAbout(true);
		setTimeLeft(30);
		setShowFeedback(false);
		setSelectedAnswer(null);
		setIsCorrect(false);
	};

	return (
		<div className='quiz-container'>
			<div className='quiz-header'>
				<h1>Sentient Quiz</h1>
				<p>Test your knowledge about Sentient AI and related technologies</p>
			</div>
			
			{showLearnAbout ? (
				<div className='learn-about-section'>
					<h2>Learn About Sentient</h2>
					<p>Before taking the quiz, learn more about Sentient AI and their cutting-edge technologies.</p>
					<div className='learn-content'>
						<p>Sentient is building the future of AI with advanced models and infrastructure. Explore their platform to understand:</p>
						<ul>
							<li>Multi-agent AI assistants</li>
							<li>Dobby model family</li>
							<li>Open Deep Search (ODS)</li>
							<li>High-performance AI infrastructure</li>
						</ul>
						<a 
							href="https://www.sentient.xyz/" 
							target="_blank" 
							rel="noopener noreferrer"
							className='learn-link'
						>
							Visit Sentient.xyz →
						</a>
					</div>
					<button className='start-quiz-btn' onClick={startQuiz}>
						Start Quiz
					</button>
				</div>
			) : showScore ? (
				<Result 
					score={score} 
					totalQuestions={questions.length} 
					restartQuiz={restartQuiz} 
				/>
			) : (
				<Question
					question={{
						id: currentQuestion + 1,
						total: questions.length,
						questionText: questions[currentQuestion].questionText,
						answerOptions: questions[currentQuestion].answerOptions
					}}
					timeLeft={timeLeft}
					showFeedback={showFeedback}
					selectedAnswer={selectedAnswer}
					isCorrect={isCorrect}
					handleAnswerOptionClick={handleAnswerOptionClick}
					handleNextQuestion={handleNextQuestion}
				/>
			)}
		</div>
	);
};

export default Quiz;
