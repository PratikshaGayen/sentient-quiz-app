# Sentient Quiz App

A modern, interactive quiz application built with React that tests your knowledge about Sentient AI and related technologies.

## Features

- 🎯 **Interactive Quiz Interface**: Clean, modern UI with smooth transitions
- 📊 **Real-time Scoring**: Track your progress as you answer questions
- 🎨 **Beautiful Design**: Gradient background with card-based layout
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- 🔄 **Restart Functionality**: Take the quiz multiple times to improve your score
- 💡 **Smart Feedback**: Get encouraging messages based on your performance

## Quiz Content

The quiz covers topics related to:
- Sentient Chat's multi-agent assistant
- Dobby model family
- Open Deep Search (ODS)
- Performance benchmarks and technical specifications

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sentient-quiz-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized for the best performance.

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**

## Project Structure

```
src/
├── components/
│   ├── Quiz.js          # Main quiz component with state management
│   ├── Question.js      # Individual question display component
│   └── Result.js        # Results and score display component
├── questions.js         # Quiz questions and answers data
├── App.js              # Main application component
├── App.css             # Application styles
└── index.js            # Application entry point
```

## Technologies Used

- **React 19.1.1** - Frontend framework
- **CSS3** - Styling with modern features like gradients and transitions
- **JavaScript ES6+** - Modern JavaScript features

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
