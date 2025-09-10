// auto-stop-bigint.js
function growBigInt(maxMB = 500, step = 10000) {
    let n = 1n;
    let i = 0;

    while (true) {
        n *= 10n; // grow by one digit
        i++;

        if (i % step === 0) {
            const digits = n.toString().length;
            const usedMB = process.memoryUsage().heapUsed / 1024 / 1024;
            console.log(`10^${i} has ${digits} digits, memory: ${usedMB.toFixed(2)} MB`);

            if (usedMB > maxMB) {
                console.log("Stopping to avoid OOM.");
                break;
            }
        }
    }
}

growBigInt(500, 20000);
