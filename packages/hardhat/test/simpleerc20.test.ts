import { Contract, Signer, BigNumber as BN } from 'ethers'
import * as hre from 'hardhat'
import { SimpleERC20 } from '../types/typechain'
import { use, should } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { solidity } from 'ethereum-waffle'
import { deploy } from '../utils/deploy-helpers'
import {setup} from './helpers/setup'

use(chaiAsPromised)
use(solidity)
should()
 

describe('SimpleERC20', function () {
  let erc20Contract: SimpleERC20
  
  let user: Signer
  let filler: Signer
   

  beforeEach(async () => {
    const result = await setup()
    erc20Contract = result.simpleErc20
    
    user = result.user
   
  })

    
  

  describe('WETH', () => {
    it('should have the contract address set', async () => {
      const wethAddr = erc20Contract.address
      wethAddr.should.exist
    })
  })

   
 
})
