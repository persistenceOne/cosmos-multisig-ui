# How to Use this App

This app requires the [Keplr wallet extension](https://wallet.keplr.app/) to be enabled and setup on your browser.

## Table of Contents

- [Creating and Using Accounts](#accounts)
  - [Use Existing Multisig Account](#using-an-existing-multisig-account)
  - [Create a New Multisig Account](#creating-a-new-multisig-account)
- [Creating a Transaction](#creating-a-transaction)
- [Signing a Transaction](#signing-a-transaction)
- [Broadcasting a Transaction](#broadcast-a-transaction)

## Accounts

### Using an existing multisig account

To use this app with an existing multisig account, simply enter the address in the field provided, and click "Use this Multisig". Note that this address must have sent transactions in the past for this app to be able to use it. If you have an existing multisig that has not sent any transactions, you can recreate it using this tool (be sure to enter the same public keys and threshold). 

<img width="1146" alt="Screenshot 2022-01-24 at 6 36 02 PM" src="https://user-images.githubusercontent.com/53616488/150796120-16eda656-52ea-4d0e-aab4-75ffe4418bb8.png">



You may want to [Create a Transaction](#creating-a-transaction) next.

### Creating a new multisig account

To create a new multisig account, click the "Create New Multisig" button on the app's homepage. Then enter in the addresses of the accounts you would like to use, as well as the number of signatures required to sign a transaction. Click "Create Multisig". These addresses must have sent transactions in the past to be used, the app will show an error if there is no on chain account information for any of the addresses.

<img width="1146" alt="Screenshot 2022-01-24 at 6 42 52 PM" src="https://user-images.githubusercontent.com/53616488/150796245-b6067883-fccb-4a69-a4bd-7828d569358a.png">

<img width="1148" alt="Screenshot 2022-01-24 at 6 43 36 PM" src="https://user-images.githubusercontent.com/53616488/150796300-81ba6d6a-ead2-43f0-b393-0bce3109a8db.png">



You may want to [Create a Transaction](#creating-a-transaction) next.

## Creating a Transaction

On the multisig account page, click "Create Transaction". 

<img width="1146" alt="Screenshot 2022-01-24 at 6 46 18 PM" src="https://user-images.githubusercontent.com/53616488/150796368-8553ad18-a9dd-463e-8d1a-a68248ce24ee.png">


Enter in the to address, the amount and optionally a memo. The gas limit is adjustable, but you probably do not want to change it, as the gas fees are set automatically by the app. Once all the necessary fields are filled in, click "Create Transaction". 

<img width="1146" alt="Screenshot 2022-01-24 at 6 48 50 PM" src="https://user-images.githubusercontent.com/53616488/150796440-857e700a-c3bd-43ed-abb4-cf69e11ebf9f.png">


You may want to [Sign a Transaction](#signing-a-transaction) next.

## Signing a Transaction

To sign a transaction, make sure you have the Keplr wallet app installed and setup on your browser. Then navigate to the transaction page for the transaction you are trying to sign.  

<img width="1149" alt="Screenshot 2022-01-24 at 6 50 34 PM" src="https://user-images.githubusercontent.com/53616488/150796479-e9ca613a-38f0-4793-b9c8-1d2edd713ba3.png">


Click "Connect Wallet" and then "Sign Transaction". Approve the transaction in the Keplr window that pops up. That's it! Once you've successfully signed a transaction, you will see a confirmation message.

<img width="1156" alt="Screenshot 2022-01-24 at 6 53 38 PM" src="https://user-images.githubusercontent.com/53616488/150796533-91777037-e99a-45d5-bde5-903ee85b6195.png">



Once enough necessary signers have signed, anyone will be able to [broadcast the transaction](#broadcasting-a-transaction).

## Broadcasting a Transaction

Once enough signers have signed a transaction, the transaction will become broadcastable. To broadcast, click "Broadcast Transaction". 

<img width="1142" alt="Screenshot 2022-01-24 at 6 55 18 PM" src="https://user-images.githubusercontent.com/53616488/150796590-c64e1690-218d-4e77-baf4-4a3137aaa554.png">


Once initiated it will take several moments for it to go through. 

<img width="1136" alt="Screenshot 2022-01-24 at 6 59 57 PM" src="https://user-images.githubusercontent.com/53616488/150796639-ea1e200a-898b-4a73-8b5c-4ad2de4fe8b3.png">


Once successfully broadcast, the app will show a success message and will give you a link to view the transaction on mintscan. If the transaction could not be broadcast, the error will appear under the broadcast button.

<img width="1141" alt="Screenshot 2022-01-24 at 7 01 01 PM" src="https://user-images.githubusercontent.com/53616488/150796673-d6ad8240-1b2f-4fc8-a028-1f9c036668b8.png">



