import '../App.css'
import CoreConceptProps from './CoreConceptProps'
import {CORE_CONCEPTS} from './data.js'
import SectionWrapper from './SectionWrapper.js'

function CoreConceptImpl() {
  return (
    <>
        <SectionWrapper title= "Components" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((content) => (
                  <CoreConceptProps key = {content.title} cls="App-logo1" {...content} />
                ))}
            </ul>
        </SectionWrapper>
    </>
  )
}

export default CoreConceptImpl
