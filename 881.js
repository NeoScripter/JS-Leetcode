var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);

    let boats = 0,
        low = 0,
        high = people.length - 1;

    while (low <= high) {
        const [light, heavy] = [people[low], people[high]];

        if (light + heavy <= limit) {
            low++;
        }
        boats++;
        high--;
    }

    return boats;
};
