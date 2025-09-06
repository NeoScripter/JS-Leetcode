export default function test(name, received, expected) {
    const pass = JSON.stringify(received) === JSON.stringify(expected);
    if (pass) {
        console.log(`✓ ${name}`);
    } else {
        console.error(
            `𐄂 ${name} — expected ${JSON.stringify(expected)}, got ${JSON.stringify(received)}`
        );
    }
}
