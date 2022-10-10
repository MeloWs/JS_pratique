import { useState } from "react";
import "../assets/styles/footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        Laissez-nous votre mail :{" "}
        <input
          placeholder="Entrez votre mail"
          onChange={handleInput}
          value={inputValue}
          onBlur={handleBlur}
        />
      </div>
    </footer>
  );
}

export default Footer;
