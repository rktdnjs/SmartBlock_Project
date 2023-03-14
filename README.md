Smart Block: visual programming environment for SmartThings
===================
*Software Language Lab, Computer Science, Sookmyung Women’s University*

*Software Languages and Systems Lab at Chonnam National University*

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

newblockly branch(Blockly v9.2.1)
-------------
새로운 blockly 라이브러리 환경에 기존 SmartBlock 코드를 하나씩 떼어내서 옮긴 형태.

[작업 중인 내용]
- 일부 CSS가 적용되지 않는 문제 -> 디버깅 및 수정 필요
- File Save/Load UI 및 기능 구현 -> 좋은 라이브러리가 존재하는지?