const Lottery = artifacts.require('Lottery.sol');
const {expectRevert, time} = require('@openzeppelin/test-helpers');
const { web3 } = require('@openzeppelin/test-helpers/src/setup');

contract('Lottery', (accounts) =>{
    let lottContract = null;
    const players = [accounts[1],accounts[2],accounts[3]];

    beforeEach(async()=>{
        lottContract = await Lottery.new(5, {from:accounts[0]});
    });
    
    it('should give error if house fee is greater than 10', async()=>{        
        await expectRevert(
            Lottery.new(15, {from:accounts[0]}),
            'fee should be reasonable'
        );        
    });

    //many more tests should be written

    
    




})