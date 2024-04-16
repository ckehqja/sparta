 // Firebase SDK 라이브러리 가져오기
  import {initializeApp} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  getFirestore,
  query,
  where,
  orderBy,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyBH4iNMNruN1pUeFb_qiY8-usj_peK2alE",
  authDomain: "miniproject-739f0.firebaseapp.com",
  projectId: "miniproject-739f0",
  storageBucket: "miniproject-739f0.appspot.com",
  messagingSenderId: "895760567186",
  appId: "1:895760567186:web:b24276ccc332ba76654f4b"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);




  // 모달 열기
  const querySnapshot = await getDocs(collection(db, "postProfile"));
  querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

  // 등록 버튼 클릭 이벤트
  // 여기에 등록할 때 실행할 동작을 추가합니다.
  // 예를 들어, 입력된 정보를 가져와서 처리하는 함수를 호출할 수 있습니다.
  registerBtn.addEventListener("click", async function (){
  console.log("등록버튼 눌림");
  const animalUrlInput = document.getElementById("animalUrl").value;
  const animalNameInput = document.getElementById("animalName").value;
  const mbtiInput = document.getElementById("mbti").value;
  const advantageInput = document.getElementById("advantage").value;
  const collaborationInput = document.getElementById("collaboration").value;
  const blogUrlInput = document.getElementById("blogUrl").value;

  // Firestore에 데이터 추가
  try {
  const docRef = await addDoc(collection(db, "postProfile"), {
  animalUrl: animalUrlInput,
  animalName: animalNameInput,
  mbti: mbtiInput,
  advantage: advantageInput,
  collaboration: collaborationInput,
  blogUrl: blogUrlInput
});
  console.log("Document written with ID: ", docRef.id);
  // 성공적으로 등록되었음을 사용자에게 알림
  alert("등록되었습니다!");
  document.getElementById("animalForm").reset();
} catch (error) {
  console.error("Error adding document: ", error);
  // 오류가 발생했을 때 사용자에게 알림
  alert("등록 중 오류가 발생했습니다. 다시 시도해주세요.");
}
  closeModal();


});
