import './style.css'

function Highlight({ title, subtitle }) {
  return(
    <div className="highlight-wrapper">
      <div className="text-content">
        <h3 className="highlight-title">{ title }</h3>
        <h4 className="highlight-subtitle">{ subtitle }</h4>
      </div>
      <div className="fake-img"></div>
    </div>
  )
}

export default Highlight
