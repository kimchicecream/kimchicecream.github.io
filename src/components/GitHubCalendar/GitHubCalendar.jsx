import GitHubCalendar from "react-github-calendar";
import './GitHubCalendar.css';

function GitHubStats() {
  return (
    <GitHubCalendar
        username="kimchicecream"
        theme={myTheme}
        colorScheme="dark"
    />
  );
}

export default GitHubStats;
