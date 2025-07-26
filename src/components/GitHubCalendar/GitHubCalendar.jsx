import GitHubCalendar from "react-github-calendar";
import './GitHubCalendar.css';

const myTheme = {
  light: [
    "#f0f0f0",
    "#c0e4ff",
    "#6eb5ff",
    "#357edd",
    "#1b4ba8"
  ],
  dark: [
    "rgb(23 20 36)",
    "rgb(50 45 84)",
    "rgb(79 72 137)",
    "rgb(109 101 194)",
    "rgb(140 132 255)"
  ],
};

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
