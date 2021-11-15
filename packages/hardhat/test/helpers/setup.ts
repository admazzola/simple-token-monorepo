import { Contract, Signer } from 'ethers'
import * as hre from 'hardhat'
import { SimpleERC20 } from '../../types/typechain'

const { getNamedSigner, contracts, deployments, ethers } = hre

interface TestSetupResult {
  simpleErc20: SimpleERC20
 
  user: Signer
  filler: Signer
}

 
export const setup = deployments.createFixture<TestSetupResult, never>(async () => {
  await hre.deployments.fixture('primary', {
    keepExistingDeployments: false
  })

  const user = await getNamedSigner('borrower')
  const filler = await getNamedSigner('lender')

  const simpleErc20 = await contracts.get<SimpleERC20>('SimpleERC20')
   
  

  return {
    simpleErc20,
    
    user,
    filler,
  }
})
