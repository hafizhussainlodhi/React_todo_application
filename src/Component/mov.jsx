import { useState } from "react";
import "./Mov.css";
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext.jsx'
function MovTabs() {
    const [index, setIndex] = useState(0);
    const { theme, toggleTheme } = useContext(ThemeContext)

    const users = [
        {
            img: "https://cdn.pixabay.com/photo/2024/03/15/19/51/ai-generated-8635685_1280.png",
            name: "Hafiz M. Husain Lodhi👦",
            description: "About Me: I am a web developer who enjoys building modern and responsive web applications...",
        },
        {
            img: "https://i.pinimg.com/originals/24/6e/4b/246e4b57655ad104255b908bf7378bb7.jpg",
            name: "Usama The Great😊",
            description: "About Me: I am a professional working in the gold and jewelry business...",
        },
        {
            img: "https://www.fabmood.com/wp-content/uploads/2024/10/Cool_haircut_for_teen_boy_-1.jpg",
            name: "Meelad Attari👦",
            description: "About Me: I am a creative graphic designer...",
        },
        {
            img: "https://img.freepik.com/premium-photo/cartoon-character-young-boy_1057389-25145.jpg",
            name: "Hafiz M. Hasan Lodhi😄",
            description: "About Me: I am a mobile application developer...",
        },
        {
            img: "https://media.craiyon.com/2025-04-24/7VO5thgOQuCfgKaqupThMw.webp",
            name: "Talha Moshin😉",
            description: "About Me: I am a digital marketing specialist...",
        }
    ];
    const increaseBtn = () => {
        if (index < users.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0); //
        }
    };
    const decreaseBtn = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(users.length - 1);
        }
    };


 return (
    <div className={theme}>
        
        <div className="theme-toggle-wrapper">
            <label className="switch">
                <input 
                    type="checkbox" 
                    onChange={toggleTheme} 
                    checked={theme === "dark"} 
                />
                <span className="slider round">
                    <span className="icon">{theme === "dark" ? "" : ""}</span>
                </span>
            </label>
        </div>

        <div className="container">
            <div className="card">
                <img className="profileImg" src={users[index].img} alt={users[index].name} style={{ height: "150px", width: "150px" }} />
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
        </div>
    </div>
);
}

export default MovTabs;