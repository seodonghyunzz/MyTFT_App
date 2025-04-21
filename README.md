# MyTFT

🎮 **전략적 팀 전투(TFT) 전적 검색 웹 애플리케이션**  
라이엇 게임즈 API를 활용한 소환사 검색 및 전적 분석 서비스

---

## 🔧 기술 스택

- **Next.js** (App Router)
- **React**
- **Firebase** (즐겨찾기 저장)
- **CSS**
- **Riot Games API**

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 🔍 소환사 검색 | `플레이어명#태그` 형식으로 입력하여 전적 확인 |
| 📊 전적 분석 | 최근 20게임의 챔피언, 아이템, 시너지 출력 |
| 🖼️ 커스터마이징 | TFT 시즌14의 챔피언/아이템 이미지 기반 시각화 |
| ⭐ 즐겨찾기 | 자주 검색하는 유저를 저장하고 빠르게 접근 |
| 🏆 순위표 | 현재 순위표를 출력/순위권의 유저를 바로 검색 |


---

## 🖼️ 데모

=======

### 🔍 홈 화면  
![홈 화면](https://raw.githubusercontent.com/seodonghyunzz/MyTFT_App/main/public/screenshots/home.PNG)

### 🎯 소환사 검색 결과  
![검색 결과](https://raw.githubusercontent.com/seodonghyunzz/MyTFT_App/main/public/screenshots/search_result.PNG)

### ⭐ 즐겨찾기, 순위표  
![즐겨찾기](https://raw.githubusercontent.com/seodonghyunzz/MyTFT_App/main/public/screenshots/favorites.PNG)

### 🕹️ 최근 전적  
![최근 전적](https://raw.githubusercontent.com/seodonghyunzz/MyTFT_App/main/public/screenshots/match.PNG)



## 🚀 설치 및 실행 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/seodonghyunzz/MyTFT_App.git

# 2. 디렉토리 이동
cd MyTFT_App

# 3. 패키지 설치
npm install

# 4. 개발 서버 실행
npm run dev


=======

🔐 환경 변수 (.env.local)

NEXT_PUBLIC_API_KEY= YOUR_RIOT_API_KEY
NEXT_PUBLIC_FIREBASE_API_KEY= YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_AUTHDOMAIN= YOUR_FIREBASE_AUTHDOMAIN
NEXT_PUBLIC_PROJECTID= YOUR_FIREBASE_PROJECTID
NEXT_PUBLIC_STRORAGEBUCKET= YOUR_FIREBASE_STRORAGEBUCKET
NEXT_PUBLIC_MESSAGINGSENDERID= YOUR_FIREBASE_MESSAGINGSENDERID
NEXT_PUBLIC_APPID= YOUR_FIREBASE_APPID
NEXT_PUBLIC_MEASUREMENTID= YOUR_FIREBASE_MEASUREMENTID

🧠 참고 및 출처

# Riot Games Developer Portal

# TFT API Docs

# 아이템/챔피언 이미지: CommunityDragon

📮 Contact

@ durcjsay@gmail.com (gmail)
@ seodonghyunzz (github)

