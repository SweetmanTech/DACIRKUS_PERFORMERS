import { BigNumber } from "ethers"
import { UnsignedTransactionRequest, usePrivy } from "@privy-io/react-auth"
import { Interface } from "ethers/lib/utils"
import handleTxError from "@/lib/handleTxError"

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
      return txReceipt
    } catch (error) {
      handleTxError(error)
      return { error }
    }
  }

  return {
    sendTransaction,
  }
}

export default usePrivySendTransaction
