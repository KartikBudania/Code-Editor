import React from 'react';
import Editor from '../components/Editor';

function App() {
  return (
      <>
          <div className='pane top-pane'>
            <Editor displayName='html'/>
            <Editor displayName='html'/>
            <Editor displayName='html'/>
          </div>
          <div className='pane'>
            <iframe
                title='output'
                sandbox='allow-scripts'
                width="100%"
                height="100%"
            />
          </div>
      </>
  );
}

export default App;
