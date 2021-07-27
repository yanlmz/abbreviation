import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Abbreviation from "./Abbreviation";
import { Tab } from "semantic-ui-react";
import Navbar from "./Navbar";
import CreateForm from "./CreateForm";

function App() {
  const panes = [
    { menuItem: "Tab 1", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ];

  const speak = () => {
    // const say = require("say");
    // // say.speak("Hello!");
    // say.speak("What's up, dog?", "Alex", 0.5);
    // let fs = require("fs");
    // let Polly = require("polly-tts");
    // let polly = new Polly();
    // let options = {
    //   text: "Hallo",
    // };
    // let fileStream = fs.createWriteStream("polly-tts.mp3");
    // polly.textToSpeech(options, (err, audioStream) => {
    //   if (err) {
    //     return console.log(err.message);
    //   }
    //   audioStream.pipe(fileStream);
    // });
    // const googleTTS = require("google-tts-api");
    // const player = require("play-sound")();
    //
    // googleTTS("Hello World", "en", 1).then((url) => {
    //   fetch(url)
    //     .then((response) => response.buffer())
    //     .then((buffer) => playWithSomething(buffer));
    // });
    const googleTTS = require("google-tts-api"); // CommonJS

    const url = googleTTS.getAudioUrl("Hello World", {
      lang: "en",
      slow: false,
      host: "https://translate.google.com",
    });
    console.log(url);
    let audio = new Audio(url);
    audio.play().then((r) => console.log(r));

    // var a = new Audio(url);
    // a.play();

    // googleTTS("Hello World", "en", 1).then((url) => player.play(url));
  };

  return (
    <div className="App">
      <h1> Abbreviation Look up</h1>
      <button onClick={speak}>say </button>
      <Navbar />
      <Switch>
        <Route path="/list">
          <Abbreviation />
        </Route>

        <Route path="/create">
          <CreateForm />
        </Route>

        <Route path="*">Abbreviation</Route>
      </Switch>
    </div>
  );
}

export default App;
