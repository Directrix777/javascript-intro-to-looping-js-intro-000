function forLoop(array)
{
  for(let i = 0; i < 25; i++)
  {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(n)
{
  while(n >= 1)
  {
    console.log(n--)
  }
  return `done`
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
