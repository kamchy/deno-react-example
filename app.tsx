import { React, ReactDOM } from "./deps.ts";

type DenoConfig = {
  stroke: string;
  fill: string;
  width: number;
  height: number;
};
const Deno = (dc: DenoConfig) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="10"
        y="10"
        height={dc.height}
        width={dc.width}
        style={{ fill: dc.fill, stroke: dc.stroke }}
      />
    </svg>
  );
};

type InputType = string|number
interface Prop<T extends InputType> {
  name: string;
  inputType: string;
  val: T
  onPropUpdated: (val: T) => void;
}


function InputElem<T extends InputType>(p: Prop<T>) {
  const [val, setVal] = React.useState(p.val)
  const update = (e:any) => {
    const val = e.target.value
    setVal(val)
    p.onPropUpdated(val)
  }
  return (
    <div>
      <label>{p.name}</label>
        <input type={p.inputType} onChange={update} value={val}></input>
    <label>{val}</label>
        </div>
  )
}

const StrIE = (p: Prop<string>) => InputElem(p)
const NumIE = (p: Prop<number>) => InputElem(p)

const StringInputElemOld = (p: Prop<string>) => {
  const [val, setVal] = React.useState(p.val)
  const update = (e:any) => {
    const val = e.target.value
    setVal(val)
  }
  return (
    <div>
      <label>{p.name}</label>
        <input type={p.inputType} onInput={update} onChange={()=>p.onPropUpdated(val)} value={val}></input>
    <label>{val}</label>
        </div>
  );
};

type AppData = {
  title: string;
  deno: DenoConfig;
};

const App = (ad: AppData) => {
  const [ds, setDs] = React.useState(ad.deno);

  const onDenoDataChange = (news: string) => {
    console.log("onDenoDataChange called with ", news);
  };

  const wi: Prop<number> = {
    name: "Width",
    inputType: "number",
    val: ds.width,
    onPropUpdated: (nv) => setDs({...ds, width: nv}),
  };

  const hi: Prop<number> = {
    name: "Height",
    inputType: "number",
    val: 200,
    onPropUpdated: (nv) => setDs({...ds, height: nv}),
  };
  
  const fill: Prop<string> = {
    name: "Fill",
    inputType: "color",
    val: '#ff2233',
    onPropUpdated: (nv) => setDs({...ds, fill: nv}),
  };

  const stroke: Prop<string> = {
    name: "Stroke",
    inputType: "color",
    val: '#ff22ff',
    onPropUpdated: (nv) => setDs({...ds, stroke: nv}),
  };


  return (
    <div className="app">
      <h1>{ad.title}</h1>
      <NumIE {...wi} />
      <NumIE {...hi} />
      <StrIE {...fill} />
      <StrIE {...stroke} />
      <Deno {...ds} />
    </div>
  );
};

const appData: AppData = {
  title: "Hello",
  deno: {
    width: 100,
    height: 100,
    fill: "#ffaabb",
    stroke: "#991100",
  },
};

export default function renderApp(rootElem: HTMLElement) {
  ReactDOM.render(<App {...appData} />, rootElem);
}
