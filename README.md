Smart Block: visual programming environment for SmartThings
===================
*Software Language Lab, Computer Science, Sookmyung Women’s University*


SmartThings
-------------

**SmartThings** is a one of IOT platform. This provide an automated service to a user using SmartApp and SmartDevice.

**SmartApp** is a Groovy-based program that allows developers to create automation for users to tap into the capabilities of SmartDevice.


What is Smart Block?
-------------
What is Smart Block? See this video: https://www.youtube.com/watch?v=htfYUPXLYIA


Why Smart Block?
-------------
Users can have difficulty in writing SmartApp in Groovy code textually.

Smart Block which is a visual block language can help users develop SmartApp easily by building blocks graphically.

When users build the blocks in smart block, it offers the actual groovy code to user

So, Users can develop SmartApp easily in Smart Block, even though they are not expert programmers.

![Smart Block](https://github.com/baknayeon/smartblock/blob/master/main.PNG)

you can see the demo video
https://www.youtube.com/watch?v=d_obu3ArKW8

and start developing smart blocks at smartblock.html

Related paper
-------------
Na-Yeon Bak, Byeong-Mo Chang, Kwanghoon Choi, Smart Block: A Visual Block Language and its Programming Environment for IoT, Journal of Computer Languages, Vol.60, 100999, October 2020.
https://www.sciencedirect.com/science/article/pii/S2590118420300599

Nayeon Park, Byeong-Mo Chang, Kwanghoon Choi, Smart Block: A Visual Programming Environment for SmartThings, SCA2018: the 1st IEEE International Workshop on Smart Computing and Applications, Tokyo, Japan, July 23-27, 2018.
https://ieeexplore.ieee.org/document/8377826

ISSUES
-------------
- saveCode와 관련된 로직(코드 저장 및 불러오기)을 공부해보고, 수정해야 함(핵심)!
- SmartBlock 페이지의 App Name 옆의 + 버튼과 연관된 help.js의 app_info()함수로 실행하는 app_info.html의 역할에 대한 연구 필요
- SaveCode 혹은 SaveBlock(왼쪽 2개의 로직은 현재 같음) 이후 다시 Code 혹은 Preferences 탭으로 가면, 기존의 블록들이 전부 사라지며 Rule, Event, Condition, Action 탭 또한 뜨지 않아 더 이상 블록을 추가할 수 없음 -> (가끔 이러한 현상이 발견된다, 일단 패스!)

Complete!
-------------
- CSS 상의 문제인 것으로 보이는데, Preferences의 탭의 오른쪽 하단의 쓰레기통 아이콘이 Code 탭과는 다르다.(해결 완료)
- SmartBlock 페이지의 App Name 옆의 + 버튼 클릭 시 뜨는 에러 수정하기(해결 완료)