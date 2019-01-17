async function printDelayed(items: string[]) {
    for (const item of items) {
        await delay(500);
        console.log(item);
    }
}

async function delay(ms: number) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });
}

function playWithAsync() {
    printDelayed(['This', 'is', 'async', 'task', 'work']).then(() => {
        console.log();
        console.log('All Printed !');
    });
}

