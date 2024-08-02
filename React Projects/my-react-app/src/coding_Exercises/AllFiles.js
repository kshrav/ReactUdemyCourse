import React from 'react'
import BuildingComponent from './BuildingComponent';
import ComponentComposition from './ComponentComposition';
import ConditionalContent from './ConditionalContent';
import ConfiguringEventHandlers from './ConfiguringEventHandlers';
import DynamicListContent from './DynamicListContent';
import DynamicStyling from './DynamicStyling';
import OutputtingDynamicContent from './OutputtingDynamicContent';
import ReactingToEvents from './ReactingToEvents';
import {transformToObjects} from './WorkingWithArrays';
import {combine} from './WorkingWithFunctions';
import WorkingWithProps from './WorkingWithProps';
import WorkingWithState from './WorkingWithState';


function AllFiles() {
    let result = combine(10, 5, 2);
    console.log(result);
    const aar = [11,22,3];
    console.log(transformToObjects(aar));
  return (
    <div>
        <BuildingComponent/>
        <ComponentComposition/>
        <ConditionalContent/>
        <ConfiguringEventHandlers/>
        <DynamicListContent/>
        <DynamicStyling/>
        <OutputtingDynamicContent/>
        <ReactingToEvents/>
        <WorkingWithProps/>
        <WorkingWithState/>
        {/* {transformToObjects(aar)}
        {result} */}


    </div>
  )
}

export default AllFiles
