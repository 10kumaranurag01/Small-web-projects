const inputNodeLists = document.querySelectorAll(".property input");

function handleUpdate() {

    const box = document.querySelector(".box");
    const hOffset = document.getElementById("h-offset").value;
    const vOffset = document.getElementById("v-offset").value;
    const blur = document.getElementById("blur").value;
    const spread = document.getElementById("spread").value;
    const color = document.getElementById("color").value;
    const moz = document.querySelector(".moz");
    const webkit = document.querySelector(".webkit");
    const normal = document.querySelector(".normal");

    let boxShadowValue = box.style.boxShadow;
    box.style.boxShadow = `${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}`;

    moz.textContent = `-moz-box-shadow: ${boxShadowValue}`;
    webkit.textContent = `-webkit-box-shadow: ${boxShadowValue}`;
    normal.textContent = `box-shadow: ${boxShadowValue}`;
}

inputNodeLists.forEach((input) => {
    input.addEventListener("change", handleUpdate);
});
inputNodeLists.forEach((input) => {
    input.addEventListener("mousemove", handleUpdate);
});