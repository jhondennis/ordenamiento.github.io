const container = document.querySelector(".data-container");

// Function to generate bars
function generateBlocks(num = 15) {

  const num1 = parseInt(document.getElementById("bloque").value);
  if( num1 > 0)
    num = num1;
  
  for (let i = 0; i < num; i += 1) {

    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 100) + 1;

    // To create element "div"
    const block = document.createElement("div");

    // To add class "bar" to "div"
    block.classList.add("block");

    // Provide height to the bar
    block.style.height = `${value * 3}px`;
   
    // Translate the bar towards positive X axis
    block.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const blockLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    blockLabel.classList.add("block__id");

    // Assign value to "label"
    blockLabel.innerHTML = value;

    // Append "Label" to "div"
    block.appendChild(blockLabel);

    // Append "div" to "data-container div"
    container.appendChild(block);
  }
  return false
}

function swap(el1, el2) {
  return new Promise(resolve => {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    el1.style.transform = transform2;
    el2.style.transform = transform1;

    // Wait for the transition to end!
    window.requestAnimationFrame(function() {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 300);
    });
  });
}

async function bubbleSort(delay = 300) {

  const delay1 = parseInt(document.getElementById("velocidad").value);
  if ( delay1 > delay)
    delay = delay1;

  let blocks = document.querySelectorAll(".block");
  var barval = document.getElementById("ele")


  for (let i = 0; i < blocks.length - 1; i ++) {
    for (let j = 0; j < blocks.length - i - 1; j ++) {
      blocks[j].style.backgroundColor = "#0000FF";
      blocks[j + 1].style.backgroundColor = "#FF4949";

      await new Promise(resolve => setTimeout(() => { resolve();}, delay));

      const value1 = Number(blocks[j].childNodes[0].innerHTML);
      const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
      }

      blocks[j].style.backgroundColor = "#58B7FF";
      blocks[j + 1].style.backgroundColor = "#58B7FF";
    }

    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
  }
  barval.innerHTML="<h3>Sorted!!!</h3>";

  // To enable the button
  // "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#00599c";

  // To enable the button
  // "Insertion Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#00599c";
}

function generate() {
  window.location.reload();
}

// Function to disable the button
function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

  // To disable the button "Insertion Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}

// generateBlocks(15);
// bubbleSort(300);

