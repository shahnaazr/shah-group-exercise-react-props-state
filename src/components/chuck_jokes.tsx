import Joke from "../joke";
import ChuckJoke from "./chuck_joke";

interface ChuckJokesProps {
  jokes: Array<Joke>;
}
const ChuckJokes: React.FC<ChuckJokesProps> = ({ jokes }) => {
  return (
    <ul>
      {jokes.map((joke) => (
        <ChuckJoke joke={joke.joke} key={joke.id} />
      ))}
    </ul>
  );
};

export default ChuckJokes;
