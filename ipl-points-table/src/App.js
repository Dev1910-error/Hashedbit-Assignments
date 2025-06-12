import React from "react";
import iplData from "./ipldata"; // match the exact file name

function App() {
  const sortedData = [...iplData].sort((a, b) => a.NRR - b.NRR);

  return (
    <div style={{ padding: "20px" }}>
      <h2><strong>IPL 2022 Points Table</strong></h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((team) => (
            <tr key={team.Team}>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

