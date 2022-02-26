import PropTypes from 'prop-types'
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

Highlight.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

Highlight.defaultProps = {
  subtitle: 'Sem subtitulo'
}

export default Highlight
