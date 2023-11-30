import Joke from "../joke";
import ChuckJoke from "./chuck_joke";

interface ChuckJokesProps {
  jokes: Array<Joke>;
  filteredJokes: number;
}
const ChuckJokesFiltered: React.FC<ChuckJokesProps> = ({
  jokes,
  filteredJokes,
}) => {
  return (
    <ul>
      {jokes
        .filter((joke) => joke.id === filteredJokes)
        .map((joke) => (
          <ChuckJoke joke={joke.joke} key={joke.id} />
        ))}
    </ul>
  );
};

export default ChuckJokesFiltered;
