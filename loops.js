function forLoop(array)
{
  for(let i = 1, i < array.length, i +=1)
  {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
}
/*
function whileLoop(n)
{
  while(n >= 0)
  {
    console.log(n)
    n -= 1
  }
}

function incrementVariable()
{
  i = i + 1;
  return i;
}


function doWhileLoop(num)
{
  let i = 0
  do {
    console.log("I run once regardless.")
  } while (incrementVariable(i) < num );
}
*/