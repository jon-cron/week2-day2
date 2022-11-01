// console.log("hi");

// STUB package array
let packages = [
  {
    priorityLevel: "express",
    isFragile: false,
    weight: 2,
    to: "Sir Harrington IV",
    trackingNumber: "1324kjs",
    missing: false,
    icon: "🎈",
  },
  {
    priorityLevel: "standard",
    isFragile: true,
    weight: 0.5,
    to: "Master Mercutio",
    trackingNumber: "1325sdk",
    missing: false,
    icon: "🎄",
  },
  {
    priorityLevel: "free",
    isFragile: true,
    weight: 0.5,
    to: "Mistress Ravenfeather",
    trackingNumber: "jffd147",
    missing: false,
    icon: "🎃",
  },
  {
    priorityLevel: "standard",
    isFragile: false,
    weight: 4,
    to: "B. Robert Brown",
    trackingNumber: "acdc145",
    missing: false,
    icon: "⚾",
  },
  {
    priorityLevel: "express",
    isFragile: true,
    weight: 6,
    to: "Chancellor Wallace",
    missing: false,
    icon: "⛏",
  },
  {
    priorityLevel: "standard",
    isFragile: false,
    weight: 5,
    to: "Sarah Sharm",
    trackingNumber: "8081baz",
    missing: false,
    icon: "📦",
  },
  {
    priorityLevel: "free",
    isFragile: true,
    weight: 12,
    to: "Tae Lien",
    trackingNumber: "suz2367",
    missing: false,
    icon: "✂",
  },
];

function drawPackages() {
  let packageElm = document.getElementById("packageLocation");

  let template = "";
  packages.forEach((package) => (template += package.icon));
  packageElm.innerText = template;
}
function drawName() {
  let packageElm = document.getElementById("receiver");

  let template = "";
  packages.forEach((package) => (template += package.to));
  packageElm.innerText = template;
}

function drawMaybeMissing(suspects) {
  let packageElm = document.getElementById("packageLocation");

  let template = "";

  suspects.forEach((sus) => (template += sus.icon));

  packageElm.innerText = template;
}

function filterPriority(blank) {
  console.log("Priority Level is", blank);
  let priorityType = packages.filter(
    (package) => package.priorityLevel == blank
  );
  console.log(priorityType);
  drawMaybeMissing(priorityType);
}

function isFragile() {
  let fragile = packages.filter((package) => package.isFragile == true);
  console.log("package is", fragile);
  drawMaybeMissing(fragile);
}
function isNotFragile() {
  let notFragile = packages.filter((package) => package.isFragile !== true);
  console.log("package is", notFragile);
  drawMaybeMissing(notFragile);
}

function weightLowToHigh() {
  let lowToHigh = packages.sort(
    (package1, package2) => package1.weight - package2.weight
  );
  console.log(lowToHigh);
  drawMaybeMissing(lowToHigh);
}
function weightHighToLow() {
  let highToLow = packages.sort(
    (package1, package2) => package2.weight - package1.weight
  );
  console.log(highToLow);
  drawMaybeMissing(highToLow);
}

function missing() {
  let randomMissing = packages[Math.floor(Math.random() * packages.length)];
  randomMissing.missing = true;
  console.log(randomMissing);
}

function getClue() {
  let missingBox = packages.find((package) => package.missing == true);
  let clues = ["priorityLevel", "isFragile", "weight", "trackingNumber"];
  let randomClue = clues[Math.floor(Math.random() * clues.length)];
  let clueElm = document.getElementById("clues");
  switch (randomClue) {
    case "priorityLevel":
      console.log("priorityLevel was selected");
      clueElm.innerHTML += `<p>the priority level is ${missingBox.priorityLevel}. </p>`;
      break;
    case "isFragile":
      console.log("isFragile was selected");
      clueElm.innerHTML += `<p>The package is ${
        missingBox.isFragile ? "Fragile" : "not Fragile"
      }</p>`;
      break;
    case "weight":
      console.log("weight was selected");
      clueElm.innerHTML += `<p>The missing package's weight is ${missingBox.weight}</p>`;
      break;
    case "trackingNumber":
      console.log("tracking number was selected");
      clueElm.innerHTML += `<p>The tracking number is ${missingBox.trackingNumber}</p>`;
      break;
    default:
      break;
  }
}
function findMissing() {
  let finder = window.prompt("where is it?");
  console.log(finder);
  let missingBox = packages.find((package) => package.missing == true);
  if (finder == missingBox.icon) {
    window.alert("found it!");
    location.reload();
  } else {
    getClue();
  }
}

missing();
drawPackages();
