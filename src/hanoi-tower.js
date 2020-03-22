module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    //throw 'Not implemented';
    // remove line with error and write your code here
    let disk = Math.pow(2, disksNumber) - 1;
    let secondDisk = disk / (turnsSpeed / 3600);
    let hanoiTower = {
        turns: disk,
        seconds: secondDisk,
    }
    return hanoiTower;
}