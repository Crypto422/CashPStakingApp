/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import WalletConnect from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import {
  stakingAbi,
  stakingContractAddress,
  cashpAbi,
  cashpTokenContractAddress,
} from "../utils/constants";

export const AppContext = createContext();

const providerOptions = {
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: "538f6602a3474dfab48d5e4728f98d13"
    }
  }
};



export const AppcontextProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState();
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [network, setNetwork] = useState();
  const [themeMode, setTheme] = useState(false);
  const [we3theme, setWeb3Theme] = useState("light");
  const [contractCashPLiquidity, setCashPContractLiquidity] = useState();
  const [isShowConnectModal, setIsShowConnectModal] = useState();
  const [isShowDisConnectModal, setIsShowDisConnectModal] = useState();

  const [totalClaimedAmount, setTotalClaimedAmount] = useState();
  const [totalDepositAmount, setTotalDepositAmount] = useState();
  const [cashpBalance, setCashpBalance] = useState();
  const [cashpPrice, setCashpPrice] = useState();
  


  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions, // required
    theme: we3theme
  });
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setNetwork(network);
    } catch (error) {
      console.error(error);
    }
  };

  const setThemeMode = (value) => {
    if (value) {
      setWeb3Theme("light")
    } else {
      setWeb3Theme("dark")
    }
    setTheme(value);
  }

;

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        setAccount(accounts[0]);
      };

      const handleChainChanged = (chainId) => {
        setNetworkId(chainId);
      };

      const handleDisconnect = () => {
        disconnectWallet();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [])

  const refreshState = () => {
    setAccount();
    setNetworkId();
    setNetwork();
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
    setIsShowDisConnectModal(false);
  }

  const disconnect = () => {
    setIsShowDisConnectModal(true);
  }

  const getStakingContract = (providerOrSigner) => {
    const loanContract = new ethers.Contract(
      stakingContractAddress,
      stakingAbi,
      providerOrSigner
    );
    return loanContract;
  };
  const getCashpContract = (providerOrSigner) => {
    const odonContract = new ethers.Contract(
      cashpTokenContractAddress,
      cashpAbi,
      providerOrSigner
    );
    return odonContract;
  };

  const getAccBalance = async () => {
    if (library) {
      if (account) {
        let balance = await library.getBalance(account);
        return Number(ethers.utils.formatEther(balance.toString()));
      }
    }
  };

  const getAccCashpBalance = async () => {
    if (library) {
      if (account) {
        const contract = getCashpContract(library);
        const res = await contract.balanceOf(account);
        return Number(ethers.utils.formatEther(res.toString()));
      }
    }
  }

  const getCashpPrice = async () => {
    if (library) {
      if (account) {
        const contract = getStakingContract(library);
        const res = await contract.cashpPrice();
        return Number(res.toString()) / 100000000;
      }
    }
  }

  const getTotalClaimAmount = async () => {
    if (library) {
      if (account) {
        const contract = getStakingContract(library);
        const res = await contract.userClaimAmount(account);
        return Number(ethers.utils.formatEther(res.toString()));
      }
    }
  }

  const getTotalDepositAmount = async () => {
    if (library) {
      if (account) {
        const contract = getStakingContract(library);
        const res = await contract.userLendsAmount(account);
        return Number(ethers.utils.formatEther(res.toString()));
      }
    }
  }

  const setContractTotalLiquidity = async () => {
    if (library) {
      const depositamount = await getTotalDepositAmount();
      const claimedamount = await getTotalClaimAmount();
      const cashpprice = await getCashpPrice();
      const cashpbalance = await getAccCashpBalance();
     

      setTotalDepositAmount(depositamount);
      setTotalClaimedAmount(claimedamount);
      setCashpBalance(cashpbalance);
      setCashpPrice(cashpprice);
    }
  }

  return (
    <AppContext.Provider
      value={{
        totalClaimedAmount,
        totalDepositAmount,
        cashpBalance,
        cashpPrice,
        connectWallet,
        disconnectWallet,
        disconnect,
        themeMode,
        setThemeMode,
        account,
        library,
        provider,
        getStakingContract,
        networkId,
        network,
        getCashpContract,
        getAccBalance,
        getAccCashpBalance,
        contractCashPLiquidity,
        setIsShowDisConnectModal,
        isShowConnectModal,
        isShowDisConnectModal,
        setIsShowConnectModal,
        setCashPContractLiquidity,
        getCashpPrice,
        getTotalClaimAmount,
        getTotalDepositAmount,
        setContractTotalLiquidity
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
