function onKeyUp() {
    // let input = <HTMLInputElement>document.getElementById("myInput") // get  as HTMLInputElement;
    let input = <HTMLInputElement>document.getElementById("myInput") as HTMLInputElement;
    let userName = input.value;
    let output = document.getElementById("myOutput");
    output.innerText = `Hi ${userName},
      your name length is ${userName.trim().length} `;
}

