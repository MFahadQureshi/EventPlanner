import {
  auth,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  addDoc,
  collection,
  db,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../../utils/utils.js";

const signup_btn = document.getElementById("signup_form");
const submit_btn = document.getElementById("submit_btn");

signup_btn.addEventListener("submit", function (e) {
  e.preventDefault();

  const img = e.target[0].files[0];
  const email = e.target[1].value;
  const password = e.target[2].value;
  const firstName = e.target[4].value;
  const lastName = e.target[5].value;
  const phone = e.target[6].value;
  const company = e.target[7].value;

  if (!img || !email || !password || !firstName || !lastName || !phone || !company) {
    alert("Please fill out all required fields and select an image.");
    return;
  }

  const userInfo = {
    email,
    password,
    firstName,
    lastName,
    phone,
    company,
  };

  // Create account
  submit_btn.disabled = true;
  submit_btn.innerText = "Loading...";
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user=>", user.uid);

      // Upload user image
      const userRef = ref(storage, `user/${user.uid}/${img.name}`);
      return uploadBytes(userRef, img).then(() => user);
    })
    .then((user) => {
      console.log("User image uploaded");

      // Get URL of the image we just uploaded
      const userRef = ref(storage, `user/${user.uid}/${img.name}`);
      return getDownloadURL(userRef).then((url) => {
        console.log("Image URL:", url);
        userInfo.img = url;

        // Add user document to Firestore collection
        const usersCollectionRef = collection(db, "users");
        return addDoc(usersCollectionRef, { ...userInfo, uid: user.uid });
      });
    })
    .then(() => {
      console.log("User data added to Firestore");
      window.location.href = "/";
      submit_btn.disabled = false;
      submit_btn.innerText = "Submit";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(error.message);
      submit_btn.disabled = false;
      submit_btn.innerText = "Submit";
    });

  console.log(userInfo);
});
