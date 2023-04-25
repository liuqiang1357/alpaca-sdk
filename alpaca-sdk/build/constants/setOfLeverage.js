export function setOfLeverage(maxLeverage) {
    if (maxLeverage === 1.75) {
        return [1, 1.25, 1.5, 1.75];
    }
    else if (maxLeverage === 2) {
        return [1, 1.5, 2];
    }
    else if (maxLeverage === 2.5) {
        return [1, 1.5, 2, 2.5];
    }
    else if (maxLeverage === 3) {
        return [1, 1.5, 2, 2.5, 3];
    }
    else if (maxLeverage === 4) {
        return [1, 2, 3, 4];
    }
    else if (maxLeverage === 6) {
        return [1, 2, 3, 4, 5, 6];
    }
    else {
        return [1];
    }
}
