import { BigNumber } from "ethers"
import { UnsignedTransactionRequest, usePrivy } from "@privy-io/react-auth"
import { Interface } from "ethers/lib/utils"

const usePrivySendTransaction = () => {
  const { sendTransaction: privySendTransaction } = usePrivy()

  const sendTransaction = async (
    to,
    chainId,
    abi,
    functionName,
    args,
    value = BigNumber.from("0").toHexString(),
    title = "",
    description = "",
    gasLimit = null,
  ) => {
    try {
      const data = new Interface(abi).encodeFunctionData(functionName, args)
      const unsignedTx = {
        to,
        chainId,
        data,
        value,
      } as UnsignedTransactionRequest
      if (gasLimit) {
        unsignedTx.gasLimit = gasLimit
      }

      const uiConfig = {
        header: title,
        description,
        buttonText: "Sign",
      }
      const txReceipt = await privySendTransaction(unsignedTx, uiConfig)
      return txReceipt.transactionHash
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      return { error }
    }
  }

  return {
    sendTransaction,
  }
}

export default usePrivySendTransaction
