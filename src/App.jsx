import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Button from "./compents/button";
const gogo = "Hafiz M. Hussin Lodhi";
const img =
  "https://tse3.mm.bing.net/th/id/OIP.AQKjORdw8sgum4ZN4GZD1AHaHa?pid=Api&h=220&P=0";

function App() {
  // const [count, setCount] = useState(0)
  // const logedin = false;
  // const products = [
  //   { name: "hussain", key: 1 },
  //   { name: "hasan", key: 2 },
  //   { name: "danish", key: 3 },
  // ];

  // 🔶use State movs tabs
  // const users = [
  //   {
  //     img: "https://cdn.pixabay.com/photo/2024/03/15/19/51/ai-generated-8635685_1280.png",
  //     name: "Hafiz M. Husain Lodhi👦",
  //     description:
  //       "About Me: I am a web developer who enjoys building modern and responsive web applications. I work with HTML, CSS, JavaScript, React, Node.js, and MongoDB. I also use Git, GitHub, Postman, and Figma to manage projects and collaborate with teams. I enjoy solving problems through code and continuously learning new technologies. My goal is to create efficient, user-friendly applications that make a positive impact.",
  //   },

  //   {
  //     img: "https://i.pinimg.com/originals/24/6e/4b/246e4b57655ad104255b908bf7378bb7.jpg",
  //     name: "Usama The Great😊",
  //     description:
  //       "About Me: I am a professional working in the gold and jewelry business. I handle valuable products, manage customer interactions, and track market trends. I focus on honesty, trust, and customer satisfaction in every transaction. I manage daily shop activities and ensure high-quality service. My goal is to grow my expertise and build strong, lasting relationships with clients in the jewelry industry.",
  //   },

  //   {
  //     img: "https://www.fabmood.com/wp-content/uploads/2024/10/Cool_haircut_for_teen_boy_-1.jpg",
  //     name: "Meelad Attari👦",
  //     description:
  //       "About Me: I am a creative graphic designer who enjoys turning ideas into attractive visual designs. I work with tools like Adobe Photoshop, Illustrator, and Figma to create logos, social media posts, and branding materials. My focus is on clean design, creativity, and clear communication through visuals. I like learning new design trends and improving my skills every day. My goal is to build strong visual identities for brands and businesses.",
  //   },

  //   {
  //     img: "https://img.freepik.com/premium-photo/cartoon-character-young-boy_1057389-25145.jpg",
  //     name: "Hafiz M. Hasan Lodhi😄",
  //     description:
  //       "About Me: I am a mobile application developer who enjoys creating useful apps for everyday users. I work with React Native, modern JavaScript frameworks, and API integration to build responsive apps. I focus on performance, clean code, and smooth user experience. I enjoy solving real-world problems through technology. My goal is to design innovative applications that people find helpful and engaging.",
  //   },

  //   {
  //     img: "https://media.craiyon.com/2025-04-24/7VO5thgOQuCfgKaqupThMw.webp",
  //     name: "Talha Moshin😉",
  //     description:
  //       "About Me: I am a digital marketing specialist who works to promote businesses online and grow their audience. I handle social media, SEO optimization, and advertising strategies to increase visibility. I enjoy analyzing data and improving marketing campaigns. My focus is on building strong brand presence and achieving measurable results. My goal is to help businesses connect with customers and expand their reach effectively.",
  //   },
  // ];

  //   const [index, setIndex] = useState(0);

  // const [userName, setImg] = useState(
  //   <img
  //     style={{ height: "100px", width: "100px " }}
  //     src="https://cdn.pixabay.com/photo/2024/03/15/19/51/ai-generated-8635685_1280.png"
  //     alt=""
  //   />,
  // );
  // const [button, buttonName] = useState("Update user");
  // const [handing, handingSet] = useState("Hafiz M. Husain Lodhi👦");
  // const [aboutMe, aboutMeSet] = useState(
  //   " About Me** I am a passionate web developer with strong skills in modern web technologies. I have hands-on experience with **HTML, CSS, JavaScript, Bootstrap, React, Node.js, and MongoDB**, allowing me to build responsive and full-stack web applications. I also work with development and collaboration tools such as **Git, GitHub, Postman, and Figma**, which help me manage code, test APIs, and design user-friendly interfaces. Currently, I am working at a **bootcamp**, where I contribute to development tasks and continuously improve my technical skills. I enjoy learning new technologies, solving real-world problems through code, and building efficient, scalable web applications.My goal is to grow as a **full-stack developer** and create impactful digital solutions while .",
  // );
  // useState(["hafiz M. Hussain Lodhi"]);
  // function handler() {
  //   setImg(
  //     <img
  //       style={{ height: "100px", width: "100px " }}
  //       src="https://cgfaces.com/collection/preview/008f12c3-1a54-4e30-9766-1b6791f5d590.jpg"
  //       alt=""
  //     />,
  //   );
  //   buttonName("Update Data Complete");
  //   handingSet("Usama The Great😊");
  //   aboutMeSet(
  //     "**About Me** I am a dedicated professional working in the gold and jewelry business. I have practical experience in handling gold products, understanding market trends, and providing quality service to customers. My focus is always on maintaining trust, honesty, and customer satisfaction in every transaction. I manage daily operations at the shop, including dealing with customers, showcasing jewelry designs, and ensuring the quality and authenticity of gold products. I believe in building long-term relationships with customers through reliability and excellent service, while continuously learning more about the jewelry industry and market trends.",
  //   );
  // }

  // 🔶conter App
  // const [number, numberSet] = useState(0);
  // function increase() {
  //   numberSet(number + 1);
  // }
  // function decrease() {
  //   if (number > 0) {
  //     numberSet(number - 1);
  //   }
  // }

  // function increaseBtn() {
  //   let num = index + 1;
  //   if (num >= users.length) {
  //     num = 0;
  //   }
  //   setIndex(num);
  // }
  // function decreaseBtn() {
  //   let num = index - 1;
  //   if (num < 0) {
  //     num = users.length - 1;
  //   }
  //   setIndex(num);
  // }

  // 🔶 TODO : TASK
  const [inpValue, setInpValue] = useState("");
  const [task, setTask] = useState([]);

  function add() {
    setTask([...task, inpValue]);
    setInpValue(" ");
  }

  function edit(index) {
    const editTxt = prompt("Please edit your text!");
    if (!editTxt) return;
    const updateData = [...task];
    updateData[index] = editTxt;
    setTask(updateData);
  }

  function del(index) {
    const deleteData = [...task];
    deleteData.splice(index, 1);
    setTask(deleteData);
  }
  // const inpIndex = document.getElementById("inpIndex")
  // const addBtn = document.getElementById("addBtn")
  // addBtn.addEventListener("click", () =>{
  //   console.log(inpIndex.value);
  // })

  return (
    <>
      {/* 🔶TODO: APP */}
      <h2>TODO APPLICATION</h2>
      <div className="input-wrapper">
        <input
          type="text"
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
        />

        <button  className="add-btn"  onClick={add}>Add</button>
      </div>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
               <span className="todo-text">{item}</span>
            <button className="edit-btn" key={index} onClick={() => edit(index)}>
              Edit
            </button>
            <button className="delete-btn" key={index} onClick={() => del(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/*🔶conter app */}
      {/* <h1>Conter App</h1>
      <h1>{number}</h1> */}
      {/* <button onClick={() => numberSet(number + 1)}>increase</button>
      <button onClick={() => numberSet(number - 1)}>decrease</button> */}
      {/* <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Increase</button> */}
      {/*🔶 useState work movs tabs */}

      {/* <div className="container">
        <h1 className="title">React First Project </h1>

        <div className="card">
          <img className="profileImg" src={users[index].img} alt="" />

          <h2 className="name">{users[index].name}</h2>

          <p className="desc">{users[index].description}</p>

          <div className="btnBox">
            <button className="btn" onClick={decreaseBtn}>
              <i className="fa-solid fa-angle-left"></i>
            </button>

            <button className="btn" onClick={increaseBtn}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div> */}

      {/* <h2>{userName}</h2>
      <h2>{handing}</h2>
      <h4>{aboutMe}</h4>
      <button onClick={handler}>{button}</button> */}
      {/* components work */}
      {/* <h1>MY First Project in react</h1>
      <Button  label="About Page"/>
      <Button color= "red" label="Read Page"/>
      <Button color= "orange" label="Chat Page"/>
      <Button color= "blue" label="New Page" /> */}
      {/* first work */}
      {/* <img src={img} alt="Hedy Lamarr" className="photo" />
      <ul>
        <li>{gogo}</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>

        <ul>
          {products.map((data) => {
            <li key={data.key}>{data.name}</li>;
          })}
        </ul>
      
      <br />
      <button>{logedin ? "Login" : "logout"}</button> */}
    </>
  );
}

export default App;
