import { React, ReactDOM } from "./deps.ts";
import {DenoConfig, ValueType, Prop} from "./types.ts";
import {Deno} from "./deno.tsx";

function InputElem<T extends ValueType>(p: Prop<T>) {
  const [val, setVal] = React.useState(p.val)
  const update = (e:any) => {
    const val = e.target.value
    setVal(val)
    p.onPropUpdated(val)
  }
  return (
    <div className="row mb-2">
      <div className="col-3">
        <label className="form-label text-end" htmlFor="input-{p.name}">{p.name}</label>
       </div>
        <div className="col">
          { p.range !== undefined  ?
          <input className="form-control" 
            id="input-{p.name}" 
            type={p.inputType} 
            min={p.range.min} 
            max={p.range.max} 
            step={p.range.step} 
            onChange={update} 
            value={val}>
          </input>
             :
          <input 
            className="form-control {p.inputType === 'color' ? form-control-color : ''}"
            id="input-{p.name}"
            type={p.inputType}
            onChange={update}
            value={val}>
          </input>
          }
          </div>
          <div className="col-2">
            {val}
          </div>
        </div>
  )
}

type AppData = {
  title: string;
  deno: DenoConfig;
};

const appData: AppData = {
  title: "Little Deno",
  deno: {
    width: 500,
    height: 300,
    fill: "#FF2071",
    stroke: "#AA1660",
  },
};

const App = (ad: AppData) => {
  const [ds, setDs] = React.useState(ad.deno);

  return (
    <div className="app">
      <h1>{ad.title}</h1>
      <div className="row">
        <form className="col">
          <InputElem 
              name="Width"
              inputType= "range"
              val= {ds.width}
              range={{min: 1, max: 500, step: 10}}
              onPropUpdated={(nv) => setDs({...ds, width: nv})} />
            <InputElem  
              name="Height"
              inputType= "range"
              val= {ds.height}
              range={{min: 1, max: 500, step: 10}}
              onPropUpdated={(nv) => setDs({...ds, height: nv})} />

            <InputElem
              name="Fill" 
              inputType="color" 
              val={ds.fill} 
              onPropUpdated={(nv) => setDs({...ds, fill: nv})} />
            <InputElem 
              name="Stroke" 
              inputType="color" 
              val={ds.stroke} 
              onPropUpdated={(nv) => setDs({...ds, stroke: nv})} />
        </form>
        <div className="col">
            <Deno {...ds}/>
        </div>
      </div>
    </div>
  );
};


export default function renderApp(rootElem: HTMLElement) {
  ReactDOM.render(<App {...appData} />, rootElem);
}
