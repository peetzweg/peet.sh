---
layout: ../../layouts/PostLayout.astro
date: 29.05.2024
author: Philip Poloczek
title: "How the Polkadot SDK Empowers Developers with Unmatched Flexibility"
---

In the ever-evolving world of blockchain technology, the Polkadot SDK (formerly known as Substrate) stands out as a revolutionary framework for building customizable blockchains. Having transitioned from primarily working with Ethereum and Solidity to joining Parity, the company behind Polkadot SDK, over a year ago, I've been immersed in this technology. My journey included attending the [Polkadot Blockchain Academy (PBA)](https://x.com/AcademyPolkadot) in Berkeley in mid-2023, a four-and-a-half-week intensive bootcamp (highly recommended!) that deepened my understanding of cryptography, blockchain fundamentals, game theory and a lot of generic Rust. This article focuses on the mind-blowing capabilities of the Polkadot SDK that I have discovered over the past year.

## State Transition Function: A Dynamic Approach

A fundamental aspect of any blockchain is its state transition function (STF), which processes incoming transactions and updates the blockchain's state. In traditional blockchains, this logic is hardcoded. However, the Polkadot SDK introduces an innovative approach where the STF lives within the blockchain state as a WebAssembly (Wasm) blob. This blob processes transactions and updates the state, allowing for an unprecedented level of flexibility.

What truly sets the Polkadot SDK apart is its capability for forkless upgrades. Since the STF is part of the blockchain state, it can be updated through a transaction, enabling seamless changes without requiring hard forks. This is crucial for long-term blockchain projects, as it allows for adaptations and upgrades to the STF based on evolving requirements.

## Customizable Transaction Validation

Another remarkable feature of the Polkadot SDK is its lack of assumptions about transaction validation. As a runtime developer, you have the freedom to define how transactions are signed, the algorithms used, data encoding methods, payload structures, and size limits. This level of customization is groundbreaking, allowing developers to tailor their blockchains to specific needs and preferences.

This flexibility is not just theoretical but was an intentional design choice from the outset. The creators of Polkadot SDK anticipated the need for adaptability, recognizing that future blockchain requirements might necessitate different signing schemes or even a shift from an account-based model to a UTXO model. This foresight ensures that blockchains built with Polkadot SDK can evolve over time, potentially for decades or even centuries.

## Extrinsics: Beyond Traditional Transactions

In Polkadot, transactions are referred to as extrinsics, emphasizing their role as external inputs to the STF. Extrinsics can be traditional signed user transactions, unsigned transactions, or any other form of input accepted by the STF. This terminology reflects the broad scope of inputs that the Polkadot SDK can handle, further illustrating its versatility.

## FRAME: A Modular Blockchain Framework

Building on the Polkadot SDK, FRAME (Framework for Runtime Aggregation of Modularized Entities) offers a comprehensive library of composable modules known as pallets. These pallets implement common blockchain functionalities such as account management, token balances, transaction fees, and governance. You can explore the available pallets in the [`/substrate/frame` directory](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame).

Each pallet is designed to work independently or in conjunction with others, allowing developers to pick and choose the components needed for their blockchain. By assembling these audited and production-proven pallets, you can create a robust and customized STF, tailored to your specific application logic.

## Smart Contracts: The Contracts Pallet

Smart contracts on Polkadot are implemented through a pallet simply called contracts. This pallet provides all the smart contract functionality you would expect from Ethereum. It allows for deploying a smart contract via an extrinsic, and once instantiated, you can call the contract's functions, interact with other contracts, and even potentially execute other runtime pallet code if permitted.

The contracts pallet runs smart contracts in a Wasm sandbox, metering execution time and securing the contracts against the rest of the blockchain state. Although it operates within the smart contract realm, it can interact with the broader runtime realm if allowed.

Currently, smart contracts for the contracts pallet are written in Rust. There is a framework called [`ink!`](https://use.ink/), which provides macros to annotate your Rust code, making it compatible with the smart contract sandbox seamlessly. ink! knows how to store and retrieve data, call other contracts, and write tests, offering a streamlined development experience for smart contract developers.

## Conclusion

The features discussed here only scratch the surface of what the Polkadot SDK and FRAME offer. The flexibility, adaptability, and modularity of this framework are game-changing for blockchain development. In potential future articles, I plan to delve deeper into the essential and interesting pallets provided by FRAME, highlighting their potential uses and benefits.

For anyone looking to dive deeper into the [Polkadot SDK, the Repository on GitHub](https://github.com/paritytech/polkadot-sdk) is always a good start. Additionally the outdated official [Substrate website](https://substrate.io/) is still an invaluable resource.

Information about the Polkadot Blockchain Academy can be found on their [website](https://polkadot.network/development/blockchain-academy/) or their [X.com account](https://x.com/AcademyPolkadot).
