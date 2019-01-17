function onKeyUp() {
    // let input = <HTMLInputElement>document.getElementById("myInput") // get  as HTMLInputElement;
    let input = document.getElementById("myInput");
    let userName = input.value;
    let output = document.getElementById("myOutput");
    output.innerText = `Hi ${userName},
      your name length is ${userName.trim().length} `;
}
//# sourceMappingURL=04_play.js.map