// console.log("hi");

// STUB package array
let packages = [
  {
    priorityLevel: "express",
    isFragile: false,
    weight: 2,
    to: "Sir Harrington IV",
    trackingNumber: "1324kjs",
  },
  {
    priorityLevel: "standard",
    isFragile: true,
    weight: 0.5,
    to: "Master Mercutio",
    trackingNumber: "1325sdk",
  },
  {
    priorityLevel: "free",
    isFragile: true,
    weight: 0.5,
    to: "Mistress Ravenfeather",
    trackingNumber: "jffd147",
  },
  {
    priorityLevel: "standard",
    isFragile: false,
    weight: 4,
    to: "B. Robert Brown",
    trackingNumber: "acdc145",
  },
  {
    priorityLevel: "express",
    isFragile: true,
    weight: 6,
    to: "Chancellor Wallace",
  },
  {
    priorityLevel: "standard",
    isFragile: false,
    weight: 5,
    to: "Sarah Sharm",
    trackingNumber: "8081baz",
  },
  {
    priorityLevel: "free",
    isFragile: true,
    weight: 12,
    to: "Tae Lien",
    trackingNumber: "suz2367",
  },
];

function drawPackages() {
  let packageElm = document.getElementById("packageLocation");

  let template = "";
  packages.forEach((package) => (template += package.to));
  packageElm.innerText = template;
}

function drawMaybeMissing(suspects) {
  let packageElm = document.getElementById("packageLocation");

  let template = "";

  suspects.forEach((sus) => (template += sus.to));

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
drawPackages();
