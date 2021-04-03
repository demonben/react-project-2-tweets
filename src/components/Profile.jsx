import React from "react";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";

function Profile(props) {
  const storage = firebase.storage();

  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
      // console.log(imageAsUrl);

  const [currentUser, setCurrentUser] = useState("Dima");
  // console.log(imageAsFile);

  const changeProfileImage = (image, user) => {
    setImageAsFile((imageFile) => image);
    
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    
    // async magic goes here...

    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
      uploadTask.on('state_changed', 
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(imageAsFile.name).getDownloadURL()
         .then(fireBaseUrl => {
           setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
          })
        })
       
           props.userImageChanger(imageAsUrl);
         
  };

 

  return (
    <div className="profileContainer">
      <img
        id="image"
        src={imageAsUrl.imgUrl}
        alt="image tag"
        width="200"
        height="200"
      />
      <form onSubmit={handleFireBaseUpload}>
        <p>
          <input
            id="image-upload"
            type="file"
            className=""
            onChange={(event) =>
              changeProfileImage(event.target.files[0], currentUser)
            }
          />
          <button>upload to firebase</button>
        </p>
      </form>
    </div>
  );
}

export default Profile;
// class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userName: "",
//     };
//   }
//   changUser(event) {
//     event.preventDefault();

//     this.setState({ userName: event });
//   }
//   putUserNameInLocalStorage() {
//     localStorage.setItem("username", this.state.userName);
//   }
//   changeProfileImage(){

//   }
//   render() {
//     return (
//       <>
//         <div className="profileContainer">
//           <h2 className="headerProfile">Profile</h2>
//           <p className="profile">USER NAME</p>
//           <form
//             onSubmit={(event) => {
//               this.changUser(event);
//             }}
//           >
//             <label htmlFor="text">
//               <textarea
//                 className="inputUser"
//                 type="text"
//                 name="text"
//                 id="text"
//                 onChange={(event) =>
//                   this.setState({ userName: event.target.value })
//                 }
//               ></textarea>
//               <p>
//                 <button
//                   className=" btn btn-primary"
//                   onClick={() => this.putUserNameInLocalStorage()}
//                 >
//                   Save
//                 </button>
//               </p>
//             </label>
//             <p>
//               <img
//                 id="image"
//                 src="img_girl.jpg"
//                 alt="Profile Image"
//                 width="200"
//                 height="200"
//               />
//               <input
//                 id="image-upload"
//                 type="file"
//                 className=""
// onChange={(event)=> changeProfileImage(event.target.files[0], currentUser)}
//               />
//             </p>
//           </form>
//         </div>
//       </>
//     );
//   }
// }
