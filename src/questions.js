const questions = [
	{
		questionText: 'Which family of models powers Sentient Chat’s multi‑agent assistant in production launches?',
		answerOptions: [
			{ answerText: 'Dobby‑70B', isCorrect: true },
			{ answerText: 'Llama‑70B', isCorrect: false },
			{ answerText: 'Mistral‑8x7B', isCorrect: false },
			{ answerText: 'GPT‑4o‑mini', isCorrect: false },
		],
	},
	{
		questionText: 'What was an early public release in the Dobby line during previews?',
		answerOptions: [
			{ answerText: 'Dobby‑Preview‑1‑8B', isCorrect: true },
			{ answerText: 'Dobby‑Alpha‑33B', isCorrect: false },
			{ answerText: 'Dobby‑Tiny‑2B', isCorrect: false },
			{ answerText: 'Dobby‑Max‑120B', isCorrect: false },
		],
	},
	{
		questionText: 'What core UX goal was cited for Sentient Chat’s infra design?',
		answerOptions: [
			{ answerText: 'Sub‑2s responses at scale', isCorrect: true },
			{ answerText: '30s batched latency', isCorrect: false },
			{ answerText: 'Offline‑only inference', isCorrect: false },
			{ answerText: 'CPU‑only serving', isCorrect: false },
		],
	},
	{
		questionText: 'What is Open Deep Search (ODS) positioned as?',
		answerOptions: [
			{ answerText: 'Open‑source, high‑performance search alternative', isCorrect: true },
			{ answerText: 'A private image model', isCorrect: false },
			{ answerText: 'A blockchain explorer', isCorrect: false },
			{ answerText: 'A database engine', isCorrect: false },
		],
	},
	{
		questionText: 'On the FRAMES benchmark, which result is attributed to ODS?',
		answerOptions: [
			{ answerText: 'Around 75% accuracy', isCorrect: true },
			{ answerText: '25% accuracy', isCorrect: false },
			{ answerText: '99.9% accuracy', isCorrect: false },
			{ answerText: 'Not evaluated', isCorrect: false },
		],
	},
	{
		questionText: 'What complementary role does ODS play with Sentient Chat?',
		answerOptions: [
			{ answerText: 'Transparent, fast retrieval for multi‑agent workflows', isCorrect: true },
			{ answerText: 'GPU provisioning only', isCorrect: false },
			{ answerText: 'Audio synthesis', isCorrect: false },
			{ answerText: 'Wallet key storage', isCorrect: false },
		],
	},
];

export default questions;
