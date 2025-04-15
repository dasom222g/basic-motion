// animation페이지 용
const moveBtn = document.querySelector(".btn-move");
const resetBtn = document.querySelector(".btn-reset");

moveBtn.addEventListener("click", () => {
  gsap.to(".box", {
    x: 300,
    y: 200,
    rotation: 360,
    borderRadius: 60,
    backgroundColor: "#ff69b4", // hex값으로 명시해야 함
    duration: 1,
  });
});

resetBtn.addEventListener("click", () => {
  gsap.to(".box", {
    x: 0,
    y: 0,
    rotation: 0,
    borderRadius: 0,
    backgroundColor: "aqua",
    duration: 0.5,
  });
});
