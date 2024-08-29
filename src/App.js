
//项目的根目录
// App -> index.js -> public/index.html(root)

import { RouterProvider } from "react-router-dom";
import router from './router/index'

function App() {

  return (
    <>
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
