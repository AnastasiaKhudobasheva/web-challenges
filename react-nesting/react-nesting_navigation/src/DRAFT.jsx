//app


import { initialColors } from "./assets/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);
  // const [colorToEdit, setColorToEdit] = useState(null);

  const handleAddColor = (newColor2) => {
    setColors((oldColors) => [newColor2, ...oldColors]);
  };

  const handleDeleteColor = (id) => {
    setColors((oldColors) => {
      const newColors = oldColors.filter((x) => x.id != id);
      return newColors;
    });
  };

  // const handleChooseColorToEdit = (id) => {
  //   setColorToEdit(colors.find((x) => x.id === id));
  // };

  const handleEditColor = (changedColor) => {
    setColors((oldColors) => {
      return oldColors.map((x) =>
        x.id === changedColor.id ? changedColor : x
      );
    });
    // setColorToEdit(null);
  };

  return (
    <main>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />

      {colors.length === 0 ? (
        <p>No colors yet — add some!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
            onSubmitColor={handleEditColor}
          />
        ))
      )}

      {/* {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          onSubmitColor={handleEditColor} // pass updating function
          onDeleteColor={handleDeleteColor} // pass deleting function
        />
      ))} */}
      {/* {colorToEdit ? (
        <ColorForm
          onSubmitColor={handleEditColor}
          initialData={colorToEdit}
          key={colorToEdit.id}
          isEditing
        />
      ) :  */}
      {/* // Show a message if colors array is empty */}
      {/* {colors.length === 0 ? (
        <p className="empty-message">No colors yet — add some!</p>
      ) : (
        colors.map((color) => {
          return (
            <Color
              key={color.id}
              color={color}
              onDeleteColor={handleDeleteColor}
            />
          );
        })
      )}
      // Pass it to <Color /> */}
    </main>
  );
}

export default App;

// Workflow:

// Issue 2:

// colors holds current theme color
// handleAddColor prepends a new color to the array
// <ColorForm onSubmitColor={...}/> passes this function down to the form (as a prop)




//color

import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDeleteColor, onSubmitColor }) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteConfirmation = () => {
    setIsConfirmingDelete(true); // Show confirmation
  };

  // Cancel deletion
  const handleCancelDelete = () => {
    setIsConfirmingDelete(false); // Hide confirmation
  };

  // Proceed with the deletion
  const handleConfirmDelete = () => {
    onDeleteColor(color.id);
    setIsConfirmingDelete(false); // Hide confirmation
  };

  // enable editing when the edit button is clicked
  const handleEdit = () => {
    setIsEditing(true);
    // Set isEditing to true to show the form
  };

  // cancel editing when the cancel button is clicked
  const handleCancel = () => {
    setIsEditing(false); // set isEditing to false so it hides the form
  };

  // color update and send it to the parent component
  const handleUpdateColor = (updatedColor) => {
    onSubmitColor(updatedColor);
    setIsEditing(false);
    // close the edit form after updating the color
  };

  return (
    <div
      className="color-card"
      style={{ background: color.hex, color: color.contrastText }}
    >
      {isEditing ? (
        // ========== EDIT MODE ==========
        <>
          <ColorForm
            onSubmitColor={(updatedColor) => {
              handleUpdateColor(updatedColor);
            }}
            initialData={color}
            isEditing={true}
          />
          <button onClick={handleCancel}>Cancel Edit</button>
        </>
      ) : (
        // ========== VIEW MODE ==========
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>

          {isConfirmingDelete ? (
            <div>
              <div className="delete-confirmation">Delete color?</div>
              <button onClick={handleConfirmDelete}>Yes</button>
              <button onClick={handleCancelDelete}>Cancel</button>
            </div>
          ) : (
            <button onClick={handleDeleteConfirmation}>Delete</button>
          )}

          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
  //   <div
  //     className="color-card"
  //     style={{ background: color.hex, color: color.contrastText }}
  //   >
  //     {isEditing ? (
  //       <>
  //         {/* Show the edit form */}
  //         <ColorForm
  //           onSubmitColor={(updatedColor) => {
  //             onSubmitColor(updatedColor);
  //             setIsEditing(false);
  //           }}
  //           initialData={color}
  //           isEditing
  //         />
  //         <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
  //       </>
  //     ) : (
  //       <>
  //         {/* Normal view mode */}
  //         <h3>{color.hex}</h3>
  //         <h4>{color.role}</h4>
  //         <p>contrast: {color.contrastText}</p>

  //         <button onClick={() => setIsEditing(true)}>Edit</button>
  //         <button onClick={() => onDeleteColor(color.id)}>Delete</button>
  //       </>
  //     )}
  //   </div>
  // );

  // <div
  //   className="color-card"
  //   style={{
  //     background: color.hex,
  //     color: color.contrastText,
  //   }}
  // >
  //   <h3 className="color-card-headline">{color.hex}</h3>
  //   <h4>{color.role}</h4>
  //   <p>contrast: {color.contrastText}</p>
  //   {isConfirmingDelete ? (
  //     <div>
  //       <div className="delete-confirmation">Delete color?</div>
  //       <button onClick={handleConfirmDelete}>Yes</button>
  //       <button onClick={handleCancelDelete}>Cancel</button>
  //     </div>
  //   ) : (
  //     <button onClick={handleDeleteConfirmation}>Delete</button>
  //   )}
  //   {isEditing ? (
  //     <>
  //       <ColorForm
  //         onSubmitColor={handleUpdate}
  //         initialData={color}
  //         isEditing={true}
  //       />
  //       <button onClick={() => setIsEditing(false)}>Cancel</button>
  //     </>
  //   ) : (
  //     <>
  //       <h3>{color.hex}</h3>
  //       <h4>{color.role}</h4>
  //       <p>contrast: {color.contrastText}</p>

  //       <button onClick={() => setIsEditing(true)}>Edit</button>
  //       <button onClick={() => onDeleteColor(color.id)}>Delete</button>
  //     </>
  //   )}
  //   {/*
  //   <button onClick={handleEdit}>Edit</button>
  //   {/* Show the form only when isEditing is true */}
  //   {/* {isEditing && (
  //     <div className="edit-form">
  //       <ColorForm
  //         onSubmitColor={handleUpdateColor} // pass handleUpdateColor to submit updated color
  //         initialRole={color.role} // pass the color's current role
  //         initialHex={color.hex} // pass the color's current hex
  //         initialContrastText={color.contrastText} // pass the color's current contrastText
  //         id={color.id} // pass the color's id for updates
  //       />
  //       <button onClick={handleCancel}>Cancel</button> {/* cancel edit */}
  //     </div>
  //   )} */
  //   {/* <button onClick={() => onEditColor(color.id)}>Edit</button> */}
  //   {/* <button onClick={() => onDeleteColor(color.id)}>Delete Color</button> */}
  // </div>
  // );
}
