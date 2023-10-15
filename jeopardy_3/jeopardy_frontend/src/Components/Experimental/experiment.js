import React, { useEffect } from 'react';

export default function Exp() {
  // x = 5;
  useEffect(() => {
    const titleInput = document.getElementById('title');
    const setButton = document.getElementById('btn');
    setButton.addEventListener('click', () => {
      const title = titleInput.value;
      window.electronAPI.setTitle(title);
    });
  }, []);

  return (
    <div>
      <p>stuff goes here</p>
    </div>
  );
}

// import React from 'react';

// function Exp() {
//   const setTitle = (title) => {
//     if (window.electronAPI) {
//       window.electronAPI.setTitle(title);
//     } else {
//       console.log('electronAPI is not available');
//     }
//   };

//   return (
//     <div>
//       <input type="text" id="title" />
//       <button onClick={() => setTitle(document.getElementById('title').value)}>
//         Set Title
//       </button>
//     </div>
//   );
// }

// export default Exp;
