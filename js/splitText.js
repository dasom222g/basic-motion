export const splitText = (domEl) => {
  // 문자열을 한글자씩 span에 할당하여 UI업테이트
  const text = domEl.innerText;

  let tags = "";

  for (let el of text) {
    tags += `<span style="display: inline-block;">${el}</span>`;
  }
  domEl.innerHTML = tags;
  // 글자 자동으로 줄바꿈 막음
  domEl.style.textWrap = "nowrap";
};
