function scuberGreetingForFeet(someValue){
  // Write your code here!
  if(someValue <= 400){
    return 'This one is on me!';
  } else if (someValue > 2500){
    return 'No can do.';
  } else{
    return 'I will gladly take your thirty bucks.';
  }

}

function ternaryCheckCity(someCity){
  // Write your code here!
  // if(someCity === 'NYC'){
  //   return 'Ok, sounds good.';
  // } else{
  //   return "No go.";
  // }
  return someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(someTip){
  // Write your code here!
  switch(someTip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}