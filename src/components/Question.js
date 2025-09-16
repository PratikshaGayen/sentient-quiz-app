import React from 'react';

const Question = ({ 
	question, 
	timeLeft, 
	showFeedback, 
	selectedAnswer, 
	isCorrect, 
	handleAnswerOptionClick, 
	handleNextQuestion 
}) => {
	const getCorrectAnswer = () => {
		return question.answerOptions.find(option => option.isCorrect);
	};

	return (
		<div className='question-section'>
			<div className='question-header'>
				<div className='question-count'>
					<span>Question {question.id}</span>/{question.total}
				</div>
				<div className={`timer ${timeLeft <= 10 ? 'timer-warning' : ''}`}>
					⏱️ {timeLeft}s
				</div>
			</div>
			<div className='question-text'>{question.questionText}</div>
			<div className='answer-section'>
				{question.answerOptions.map((answerOption, index) => {
					let buttonClass = 'answer-button';
					
					if (showFeedback) {
						if (answerOption.isCorrect) {
							buttonClass += ' correct-answer';
						} else if (selectedAnswer === answerOption) {
							buttonClass += ' wrong-answer';
						} else {
							buttonClass += ' disabled-answer';
						}
					}
					
					return (
						<button 
							key={index} 
							className={buttonClass}
							onClick={() => !showFeedback && handleAnswerOptionClick(answerOption, answerOption.isCorrect)}
							disabled={showFeedback}
						>
							{answerOption.answerText}
							{showFeedback && answerOption.isCorrect && <span className="correct-indicator">✓</span>}
							{showFeedback && selectedAnswer === answerOption && !answerOption.isCorrect && <span className="wrong-indicator">✗</span>}
						</button>
					);
				})}
			</div>
			
			{showFeedback && (
				<div className='feedback-section'>
					<div className={`feedback-message ${isCorrect ? 'correct' : 'incorrect'}`}>
						{isCorrect ? (
							<>
								<span className="feedback-icon">🎉</span>
								<span>Correct! Well done!</span>
							</>
						) : (
							<>
								<span className="feedback-icon">❌</span>
								<span>Incorrect. The correct answer is: <strong>{getCorrectAnswer().answerText}</strong></span>
							</>
						)}
					</div>
					<button className='next-question-btn' onClick={handleNextQuestion}>
						{question.id === question.total ? 'See Results' : 'Next Question'}
					</button>
				</div>
			)}
		</div>
	);
};

export default Question;
