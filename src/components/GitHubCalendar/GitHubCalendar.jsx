import GitHubCalendar from "react-github-calendar";

export default function GitHubStats() {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h2>My GitHub Contributions</h2>
      <GitHubCalendar username="kimchicecream" />
    </div>
  );
}
