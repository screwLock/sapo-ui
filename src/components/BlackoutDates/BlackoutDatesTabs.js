import { Tab, Tabs } from "@blueprintjs/core";
import React, { Component } from 'react';
import BlackoutDatesSingleDatePicker from './BlackoutDatesSingleDatePicker.js';
import BlackoutDatesRangeDatePicker from './BlackoutDatesRangeDatePicker.js';
import BlackoutDatesWeekdays from './BlackoutDatesWeekdays.js';
import 'normalize.css/normalize.css';
import "@blueprintjs/core/lib/css/blueprint.css";



class BlackoutDatesTabs extends Component {

    render(){
      return(
        <Tabs id="TabsExample"  defaultSelectedTabId="rx">
          <Tab id="ng" title="Single Date" panel={<BlackoutDatesSingleDatePicker />} />
          <Tab id="mb" title="Date Range"  panel={ <BlackoutDatesRangeDatePicker />}/>
          <Tab id="rx" title="Weekdays" panel={ <BlackoutDatesWeekdays />}/>
        </Tabs>
      );
    }
  }
  
export default BlackoutDatesTabs;

