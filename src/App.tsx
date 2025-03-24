import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function App() {
  const images = [
    "https://imgs.search.brave.com/T51eZPxDyf8GiRlQpilqnFMcuw_HMiy7tj3QX6wKZ8k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFlLzg4/L2U5LzFlODhlOTI5/NWU5NzcwNzQ3ODEw/MjRkNDQ4Mzg1YjE0/LmpwZw",
    "https://imgs.search.brave.com/Ld3qsjyoajU_MTrcMwF-7fIzbAqaD1w1ejRE9cMuKnM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE0MTc1/OTk4LmpwZw",
    "https://imgs.search.brave.com/0OSEFD-S7ULixXa0XfIKbsjjxvtxeIHgq75tAMehgE0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlltWTJOR1Zt/WWpFdE1HVmtNeTAw/TkdWa0xXRTBZVGd0/WW1Rek5URTJZalV3/TkRWbVhrRXlYa0Zx/Y0djQC5qcGc",
  ];
  const [index, setindex] = useState(0);
  useEffect(() => {
    const intervel = setInterval(() => {
      setindex((pre) => (pre + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervel);
  }, []);

  const nextbtn = () => {
    setindex((pre) => (pre + 1) % images.length);
  };
  const prebtn = () => {
    setindex((pre) => (pre - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="container">
        <button className="btn btn-success" onClick={prebtn}>
          pre
        </button>
        <img src={images[index]} alt="no images" width={300} height={500} />
        <button className="btn btn-success" onClick={nextbtn}>
          Next
        </button>
      </div>
    </>
  );
}
