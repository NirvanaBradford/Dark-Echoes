import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

function App() {
  // TODO
  const [episode, setepisode] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  console.log(selectedEpisode);

  //details about the selected episode
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Please select an episode </h2>
        </section>
      );
    }
    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>Description: {selectedEpisode.description}</p>
        <button>Watch Episode</button>
      </section>
    );
  }

  // list of episode names
  function EpisodeList() {
    return (
      <section className="list">
        <h2>Episodes</h2>
        <ol>
          {episode.map((epi) => {
            console.log("item", epi.id);
            return (
              <li
                onClick={() => setSelectedEpisode(epi)}
                className={selectedEpisode?.id === epi.id ? "selected" : ""}
                key={epi.id}
              >
                {epi.title}
              </li>
            );
          })}
        </ol>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
export default App;
