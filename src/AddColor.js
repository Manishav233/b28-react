import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("pink");
  //const colors=["teal","orange","lavender"];
  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
  const styles = { backgroundColor: color };

  return (
    <div className="add-color-form">
      {/* <input
            value={color}
            onChange={(event)=>setColor(event.target.value)
            } style={styles} placeholder="Enter a color" /> */}

      <TextField value={color}
        onChange={(event) => setColor(event.target.value)} style={styles} id="standard-basic" label="Enter a color" variant="standard" />

      {/* <button onClick={()=>setColors([...colors,color])}>Add Color</button> */}
      <Button onClick={() => setColors([...colors, color])} variant="outlined">Add Color</Button>

      {colors.map((clr, index) => <ColorBox key={index} color={clr} />

      )}

    </div>);
}
