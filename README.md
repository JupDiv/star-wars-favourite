<body>
    <h1>Star Wars Characters App</h1>
    <p>A React Native app that displays information about Star Wars characters using the <a href="https://swapi.dev/">Star Wars API (SWAPI)</a>.</p>

    <h2>Features</h2>
    <ul>
        <li>Fetch and display a list of Star Wars characters</li>
        <li>View details about each character, including their home planet and species</li>
        <li>Add and remove characters to/from your favorites list</li>
        <li>View favorite characters count by gender</li>
        <li>Reset favorite characters list</li>
    </ul>

    <h2>Installation</h2>
    <p>Clone this repository and navigate to the project folder:</p>
    <pre><code>git clone https://github.com/yourusername/star-wars-react-native.git

cd star-wars-react-native
</code></pre>
<p>Install dependencies:</p>
<pre><code>npm install
</code></pre>

    <h2>Running the App</h2>
    <p>To run the app on Android:</p>
    <pre><code>npm run android

</code></pre>
<p>To run the app on iOS:</p>
<pre><code>npm run ios
</code></pre>
<p><em>NOTE: You need to have the necessary Android and/or iOS development environment set up on your machine.</em></p>

    <h2>Project Structure</h2>
    <p>The app is organized into the following main folders:</p>
    <ul>
        <li><code>src</code>: Contains all the source code, including components, hooks, and Redux slices
            <ul>
                <li><code>components</code>: Contains all React Native components used in the app, organized by feature</li>
                <li><code>redux</code>: Contains Redux store configuration and slices</li>
                <li><code>utils</code>: Contains utility functions for fetching data from the API</li>
            </ul>
        </li>
        <li><code>assets</code>: Contains images and other static assets used in the app</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li>React Native</li>
        <li>Redux Toolkit</li>
        <li>styled-components</li>
        <li>Star Wars API (SWAPI)</li>
    </ul>

    <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>

</body>
