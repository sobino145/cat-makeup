const EMPTY_HEART = "π€";
const FULL_HEART = "π";

const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
const CAT2 = "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn";
const CAT3 = "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript";

const includesHangul = (text) => /[γ±-γ|γ-γ£|κ°-ν£]/i.test(text);

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};
/* 
λ‘μ»¬μ€νΈλ¦¬μ§μλ λλ²λ‘ κ°μΈμΌ νλλ°, λ°°μ΄ λ± λͺ¨λ λ¬Έμλ‘ μ μ₯μ΄ λμ΄μ λΆνΈν¨μ ν΄μ
*/

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

