import { splitText } from "./splitText.js";

// index페이지 용
const bgVideo = document.querySelector("video");
const title = document.querySelector(".textBox h2");
const btnOpen = document.querySelector(".btnOpen");
const logo = document.querySelector("h1");
const menus = document.querySelectorAll(".gnb li");

const slogan = document.querySelector(".textBox h2");

splitText(slogan); // 문자열을 한글자씩 span에 할당

const sloganStrList = slogan.querySelectorAll("span");

// footer
const line = document.querySelector(".line");
const snsList = document.querySelectorAll(".sns li");
const copyText = document.querySelector(".copy");

console.log("copyText", copyText);

//scss에서 초기 위치값을 수정하는 것이 아닌 set으로 초기위치값 변경
gsap.set(bgVideo, { opacity: 0 });
// gsap.set(title, { y: -100, opacity: 0 });
gsap.set(sloganStrList, { scale: 3, opacity: 0 });
gsap.set(btnOpen, { opacity: 0 });
gsap.set(logo, { y: -100, opacity: 0 });
gsap.set(menus, { y: -100, opacity: 0 });

// footer
gsap.set(line, { y: -100, opacity: 0 });
gsap.set(snsList, { y: -100, opacity: 0 });
gsap.set(copyText, { y: -100, opacity: 0 });

//각 모션을 동기화처리하기 위해 timeline객체 생성후 변수에 할당
const tl = gsap.timeline();

//로딩 완료시 초기 모션 설정
gsap.to(bgVideo, { opacity: 0.5, duration: 2 });
// gsap.to(title, { y: 0, opacity: 1, duration: 1, delay: 1 });
// gsap.to(btnOpen, { opacity: 1, duration: 1, delay: 1.5 });
// gsap.to(logo, { y: 0, opacity: 1, duration: 1, delay: 2 });
// gsap.to(menus, { y: 0, opacity: 1, duration: 1, delay: 2.5, stagger: 0.2 }); // stagger: 각 요소별 딜레이 차등처리
// // footer
// gsap.to(line, { y: 0, opacity: 1, duration: 1, delay: 3 });
// gsap.to(snsList, { y: 0, opacity: 1, duration: 1, delay: 3, stagger: 0.2 }); // stagger: 각 요소별 딜레이 차등처리
// gsap.to(copyText, { y: 0, opacity: 1, duration: 1, delay: 3.5 });

// timline방식으로 변경
tl.to(title, { y: 0, opacity: 1, duration: 1 }); // 전체 타이틀
tl.to(sloganStrList, { scale: 1, opacity: 1, duration: 1, stagger: 0.2 }); // 타이틀 내 한글자씩
tl.to(btnOpen, { opacity: 1, duration: 1 });
tl.to(logo, { y: 0, opacity: 1, duration: 0.5 });
tl.to(menus, { y: 0, opacity: 1, duration: 1, stagger: 0.2 }); // stagger: 각 요소별 딜레이 차등처리
// footer
tl.to(line, { y: 0, opacity: 1, duration: 1 });
tl.to(snsList, { y: 0, opacity: 1, duration: 1, stagger: 0.2 }); // stagger: 각 요소별 딜레이 차등처리
tl.to(copyText, { y: 0, opacity: 1, duration: 1 });

// 버튼에 호버모션 연결

let onButtonMotion = null;
btnOpen.addEventListener("mouseenter", () => {
  // 버튼에 마우스 들어온 경우
  // gsap.set(btnOpen, { scale: 1 });
  onButtonMotion = gsap.to(btnOpen, {
    scale: 1.2,
    opacity: 0.8,
    repeat: -1,
    yoyo: true,
  }); // 무한 반복, yoyo: 원래모습으로 돌아갈때도 animation처리
});

btnOpen.addEventListener("mouseleave", () => {
  // 버튼에 마우스 떠난경우 경우
  // 초기화
  gsap.to(btnOpen, { scale: 1, opacity: 1, duration: 0.5 });
  onButtonMotion.kill();
});

// ------------------------------------------
