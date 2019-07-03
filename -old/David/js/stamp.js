const stampImg = document.querySelector('#stamp')

function stamp(e) {
    const halfWidth = stampImg.naturalWidth / 2
    const halfHeight = stampImg.naturalHeight / 2
    ctx.drawImage(stampImg, e.x - halfWidth, e.y - halfHeight)
}

var stampTool = {
    click: stamp,
    drag: stamp
}
