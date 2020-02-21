function myFunction()
{
    const pi = 3.14159265358979;
    let radius = document.getElementById("radius").value;
    let result = radius * radius * pi;
    document.getElementById("result").innerHTML = result;
  }