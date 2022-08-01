import status from '../../../../enums/status';
import config from "config";
import axios from 'axios';
const blockchainBaseUrl = config.get('blockchainBaseUrl');
const blockchainUrl = config.get('blockchainTestnetBaseUrl');
// http://182.72.203.245:1902
// "blockchainTestnetBaseUrl": "http://182.72.203.245:1902/api/testnet",
// "blockchainMainnetBaseUrl": "http://182.72.203.245:1902/api/mainnet",

// const blockchainUrl = config.get('blockchainMainnetBaseUrl');

import { withdrawServices } from '../../services/withdraw';
import { notificationServices } from '../../services/notification';


const { updateWithdraw, withdrawList } = withdrawServices;
const { createNotification } = notificationServices;

import commonFunction from '../../../../helper/util';
var adminAddress = config.get('adminAddress');
var adminPrivateKey = config.get('adminPrivateKey');

const coin = config.get('coins');

//**********************************************smart contract***************************/

import Web3 from 'web3';
let testnode = config.get('testnode');
let withdrawABI = config.get('WITHDRAW_ABI');
let withdrawContract = config.get('withdrawContract');
let web3 = new Web3(new Web3.providers.HttpProvider(testnode));
withdrawABI = withdrawABI.map(method => ({ ...method }));
let paymentContract = new web3.eth.Contract(withdrawABI, withdrawContract);


let IERC20ABI = config.get('IERC20ABI');
IERC20ABI = IERC20ABI.map(method => ({ ...method }));

//***************************************************************************************/
const { ethers } = require("ethers");

const cronJob = require("cron").CronJob;
var coinAddress, transactionResult, transactionHash;
let jobMain = new cronJob('*/10 * * * * *', async function () {
    var getBufferResult = await withdrawList({ status: { $ne: status.DELETE }, transactionStatus: "PENDING" });
    if (getBufferResult.length == 0) {
        console.log("No records found for buffer dbs.");
    } else {
        jobMain.stop();
        let amount = Number(getBufferResult[0].amount);
        let categoryType = await commonFunction.getFeeCategory(blockchainUrl, getBufferResult[0].fromAddress);
        let adminAmount = (amount * categoryType.contentCreatorFee / 100);
        amount = amount - adminAmount;
        let address = [adminAddress, getBufferResult[0].toAddress];
        let amounts = [adminAmount.toString(), amount.toString()];

        if (getBufferResult[0].referralUserAddress != undefined || getBufferResult[0].referralUserAddress != null) {
            address.push(getBufferResult[0].referralUserAddress);
            let reffererAmount = (adminAmount * 30) / 100;
            amounts.push(reffererAmount.toFixed(5).toString());
        }

        if (getBufferResult[0].coin === "ETH" || getBufferResult[0].coin === "BNB") {
            jobMain.stop();
            try {
                transactionHash = await axios.post(`${blockchainUrl}/distributeEther`, {
                    amountToSend: getBufferResult[0].amount.toString(),
                    user: address,
                    amount: amounts,
                    privateKey: getBufferResult[0].privateKey,
                    coin: getBufferResult[0].coin
                });
                sendNotification(getBufferResult[0].userId, transactionHash.data.Hash)
                await updateWithdraw({ _id: getBufferResult[0]._id }, { transactionStatus: "SUCCESS", transactionHash: transactionHash.data.Hash });
                jobMain.stop();
                jobMain.start();
            } catch (error) {
                jobMain.stop();
                jobMain.start();
            }
        } else {
            jobMain.stop();
            try {
                transactionHash = await axios.post(`${blockchainUrl}/distributeTokens`, {
                    user: address,
                    amount: amounts,
                    senderAddress: getBufferResult[0].fromAddress,
                    privateKey: getBufferResult[0].privateKey,
                    coin: getBufferResult[0].coin
                });
                sendNotification(getBufferResult[0].userId, transactionHash.data.Hash)
                await updateWithdraw({ _id: getBufferResult[0]._id }, { transactionStatus: "SUCCESS", transactionHash: transactionHash.data.Hash });
                jobMain.stop();
                jobMain.start();
            } catch (error) {
                jobMain.stop();
                jobMain.start();
            }
        }

    }
})
jobMain.stop();







const sendNotification = async (userId, txHash) => {
    await createNotification({
        title: `Transaction Successfull Alert!`,
        description: `Your payment has been confirmed successfully, your transaction has is ${txHash}`,
        userId: userId,
        notificationType: "PAYMENT_SUCCESS"
    });
}



