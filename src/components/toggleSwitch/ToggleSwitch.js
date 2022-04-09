import './index.css';

const ToggleSwitch = (props) => {

  return (
    <div className="app light">
    <label className="switch">
        <input id="toggleSwitch" type="checkbox" onClick={props.theme} />
        <span className="slider round"></span>
    </label>
    </div>
  )
}

export default ToggleSwitch