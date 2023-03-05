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

upgradeblockly branch
-------------
- 기존 master 브랜치에서 Blockly 버전 업그레이드 1.0 -> 9.xx
- XML로 작성된 toolbox를 워크스페이스에 지정하도록 했던 v1.0과 다르게 새 버전에서는 JSON으로 작성하게 함
- 하단 주소 : JSON으로 toolbox를 작성하는 JSON 방법 & XML 방법을 비교해보기
- https://blocklycodelabs.dev/codelabs/getting-started/index.html#5