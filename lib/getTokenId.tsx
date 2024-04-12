const getTokenId = (txHash) => parseInt(txHash.logs[txHash.logs.length - 1].topics[3], 16)

export default getTokenId
