import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const upload = () => {
    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => {
        alert("File uploaded successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("File upload failed.");
      });
  };

  return (
    <div style={styles.container}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="button" onClick={upload} style={styles.button}>
        Upload
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginTop: "50px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default FileUpload;
