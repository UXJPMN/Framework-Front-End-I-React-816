import './style.css'
import Highlight from './highlight'

function HighlightList() {
  const highlightData = [
    {
      title: 'Finalmente estou aprendendo props',
      subtitle: 'Isso vai facilitar muito a minha vida'
    },
    {
      title: 'Mais um exemplo React',
      subtitle: 'Fixar é importante'
    },
    {
      title: 'Um título que faltou criatividade',
      subtitle: 'Se faltou no título não vai ser no subtítulo que vai ter'
    },
    {
      title: 'Só um exemplo',
      subtitle: 'Realmente só um exemplo'
    }
  ]

  return(
    <div className='list-wrapper'>
      <Highlight
        title={ highlightData[0].title }
        subtitle={ highlightData[0].subtitle }
      />
      <Highlight
        title={ highlightData[1].title }
        subtitle={ highlightData[1].subtitle }
      />
      <Highlight
        title={ highlightData[2].title }
        subtitle={ highlightData[2].subtitle }
      />
      <Highlight
        title={ highlightData[3].title }
      />
    </div>
  )
}

export default HighlightList
