import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsModalVisible(true)}>Open</button>
      {isModalVisible ? (
        <h1>
          <Modal onClose={() => setIsModalVisible(false)}>
            <h2>Modal do app</h2>
          </Modal>
        </h1>
      ) : null}
    </div>
  );
}

export default App;
