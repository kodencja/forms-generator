// 2) SET WIDTH OF a div .frame adjusted to the width of .wheel-box
export const setFrameWidth =(noOfletters:number) =>{
    const frame:HTMLDivElement = document.querySelector('.frame')!;
  
    const wheelBox:HTMLDivElement = document.querySelector('.wheel-box')!;
  const wheelBoxWidth = wheelBox.offsetWidth;
  
    const styleWheelBox = getComputedStyle(wheelBox);
    const wheelBoxMrgLeft = Math.abs(parseInt(styleWheelBox.marginLeft));
    const wheelBoxMrgRight = Math.abs(parseInt(styleWheelBox.marginRight));
  
    // count and set WIDTH for FRAME
    const widthOfFrame = (wheelBoxWidth - wheelBoxMrgLeft - wheelBoxMrgRight) * noOfletters + (wheelBoxWidth - wheelBoxMrgLeft/2);
    frame.style.width = widthOfFrame+"px"; 
  }