const width = window.screen.availWidth;
const height = window.screen.availHeight;
const width2 = window.screen.width;
const height2 = window.screen.height;

let shop = confirm(`The height is ${height} or ${height2} and the width is ${width} or ${width2}`);
if (shop) {
    alert(`Compra realizada`);
} else {
    alert(`Compra cancelada`);
}

const protocol = window.location.protocol;
const hostname = window.location.hostname;
const pathname = window.location.pathname;
const href = window.location.href;

document.write(`
    Protocol: <b>${protocol}</b><br>
    Hostname: <b>${hostname}</b><br>
    Pathname: <b>${pathname}</b><br>
    URL: <b>${href}</b><br>
`);