import './WorkingWithProps.css';
/*
```Working with Props
Your task is to make the CourseGoal component reusable / configurable. It should accept a "title" and a "description" input and output the received data between the <h2> (title) and <p> (description) tags.

The App component should then render at least two instances of the CourseGoal component.

One of those CourseGoal components must receive a title of "Learn React" and a description of "In-depth". The other titles and descriptions are entirely up to you.

The finished app could look like this:

```
*/

export function CourseGoal({title, description}) {
    return (
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }
  
  function WorkingWithProps() {
    return (
      <div id="app" data-testid="app">
        <h1>Time to Practice</h1>
        <p>One course, many goals! 🎯</p>
        <ul>
          {/* OUTPUT AT LEAST TWO CourseGoal components here */}
          <CourseGoal
              title = "Learn React"
              description = "In-depth"
          />
          <CourseGoal
              title = "Practice"
              description = "Practice working with React, compnents etc."
          />
          {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
        </ul>
      </div>
    );
  }
  
  export default WorkingWithProps;