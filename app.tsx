import { React, ReactDOM } from "./deps.ts";


type DenoConfig = {
  stroke: string,
  fill: string,
  width: number, 
  height: number
}

type AppData = {
  title: string,
  deno: DenoConfig
}

const Deno = ({width, height, stroke, fill}: DenoConfig) => {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect x="10" y="10" height={height} width={width}
          style={{fill, stroke}}/>
    </svg>

  )
}
const App = ({title, deno}: AppData) => {
  return (
    <div className="app">
      <h1>{title}</h1>
      <Deno {...deno} />

    </div>
  );
}

const appData = {title: "Hello", deno: {width: 100, height: 100, fill: '#ffaabb', stroke: '#66aabb'}}

export default function renderApp(rootElem: HTMLElement) {
    ReactDOM.render(<App {...appData}/>, rootElem);
}


