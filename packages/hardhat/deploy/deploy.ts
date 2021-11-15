import { DeployFunction } from 'hardhat-deploy/types'

import { deploy } from '../utils/deploy-helpers'
 

const deployOptions: DeployFunction = async (hre) => {
  const { getNamedSigner, run, network, log } = hre
  const deployer = await getNamedSigner('deployer')

  

  // Make sure contracts are compiled
  await run('compile')

  log('')
  log('********** Deploying **********', { indent: 1 })
  log('')

  let tokenName = 'TOKENNAME'
  let tokenSymbol = 'SYM'
  let initialBalance = '1000000000000000000000000000000'
 
  const wethDeploy = await deploy({
    contract: 'SimpleERC20',
    args: [tokenName,tokenSymbol,initialBalance],
    skipIfAlreadyDeployed: false,
    hre,
    
  })
}

deployOptions.tags = ['primary']
deployOptions.dependencies = []

export default deployOptions
