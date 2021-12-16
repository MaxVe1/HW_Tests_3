describe('The game', function () {
    it('should get more than 100 points ', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/arkanoid.html');
        await browser.pause(1000);
        await $('button=PLAY').click();
        await browser.waitUntil(async () => {
            // player logic
            const ballCoordinates = await $('#ball').getLocation('x');
            const padCoordinates = await $('#pad').getLocation('x');
      
            if(ballCoordinates < padCoordinates){
                await browser.keys('A');
            } else if(ballCoordinates > padCoordinates ){
                await browser.keys('D');
            }
            const points = parseInt(await $('#points').getText(), 10);
            if (points > 100) return true
            console.log({ points })
        }, { timeout: 60000, interval: 10 })
    });
})
