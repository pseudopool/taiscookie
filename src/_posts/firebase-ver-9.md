---
title: "레거시 코드가 무용지물이 됐을 때 🙀"
excerpt: "Firebase 버전 업데이트 때문에 강제로 공식 문서 신봉자 된 건에 대하여"
coverImage: "/assets/posts/firebase-ver-9/cover.png"
date: "2022-10-12T05:35:07.322Z"
ogImage:
  url: "/assets/posts/firebase-ver-9/cover.png"
---

# ☠️ Firebase 쉽다면서요

지금으로부터 네 달 전 6월, 나는 고민을 기록하는 간단한 웹앱을 만들기로 했다. 고민을 기록하는 서비스인 만큼 개인화 되어야 했으므로 회원가입과 로그인이 구현되어야 했고, 각 회원의 고민을 저장할 DB도 필요했다.

이때 내가 떠올린 것은 Firebase로, 구글이나 깃헙 로그인 같은 OAuth도 클라이언트에서 간단히 구현할 수 있고 DB 설정도 직접 웹 콘솔로 제어할 수 있어 쉬워 보였기 때문이다. 무엇보다 전에 마케터로 일하던 앱 서비스 스타트업에서 개발자들이 채택하던 툴이었기에 망설임 없이 도입하고자 했다.

## 🤦 초짜 개발자의 잘못된 학습법

그런데 이때의 나에게는 정말 잘못된 버릇이 있었다. 바로 처음 새로운 기술을 공부할 때, 늘 아래와 같은 방법을 시도한 것이었다.

- 해당 기능을 정확하게 구현한 블로그를 튜토리얼처럼 하나씩 따라하기
- 관련 인강을 찾아 수강하며 영상 속의 단계를 그대로 밟기

지금 생각하면 부끄럽지만, 당시에는 공식 문서나 공식 튜토리얼을 통해 내가 원하는 부분을 취하는 것이 번거롭게 느껴졌고, 따라하기만 하면 그대로 동작할 블로그나 인강을 참고하는 것을 더 효율적이라 여겼다. 아무리 MDN이나 공식 문서의 중요성을 설파하는 이야기를 들어도 그때뿐, 스스로 와닿지 않으니 공식 문서를 읽는 습관이 몸에 익기 어려웠다.

그래서, Firebase 도입을 결정했을 때도 노마드코더의 트위터 클론 강의를 들으며 차근 차근 활용법을 익혀보고자 했다. 무료였고, 강의 전체에서 Firebase 분량은 1시간 내외로 짧았기 때문이다.

## ❌ 그대로 했는데 안 된다고요...?

문제는 그즈음 Firebase가 1버전 업그레이드 되어(ver.9) 근본적인 임포트 방법부터 작은 부분의 메서드까지 모조리 변경되었다는 것이다. 강의는 물론 몇 달 전의 블로그 포스트조차 새로운 버전을 반영하지 못했다.

막막한 마음으로 공식 문서 페이지를 열고 인스톨부터 Firebase를 이용한 기본적인 CRUD를 제어하는 법을 찾기 시작했다. 그제서야 Firestore에서 '문서'와 '필드', 그리고 '컬렉션'의 차이, 'doc'이라는 용어가 의미하는 바 등을 명료하게 이해할 수 있었다. 예를 들어,

```javascript
import { doc, deleteDoc } from "firebase/firestore";

await deleteDoc(doc(db, "cities", "SEOUL"));
```

⬆️ 위와 같은 코드는 cities 컬렉션의 SEOUL이라는 문서를 삭제한다.

```javascript
db.collection("cities").document("SEOUL").updateData([
    "mayor": FieldValue.delete(),
]) { err in
    if let err = err {
        print("Error updating document: \(err)")
    } else {
        print("Document successfully updated")
    }
}
```

⬆️ 비슷해 보이는 위 코드는 cities 컬렉션의 SEOUL이라는 문서에서, capital이라는 필드의 값을 삭제한다. 객체로 생각해보면, cities가 최상위 객체고, 하위에 SEOUL이, 그 하위에 mayor라는 필드가 속해있음을 알 수 있다. 필드의 값을 삭제하는 위 코드를 작성하면, SEOUL 문서의 mayor 속성이 빈 값이 되리라는 것이 유추 가능하다.

---

데이터 읽기도 마찬가지로, 특정 문서를 읽기 위해서는 getDoc이라는 메서드와 onSnapshot이라는 메서드가 나뉘어 있었는데, 후자의 경우 업데이트 내용을 곧바로 반영해 불러오는 방법이었다. 공식 문서의 '데이터 읽기' 섹션에 '데이터 한 번 가져오기'와 '실시간 업데이트 수신 대기'가 나누어 설명되어 있기 때문에 이해할 수 있는 부분이었다.

```javascript
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
```

⬆️ getDoc 메서드로 데이터를 한 번만 가져오는 방법

```javascript
import { doc, onSnapshot } from "firebase/firestore";

const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
  console.log("Current data: ", doc.data());
});
```

⬆️ onSnapshot 메서드로 최신 데이터를 가져오는 방법

## 📃 공식 문서 신봉자의 길

울며 겨자먹기로 공식 문서를 정독하다 보니 단순히 구현 방법을 익히는 것을 넘어 Firebase의 DB 구조에 대한 심도 깊은 이해가 쌓일 수 있었다. 이때 습관이 잘 든 덕분에 이번에 Next.js로 블로그를 만들면서도, 마크다운 문서를 포스트로 구현하는 부분에서 Next.js의 공식 레포지토리를 뜯어보며 참고할 수 있게 됐다.

RTFM(Read The Fxxking Manual)이라는 말이 괜히 있는 게 아니구나 하는 깨달음과 함께, 시간은 조금 더 걸리더라도 기술을 확실하게 이해할 수 있는 바른 길은 공식 문서뿐임을 알게 된 뜻깊은 시간이었다.
