const failTest = () => {
    process.exit(1);
}

const succeedtest = () => {
    process.exit(0);
}

const tempTest = () => {
    console.log("Nothing");
}


succeedtest();
// failTest();
// smth
tempTest();

