import { React, ReactDOM } from "./deps.ts";
import {DenoConfig, InputType, Prop} from "./types.ts";
import {Deno} from "./deno.tsx";
function InputElem<T extends InputType>(p: Prop<T>) {
  const [val, setVal] = React.useState(p.val)
  const update = (e:any) => {
    const val = e.target.value
    setVal(val)
    p.onPropUpdated(val)
  }
  return (
    <form className="row g-3">
      <div className="col-2">
      <label className="form-label" htmlFor="input-{p.name}">{p.name}</label>
        </div>
          <div className="col">
            { p.range !== undefined  ?
        <input className="form-control" id="input-{p.name}" type={p.inputType} min={p.range.min} max={p.range.max} step={p.range.step} onChange={update} value={val}></input>
             :
        <input className="form-control" id="input-{p.name}" type={p.inputType} onChange={update} value={val}></input>
          }
          </div>
            <div className="col">
              {val}
            </div>
        </form>
  )

}
const StrIE = (p: Prop<string>) => InputElem(p)
const NumIE = (p: Prop<number>) => InputElem(p)


type AppData = {
  title: string;
  deno: DenoConfig;
};

const appData: AppData = {
  title: "Rectangle",
  deno: {
    width: 100,
    height: 100,
    fill: "#AA1660",
    stroke: "#FF2071",
  },
};
const App = (ad: AppData) => {
  const [ds, setDs] = React.useState(ad.deno);

  const wi: Prop<number> = {
    name: "Width",
    inputType: "range",
    val: ds.width,
    range: {min: 1, max: 500, step: 10},
    onPropUpdated: (nv) => setDs({...ds, width: nv}),
  };

  const hi: Prop<number> = {
    name: "Height",
    inputType: "range",
    val: ds.height,
    range: {min: 1, max: 500, step: 10},
    onPropUpdated: (nv) => setDs({...ds, height: nv}),
  };
  
  const fill: Prop<string> = {
    name: "Fill",
    inputType: "color",
    val: ds.fill,
    onPropUpdated: (nv) => setDs({...ds, fill: nv}),
  };

  const stroke: Prop<string> = {
    name: "Stroke",
    inputType: "color",
    val: ds.stroke,
    onPropUpdated: (nv) => setDs({...ds, stroke: nv}),
  };


  return (
    <div className="app">
      <h1>{ad.title}</h1>
      <div className="row">
        <div className="col">
          <NumIE {...wi} />
          <NumIE {...hi} />
          <StrIE {...fill} />
          <StrIE {...stroke} />
        </div>
        <div className="col">
          <Deno {...ds} />
        </div>
      </div>
    </div>
  );
};


export default function renderApp(rootElem: HTMLElement) {
  ReactDOM.render(<App {...appData} />, rootElem);
}
