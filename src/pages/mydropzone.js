import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const [name, setName] = useState("");
  const [valid, setValid] = useState();
  const [err,setErr]=useState()
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    if (acceptedFiles.length < 2) {
      setName(acceptedFiles[0].name);
      setValid(true);
      setErr(true)
    }
    else{
        setErr(true)
    }
    console.log("aa", acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div >
      <div
        style={{
          border: "2px solid black",
          borderRadius: 10,
          // paddingTop:'30px',
          // paddingBottom:'30px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {name ? (
          <p>{name}</p>
        ) : isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drop the edi file here to validate</p>
        )}
      </div>
      <div style={{display: "flex",justifyContent:'center',
    alignItems:'center',flexDirection:'column'}}>
        <div>
      {
          valid?<p style={{color:'green'}}> Edi File Is valid </p>:null
      }
      </div>
      <div>
      {
          err?<p style={{color:'red'}}> Edi File Is Not valid </p>:null
      }
      </div>
      </div>
    </div>
  );
}
export default MyDropzone;
